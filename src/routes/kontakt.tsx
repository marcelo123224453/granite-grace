import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Facebook, Send, Check } from "lucide-react";
import { toast, Toaster } from "sonner";
import { PageWrap } from "@/components/SiteLayout";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — NAGROBEX | Bezpłatna wycena | 515 486 550 | Obornicka 306 Poznań" },
      { name: "description", content: "Skontaktuj się z NAGROBEX Poznań. Telefon: 515 486 550. Adres: Obornicka 306. Bezpłatna wycena, doradztwo bez presji." },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: KontaktPage,
});

const inquiryTypes = ["Nowy nagrobek", "Renowacja nagrobka", "Projekt indywidualny", "Dodatkowe elementy", "Inne"];
const monumentKinds = ["Pojedynczy", "Podwójny", "Na urnę", "Dziecięcy", "Rodzinny", "Nie wiem jeszcze"];

function KontaktPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    inquiry: inquiryTypes[0],
    kind: monumentKinds[0],
    message: "",
    rodo: false,
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Proszę uzupełnić imię, nazwisko i telefon.");
      return;
    }
    if (!form.rodo) {
      toast.error("Proszę zaakceptować zgodę RODO.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          inquiry: form.inquiry,
          kind: form.kind,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setSent(true);
      toast.success("Dziękujemy! Skontaktujemy się wkrótce.");
    } catch (err) {
      console.error(err);
      toast.error("Nie udało się wysłać wiadomości. Zadzwoń: 515 486 550.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageWrap>
      <Toaster position="top-center" richColors />
      <section className="granite-texture granite-noise py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-gold">Kontakt</span>
          <h1 className="mt-4 font-display text-4xl text-white md:text-6xl">Pan Kamil doradzi osobiście</h1>
          <p className="mx-auto mt-6 max-w-xl text-white/70 italic font-display text-lg">Bez presji i pośpiechu.</p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_400px] lg:px-8">
          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="border border-border bg-card p-7 md:p-10">
            <h2 className="font-display text-2xl text-granite md:text-3xl">Bezpłatna wycena</h2>
            <p className="mt-2 text-sm text-muted-foreground">Wypełnij formularz lub zadzwoń — odpowiemy najszybciej jak to możliwe.</p>

            {sent ? (
              <div className="mt-8 flex flex-col items-center gap-4 border border-gold/40 bg-sandstone p-8 text-center">
                <Check className="size-12 text-gold" />
                <h3 className="font-display text-xl text-granite">Dziękujemy za wiadomość</h3>
                <p className="text-sm text-muted-foreground">Skontaktujemy się z Tobą najszybciej jak to możliwe — zazwyczaj w ciągu 24 godzin w dni robocze.</p>
              </div>
            ) : (
              <div className="mt-8 grid gap-5">
                <Field label="Imię i Nazwisko *">
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-stone" required />
                </Field>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Telefon *">
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input-stone" required />
                  </Field>
                  <Field label="Email (opcjonalnie)">
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-stone" />
                  </Field>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Rodzaj zapytania">
                    <select value={form.inquiry} onChange={(e) => setForm({ ...form, inquiry: e.target.value })} className="input-stone">
                      {inquiryTypes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </Field>
                  <Field label="Rodzaj nagrobka">
                    <select value={form.kind} onChange={(e) => setForm({ ...form, kind: e.target.value })} className="input-stone">
                      {monumentKinds.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label="Wiadomość lub opis">
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="input-stone resize-none" />
                </Field>

                <label className="flex items-start gap-3 text-sm text-foreground/80">
                  <input type="checkbox" checked={form.rodo} onChange={(e) => setForm({ ...form, rodo: e.target.checked })} className="mt-1 size-4 accent-[var(--color-gold)]" />
                  <span>Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zapytania. *</span>
                </label>

                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-4 font-mono text-sm uppercase tracking-[0.2em] text-granite transition-colors hover:bg-gold-soft disabled:opacity-60"
                >
                  <Send className="size-4" />
                  {submitting ? "Wysyłanie..." : "Wyślij zapytanie — bezpłatna wycena"}
                </button>
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.aside initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="space-y-5">
            <div className="granite-texture granite-noise relative p-7 text-white">
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Telefon</div>
              <a href="tel:515486550" className="mt-3 block font-display text-3xl text-gold pulse-soft hover:text-gold-soft">
                515 486 550
              </a>
              <p className="mt-2 text-sm text-white/65">Pon–Pt 10:00–18:00</p>
            </div>

            <InfoCard icon={MapPin} title="Adres">
              Obornicka 306<br />60-691 Poznań
            </InfoCard>
            <InfoCard icon={Clock} title="Godziny otwarcia">
              Pon–Pt 10:00–18:00<br />Sob–Nd: zamknięte
            </InfoCard>
            <InfoCard icon={Facebook} title="Social">
              <a href="https://www.facebook.com/p/Nagrobex-100076462323777/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                Odwiedź nas na Facebooku →
              </a>
            </InfoCard>
          </motion.aside>
        </div>

        {/* Map */}
        <div className="mx-auto mt-16 max-w-6xl px-5 lg:px-8">
          <div className="overflow-hidden border border-border">
            <iframe
              title="Mapa — NAGROBEX Obornicka 306 Poznań"
              src="https://www.google.com/maps?q=Obornicka+306,+60-691+Pozna%C5%84&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      <style>{`
        .input-stone {
          width: 100%;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          padding: 0.75rem 1rem;
          font-family: var(--font-body);
          color: var(--color-foreground);
          border-radius: 2px;
          transition: border-color 0.2s;
        }
        .input-stone:focus {
          outline: none;
          border-color: var(--color-gold);
          box-shadow: 0 0 0 3px oklch(0.74 0.13 85 / 0.15);
        }
      `}</style>
    </PageWrap>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-wider text-granite-soft">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="border border-border bg-card p-6">
      <div className="flex items-center gap-3">
        <Icon className="size-5 text-gold" />
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-granite-soft">{title}</div>
      </div>
      <div className="mt-3 text-foreground/85">{children}</div>
    </div>
  );
}
