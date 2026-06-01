// src/routes/api/send-email.ts
// ─────────────────────────────────────────────────────────────────
// Cloudflare Workers API route — wysyła mail przez Resend
// ─────────────────────────────────────────────────────────────────
import { createAPIFileRoute } from "@tanstack/react-start/api";

interface Env {
  RESEND_API_KEY: string;
}

export const APIRoute = createAPIFileRoute("/api/send-email")({
  POST: async ({ request }) => {
    // Pobierz klucz API z Cloudflare env (ustawiony w wrangler.jsonc / Cloudflare dashboard)
    const env = (request as unknown as { env: Env }).env ?? process.env;
    const apiKey = (env as Env).RESEND_API_KEY ?? (process.env.RESEND_API_KEY as string);

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Brak klucza RESEND_API_KEY" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Parsuj dane z formularza
    let body: {
      name: string;
      phone: string;
      email: string;
      inquiry: string;
      kind: string;
      message: string;
    };

    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Nieprawidłowe dane" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { name, phone, email, inquiry, kind, message } = body;

    if (!name?.trim() || !phone?.trim()) {
      return new Response(JSON.stringify({ error: "Brak wymaganych pól" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Treść maila HTML
    const htmlBody = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2c2c2c;">
        <div style="background: #1a1a1a; padding: 24px 32px;">
          <h1 style="color: #C8A96E; font-size: 22px; margin: 0;">
            Nowe zapytanie — NAGROBEX
          </h1>
        </div>
        <div style="padding: 32px; background: #fafaf8; border: 1px solid #e5e0d8;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #e5e0d8;">
              <td style="padding: 12px 0; font-weight: bold; width: 160px; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Imię i nazwisko</td>
              <td style="padding: 12px 0; font-size: 15px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e0d8;">
              <td style="padding: 12px 0; font-weight: bold; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Telefon</td>
              <td style="padding: 12px 0; font-size: 15px;">
                <a href="tel:${phone}" style="color: #C8A96E; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            ${email ? `
            <tr style="border-bottom: 1px solid #e5e0d8;">
              <td style="padding: 12px 0; font-weight: bold; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
              <td style="padding: 12px 0; font-size: 15px;">
                <a href="mailto:${email}" style="color: #C8A96E; text-decoration: none;">${email}</a>
              </td>
            </tr>` : ""}
            <tr style="border-bottom: 1px solid #e5e0d8;">
              <td style="padding: 12px 0; font-weight: bold; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Rodzaj zapytania</td>
              <td style="padding: 12px 0; font-size: 15px;">${inquiry}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e0d8;">
              <td style="padding: 12px 0; font-weight: bold; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Rodzaj nagrobka</td>
              <td style="padding: 12px 0; font-size: 15px;">${kind}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Wiadomość</td>
              <td style="padding: 12px 0; font-size: 15px; white-space: pre-wrap;">${message}</td>
            </tr>` : ""}
          </table>
        </div>
        <div style="padding: 20px 32px; background: #f0ece4; font-size: 12px; color: #888;">
          Wiadomość wysłana ze strony nagrobex.pl — ${new Date().toLocaleString("pl-PL")}
        </div>
      </div>
    `;

    // Wyślij przez Resend API
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // ⚠️ ZMIEŃ na swoją zweryfikowaną domenę w Resend
        // np. "kontakt@nagrobex.pl" lub "noreply@nagrobex.pl"
        from: "NAGROBEX <kontakt@nagrobex.pl>",
        // ⚠️ ZMIEŃ na adres który ma odbierać maile
        to: ["nagrobex@gmail.com"],
        reply_to: email || undefined,
        subject: `Nowe zapytanie od ${name} — ${inquiry}`,
        html: htmlBody,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error("Resend error:", err);
      return new Response(JSON.stringify({ error: "Błąd wysyłania maila" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  },
});
