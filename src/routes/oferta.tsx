import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PageWrap, SectionTitle, GoldDivider } from "@/components/SiteLayout";

export const Route = createFileRoute("/oferta")({
  head: () => ({
    meta: [
      { title: "Oferta — Nagrobki granitowe, renowacja, projektowanie | NAGROBEX Poznań" },
      { name: "description", content: "Oferta NAGROBEX: nagrobki granitowe, projekty na zamówienie, renowacja, dodatkowe elementy. Poznań i Wielkopolska. Bezpłatna wycena." },
      { property: "og:title", content: "Oferta — NAGROBEX Poznań" },
      { property: "og:description", content: "Nagrobki granitowe, renowacja, projekty indywidualne, akcesoria." },
    ],
    links: [{ rel: "canonical", href: "/oferta" }],
  }),
  component: OfertaPage,
});

const fadeIn = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.8, ease: "easeOut" as const } };

const offers = [
  {
    n: "01",
    title: "Nagrobki granitowe",
    desc: "Tworzymy nagrobki z najwyższej jakości granitu dostępnego w wielu kolorach i wykończeniach. Każdy nagrobek projektujemy i wykonujemy indywidualnie, dopasowując wzór, materiał i detale do życzenia klienta. Obsługujemy cmentarze w Poznaniu i całej Wielkopolsce.",
    types: ["Nagrobki pojedyncze", "Nagrobki podwójne", "Nagrobki na urny", "Nagrobki dziecięce", "Grobowce rodzinne"],
    bullets: ["Granit w wielu kolorach", "Klasyczne i nowoczesne wzory", "Indywidualny projekt", "Montaż na cmentarzu", "Przystępne ceny"],
  },
  {
    n: "02",
    title: "Projektowanie na zamówienie",
    desc: "Realizujemy projekty nagrobków według życzenia klienta — w tym odwzorowanie wzoru z fotografii. Pan Kamil osobiście omawia każdy projekt, dobiera materiał i detale. Możliwość wykonania każdego kształtu, wzoru i napisu.",
    bullets: ["Projekt według zdjęcia", "Dowolny kształt i wzór", "Inskrypcje i litery", "Zdjęcia ceramiczne", "Akcesoria zdobnicze"],
  },
  {
    n: "03",
    title: "Renowacja nagrobków",
    desc: "Kompleksowa renowacja nagrobków z lastryko i granitu: czyszczenie, naprawa szczelin, wymiana elementów, odświeżenie napisów, podniesienie zapadniętych płyt, wymiana obrzeży, układanie płytek granitowych i kostki wokół nagrobka.",
    bullets: ["Czyszczenie i impregnacja", "Naprawa pęknięć i szczelin", "Podniesienie zapadniętego nagrobka", "Odświeżenie liter i napisów", "Wymiana obrzeży", "Płytki i kostka granitowa wokół grobu"],
  },
  {
    n: "04",
    title: "Dodatkowe elementy",
    desc: "Uzupełnienie nagrobka o elementy dekoracyjne i funkcjonalne: wazony, znicze granitowe, książki granitowe, krzyże, rzeźby, ceramiczne zdjęcia, tabliczki i inskrypcje.",
    bullets: ["Wazony granitowe", "Znicze i świeczniki", "Książki kamienne", "Ceramiczne zdjęcia", "Krzyże i rzeźby", "Tabliczki pamiątkowe"],
  },
];

function OfertaPage() {
  return (
    <PageWrap>
      <section className="granite-texture granite-noise py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-gold">Oferta</span>
          <h1 className="mt-4 font-display text-4xl text-white md:text-6xl">Co dla Ciebie zrobimy</h1>
          <p className="mx-auto mt-6 max-w-xl text-white/70">Cztery filary naszej pracy — od pierwszego pomysłu po montaż na cmentarzu.</p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          {offers.map((o, i) => (
            <div key={o.n}>
              <motion.article {...fadeIn} className="grid gap-8 py-12 md:grid-cols-[120px_1fr] md:py-16">
                <div>
                  <span className="font-mono text-5xl text-gold md:text-6xl">{o.n}</span>
                </div>
                <div>
                  <h2 className="font-display text-3xl text-granite md:text-4xl">{o.title}</h2>
                  <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">{o.desc}</p>

                  {o.types && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {o.types.map((t) => (
                        <span key={t} className="border border-border bg-card px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-granite-soft">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {o.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                        <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/kontakt" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-granite px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-gold hover:text-granite">
                    Zapytaj o wycenę <ArrowRight className="size-4" />
                  </Link>
                </div>
              </motion.article>
              {i < offers.length - 1 && <GoldDivider />}
            </div>
          ))}
        </div>
      </section>
    </PageWrap>
  );
}
