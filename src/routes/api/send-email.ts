import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/send-email")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
          return new Response(JSON.stringify({ error: "Brak klucza RESEND_API_KEY" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        let body: {
          name: string;
          phone: string;
          email?: string;
          inquiry: string;
          kind: string;
          message?: string;
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

        const escape = (s: string) =>
          s.replace(/[&<>"']/g, (c) =>
            ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
          );

        const htmlBody = `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2c2c2c;">
            <div style="background: #1a1a1a; padding: 24px 32px;">
              <h1 style="color: #C8A96E; font-size: 22px; margin: 0;">Nowe zapytanie — NAGROBEX</h1>
            </div>
            <div style="padding: 32px; background: #fafaf8; border: 1px solid #e5e0d8;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #e5e0d8;">
                  <td style="padding: 12px 0; font-weight: bold; width: 160px; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Imię i nazwisko</td>
                  <td style="padding: 12px 0; font-size: 15px;">${escape(name)}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e0d8;">
                  <td style="padding: 12px 0; font-weight: bold; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Telefon</td>
                  <td style="padding: 12px 0; font-size: 15px;"><a href="tel:${escape(phone)}" style="color: #C8A96E; text-decoration: none;">${escape(phone)}</a></td>
                </tr>
                ${email ? `
                <tr style="border-bottom: 1px solid #e5e0d8;">
                  <td style="padding: 12px 0; font-weight: bold; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                  <td style="padding: 12px 0; font-size: 15px;"><a href="mailto:${escape(email)}" style="color: #C8A96E; text-decoration: none;">${escape(email)}</a></td>
                </tr>` : ""}
                <tr style="border-bottom: 1px solid #e5e0d8;">
                  <td style="padding: 12px 0; font-weight: bold; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Rodzaj zapytania</td>
                  <td style="padding: 12px 0; font-size: 15px;">${escape(inquiry)}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e0d8;">
                  <td style="padding: 12px 0; font-weight: bold; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Rodzaj nagrobka</td>
                  <td style="padding: 12px 0; font-size: 15px;">${escape(kind)}</td>
                </tr>
                ${message ? `
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Wiadomość</td>
                  <td style="padding: 12px 0; font-size: 15px; white-space: pre-wrap;">${escape(message)}</td>
                </tr>` : ""}
              </table>
            </div>
            <div style="padding: 20px 32px; background: #f0ece4; font-size: 12px; color: #888;">
              Wiadomość wysłana ze strony nagrobex-poznan.pl — ${new Date().toLocaleString("pl-PL")}
            </div>
          </div>
        `;

        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "NAGROBEX <kontakt@nagrobex-poznan.pl>",
            to: ["nagrobex-kontakt@wp.pl"],
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
    },
  },
});
