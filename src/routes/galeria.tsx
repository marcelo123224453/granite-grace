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
import n6 from "@/assets/673414230_992487589976643_5370561090871691160_n.jpg";
import n7 from "@/assets/569516638_849008100991260_4224958326701579055_n.jpg";
import n8 from "@/assets/565679113_846124567946280_8598260601751854206_n.jpg";
import n9 from "@/assets/564610504_842136365011767_6562503235974255662_n.jpg";
import n10 from "@/assets/703844548_1017523120806423_3790274995248193897_n (2).jpg";
import n1  from "@/assets/IMG_6006.HEIC";
import n2  from "@/assets/IMG_6008.HEIC";
import n3  from "@/assets/IMG_6009.HEIC";
import n4  from "@/assets/IMG_6015.HEIC";
import n5  from "@/assets/IMG_6016.HEIC";
import n6  from "@/assets/IMG_6011.jpg";
import n7  from "@/assets/IMG_6012.jpg";
import n8  from "@/assets/IMG_6013.jpg";
import n9  from "@/assets/IMG_6014.jpg";
import n10 from "@/assets/IMG_6017.HEIC";
import n11 from "@/assets/IMG_6019.HEIC";
import n12 from "@/assets/IMG_6020.HEIC";
import n13 from "@/assets/IMG_6021.HEIC";
import n14 from "@/assets/IMG_6022.HEIC";
import n15 from "@/assets/IMG_6023.HEIC";
import n16 from "@/assets/IMG_6018.jpg";
import n17 from "@/assets/IMG_6025.jpg";
import n18 from "@/assets/IMG_6026.jpg";
import n19 from "@/assets/IMG_6029.HEIC";
import n20 from "@/assets/IMG_6031.HEIC";
import n21 from "@/assets/IMG_6033.HEIC";
import n22 from "@/assets/IMG_6034.HEIC";
import n23 from "@/assets/IMG_6027.jpg";
import n24 from "@/assets/IMG_6028.jpg";
import n25 from "@/assets/IMG_6030.PNG";
import n26 from "@/assets/IMG_6032.jpg";
import n27 from "@/assets/IMG_6035.HEIC";
import n28 from "@/assets/IMG_6036.HEIC";
import n29 from "@/assets/IMG_6037.HEIC";
import n30 from "@/assets/IMG_6038.HEIC";
import n31 from "@/assets/IMG_6039.HEIC";
import n32 from "@/assets/IMG_6040.HEIC";
import n33 from "@/assets/IMG_6042.HEIC";
import n34 from "@/assets/IMG_6043.HEIC";
import n35 from "@/assets/IMG_6044.HEIC";
import n36 from "@/assets/IMG_6046.HEIC";
import n37 from "@/assets/IMG_6047.HEIC";
import n38 from "@/assets/IMG_6048.HEIC";
import n39 from "@/assets/IMG_6049.HEIC";
import n40 from "@/assets/IMG_6050.HEIC";
import n41 from "@/assets/IMG_6051.HEIC";
import n42 from "@/assets/IMG_6052.HEIC";
import n43 from "@/assets/8c6e237b-1af3-4b65-9fd8-d95c1d33134b.jpg";
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
  { img: n10, type: "wpisać s", cats: ["dzieciece"], desc: "granit polerowany · szczecinek" },
  { img: n6, type: "wpisać", cats: ["rodzinne", "podwojne"], desc: "Granit czarny, polerowany · warszwa" },
  { img: n7, type: "wpisać", cats: ["pojedyncze", "podwojne"], desc: "Granit czarny, polerowany · Szczecin" },
  { img: n8, type: "wpisać", cats: ["rodzinne", "renowacje"], desc: "Granit czarny, polerowany · Szczecin" },
  { img: n9, type: "wpisać", cats: ["renowacje", "podwojne"], desc: "Granit czarny, polerowany · Szczecin" },
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
  { img: n11, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit czarny połysk, klasyczna stela" },
  { img: n12, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit szary jasny, stela z bukietem" },
  { img: n13, type: "Nagrobek rodzinny", cats: ["rodzinne"], desc: "Granit czarny, grobowiec z kopułą" },
  { img: n14, type: "Nagrobek podwójny", cats: ["podwojne"], desc: "Granit szary, dwa miejsca z ogrodzeniem" },
  { img: n15, type: "Nagrobek podwójny", cats: ["podwojne"], desc: "Granit szary melanż, forma wieloosobowa" },
  { img: n16, type: "Nagrobek rodzinny", cats: ["rodzinne"], desc: "Granit szary melanż, grobowiec z kaplicą" },
  { img: n17, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit szary, stela z płytą poziomą" },
  { img: n18, type: "Nagrobek nowoczesny", cats: ["pojedyncze", "nowoczesne"], desc: "Granit szary jasny, minimalistyczna forma skośna" },
  { img: n19, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit czarny, klasyczna stela z krzyżem" },
  { img: n20, type: "Nagrobek urnowy", cats: ["urnowe"], desc: "Granit czarny, mała forma na urny" },
 
  // ── 4444.png — nagrobki oznaczone nr 11–16 na zdjęciu ──
  { img: n21, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit szary jasny, wielopoziomowa podstawa" },
  { img: n22, type: "Nagrobek nowoczesny", cats: ["pojedyncze", "nowoczesne"], desc: "Granit czarno-szary, płyta skośna połysk" },
  { img: n23, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit ciemnoszary, stela z tablicą inskrypcji" },
  { img: n24, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit szary, wielopoziomowa podstawa schodkowa" },
  { img: n25, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit szary melanż, forma pozioma klasyczna" },
  { img: n26, type: "Nagrobek nowoczesny", cats: ["pojedyncze", "nowoczesne"], desc: "Granit czarny połysk, stela z latarnią wbudowaną" },
 
  // ── 3333.png — nagrobki oznaczone nr 18–28 na zdjęciu ──
  { img: n27, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit czarny, wysoka stela, podstawa szara jasna" },
  { img: n28, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit szary jasny, stela z tablicą inskrypcji" },
  { img: n29, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit szary jasny, szeroka forma pozioma" },
  { img: n30, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit szary, prosta forma z krzyżem" },
  { img: n31, type: "Nagrobek rodzinny", cats: ["rodzinne"], desc: "Granit ciemnoszary, trójpoziomowa forma rodzinna" },
  { img: n32, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit różowy, stela z płytą poziomą" },
  { img: n33, type: "Nagrobek podwójny", cats: ["podwojne"], desc: "Granit szary, dwa miejsca z wspólną stelą" },
  { img: n34, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit jasnoszary, niska forma pozioma" },
  { img: n35, type: "Nagrobek rodzinny", cats: ["rodzinne", "podwojne"], desc: "Granit szary, wielomiejscowy z krzyżem" },
  { img: n36, type: "Nagrobek nowoczesny", cats: ["pojedyncze", "nowoczesne"], desc: "Granit szary melanż, minimalistyczna płyta pozioma" },
  { img: n37, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit szary ciemny, klasyczna forma pozioma" },
 
  // ── 2222.png — nagrobki oznaczone nr 29–39 na zdjęciu ──
  { img: n38, type: "Nagrobek podwójny", cats: ["podwojne"], desc: "Granit szary jasny, dwie tablice forma rodzinna" },
  { img: n39, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit szary, stela z latarnią" },
  { img: n40, type: "Nagrobek nowoczesny", cats: ["pojedyncze", "nowoczesne"], desc: "Granit czarny, geometryczna forma schodkowa" },
  { img: n41, type: "Nagrobek podwójny", cats: ["podwojne"], desc: "Granit szary jasny, dwie tablice poziome" },
  { img: n42, type: "Nagrobek podwójny", cats: ["podwojne"], desc: "Granit szary melanż z czarnym, dwa miejsca" },
  { img: n43, type: "Nagrobek podwójny", cats: ["podwojne"], desc: "Granit szary, dwie płyty poziome forma rodzinna" },
  { img: n44, type: "Nagrobek rodzinny", cats: ["rodzinne"], desc: "Granit biały i czarny, wielomiejscowy z krzyżem" },
  { img: n45, type: "Nagrobek nowoczesny", cats: ["pojedyncze", "nowoczesne"], desc: "Granit czarny, minimalistyczna forma schodkowa" },
  { img: n46, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit szary, niestandartowa podstawa romboidalna" },
  { img: n47, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit szary jasny, prosta forma pozioma" },
  { img: n48, type: "Nagrobek rodzinny", cats: ["rodzinne", "podwojne"], desc: "Granit czarny i czerwony, trzy tablice rodzinne" },
  { img: n49, type: "Nagrobek pojedynczy", cats: ["pojedyncze"], desc: "Granit szary, forma klasyczna" },
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
