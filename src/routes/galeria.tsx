import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { z } from "zod";
import { PageWrap, SectionTitle } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";
import n1 from "@/assets/nagrobek-1.jpg";
import n2 from "@/assets/nagrobek-2.jpg";
import n3 from "@/assets/nagrobek-3.jpg";
import n4 from "@/assets/nagrobek-4.jpg";
import n5 from "@/assets/nagrobek-5.jpg";
import nDetal from "@/assets/nagrobek-detal.jpg";
import nWarsztat from "@/assets/nagrobek-warsztat.jpg";

export const Route = createFileRoute("/galeria")({
  validateSearch: z.object({
    kategoria: z.enum(["wszystkie", "pojedyncze", "podwojne", "urnowe", "dzieciece", "rodzinne", "nowoczesne", "renowacje"]).optional(),
  }),
  head: () => ({
    meta: [
      { title: "Galeria realizacji — Nagrobki i renowacje | NAGROBEX Poznań" },
      { name: "description", content: "Zobacz nasze realizacje — nagrobki granitowe, projekty rodzinne, renowacje. NAGROBEX Poznań." },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: GaleriaPage,
});

type Cat = "pojedyncze" | "podwojne" | "urnowe" | "dzieciece" | "rodzinne" | "nowoczesne" | "renowacje";

const items: { img: string; type: string; cats: Cat[]; desc: string }[] = [
  { img: n1, type: "Grobowiec rodzinny", cats: ["rodzinne", "podwojne"], desc: "Granit czarny, polerowany · Poznań" },
  { img: n2, type: "Nagrobek podwójny", cats: ["podwojne"], desc: "Granit szary, litery złocone" },
  { img: n3, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit jasny z krzyżem · Poznań" },
  { img: n4, type: "Nagrobek nowoczesny", cats: ["nowoczesne", "podwojne"], desc: "Multicolor, forma minimalistyczna" },
  { img: n5, type: "Nagrobek prawosławny", cats: ["pojedyncze", "nowoczesne"], desc: "Granit szary, krzyż prawosławny" },
  { img: nDetal, type: "Detal — grafika nagrobka", cats: ["nowoczesne"], desc: "Granit czarny · grawer artystyczny" },
  { img: nWarsztat, type: "Wybór z naszego zakładu", cats: ["pojedyncze", "podwojne", "nowoczesne"], desc: "Obornicka 306, Poznań" },
  { img: n1, type: "Renowacja — pełna wymiana", cats: ["renowacje"], desc: "Wymiana płyt i obrzeży" },
  { img: n2, type: "Renowacja — odświeżenie", cats: ["renowacje"], desc: "Czyszczenie i impregnacja" },
  { img: n3, type: "Nagrobek dziecięcy", cats: ["dzieciece"], desc: "Granit biały, delikatny" },
  { img: n4, type: "Grobowiec na urnę", cats: ["urnowe"], desc: "Forma dwuosobowa" },
  { img: n5, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit szary, klasyczny kształt" },
];

const FILTERS: { key: "wszystkie" | Cat; label: string }[] = [
  { key: "wszystkie", label: "Wszystkie" },
  { key: "pojedyncze", label: "Pojedyncze" },
  { key: "podwojne", label: "Podwójne" },
  { key: "urnowe", label: "Urnowe" },
  { key: "dzieciece", label: "Dziecięce" },
  { key: "rodzinne", label: "Rodzinne" },
  { key: "nowoczesne", label: "Nowoczesne" },
  { key: "renowacje", label: "Renowacje" },
];

function GaleriaPage() {
  const search = Route.useSearch();
  const [active, setActive] = useState<typeof FILTERS[number]["key"]>(search.kategoria ?? "wszystkie");

  const filtered = useMemo(
    () => active === "wszystkie" ? items : items.filter((it) => it.cats.includes(active as Cat)),
    [active]
  );

  return (
    <PageWrap>
      <section className="granite-texture granite-noise py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-gold">Galeria</span>
          <h1 className="mt-4 font-display text-4xl text-white md:text-6xl">Nasze realizacje</h1>
          <p className="mx-auto mt-6 max-w-xl text-white/70">Wybór nagrobków i renowacji wykonanych w Poznaniu i Wielkopolsce.</p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`rounded-sm border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                  active === f.key ? "border-gold bg-gold text-granite" : "border-border bg-card text-granite-soft hover:border-gold hover:text-granite"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((it, i) => (
                <motion.figure
                  key={it.img + it.type + i}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group overflow-hidden border border-border bg-card transition-all hover:border-gold hover:shadow-xl"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-granite">
                    <img src={it.img} alt={it.type} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="border-t border-border p-5">
                    <h3 className="font-display text-lg text-granite">{it.type}</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">{it.desc}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>

          <p className="mt-8 text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {/* Replace placeholders with real monument photos */}
            Galeria aktualizowana na bieżąco
          </p>

          {/* CTA */}
          <div className="mt-20 border border-border bg-sandstone p-8 text-center md:p-12">
            <h2 className="font-display text-2xl text-granite md:text-3xl">
              Masz zdjęcie nagrobka, który Ci się podoba?
            </h2>
            <p className="mt-3 text-foreground/75">Przynieś je — odwzorujemy go dla Ciebie.</p>
            <Link to="/kontakt" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-granite px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-white hover:bg-gold hover:text-granite">
              Skontaktuj się <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageWrap>
  );
}
