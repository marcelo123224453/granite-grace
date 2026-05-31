import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { z } from "zod";
import { PageWrap, SectionTitle } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";

// ── Stare zdjęcia ──
import nOld1  from "@/assets/nagrobek-1.jpg";
import nOld2  from "@/assets/nagrobek-2.jpg";
import nOld3  from "@/assets/nagrobek-3.jpg";
import nOld4  from "@/assets/nagrobek-4.jpg";
import nOld5  from "@/assets/nagrobek-5.jpg";
import nOld6  from "@/assets/673414230_992487589976643_5370561090871691160_n.jpg";
import nOld7  from "@/assets/569516638_849008100991260_4224958326701579055_n.jpg";
import nOld8  from "@/assets/565679113_846124567946280_8598260601751854206_n.jpg";
import nOld9  from "@/assets/564610504_842136365011767_6562503235974255662_n.jpg";
import nOld10 from "@/assets/703844548_1017523120806423_3790274995248193897_n (2).jpg";
import nOld11 from "@/assets/494141487_710766191482119_6563128306248426608_n.jpg";
import nOld12 from "@/assets/552605846_823846770174060_2509920610635215638_n.jpg";
import nOld13 from "@/assets/645398866_1540871334707128_799992057582408873_n (1).jpg";
import nDetal    from "@/assets/nagrobek-detal.jpg";
import nWarsztat from "@/assets/nagrobek-warsztat.jpg";

// ── Nowe zdjęcia IMG_6xxx ──
import n1  from "@/assets/IMG_6006.HEIC";
import n2  from "@/assets/IMG_6008.HEIC";
import n3  from "@/assets/IMG_6009.HEIC";
import n4  from "@/assets/IMG_6015.HEIC";
import n5  from "@/assets/IMG_6016.HEIC";
import n6  from "@/assets/IMG_6011.JPG";
import n7  from "@/assets/IMG_6012.JPG";
import n8  from "@/assets/IMG_6013.JPG";
import n9  from "@/assets/IMG_6014.JPG";
import n10 from "@/assets/IMG_6017.HEIC";
import n11 from "@/assets/IMG_6019.HEIC";
import n12 from "@/assets/IMG_6020.HEIC";
import n13 from "@/assets/IMG_6021.HEIC";
import n14 from "@/assets/IMG_6022.HEIC";
import n15 from "@/assets/IMG_6023.HEIC";
import n16 from "@/assets/IMG_6018.JPG";
import n17 from "@/assets/IMG_6025.JPG";
import n18 from "@/assets/IMG_6026.JPG";
import n19 from "@/assets/IMG_6029.HEIC";
import n20 from "@/assets/IMG_6031.HEIC";
import n21 from "@/assets/IMG_6033.HEIC";
import n22 from "@/assets/IMG_6034.HEIC";
import n23 from "@/assets/IMG_6027.JPG";
import n24 from "@/assets/IMG_6028.JPG";
import n25 from "@/assets/IMG_6030.PNG";
import n26 from "@/assets/IMG_6032.JPG";
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
import n43 from "@/assets/8c6e237b-1af3-4b65-9fd8-d95c1d33134b.JPG";

export const Route = createFileRoute("/galeria")({
  validateSearch: z.object({
    kategoria: z
      .enum(["wszystkie", "pojedyncze", "podwojne", "urnowe", "dzieciece", "rodzinne", "nowoczesne", "renowacje"])
      .optional(),
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
  { img: nOld1,  type: "Grobowiec rodzinny",        cats: ["rodzinne", "podwojne"],                desc: "Granit czarny, polerowany · Poznań" },
  { img: nOld10, type: "Nagrobek dziecięcy",         cats: ["dzieciece"],                           desc: "Granit polerowany · Szczecinek" },
  { img: nOld6,  type: "Nagrobek rodzinny",          cats: ["rodzinne", "podwojne"],                desc: "Granit czarny, polerowany · Warszawa" },
  { img: nOld7,  type: "Nagrobek podwójny",          cats: ["pojedyncze", "podwojne"],              desc: "Granit czarny, polerowany · Szczecin" },
  { img: nOld8,  type: "Nagrobek z renowacją",       cats: ["rodzinne", "renowacje"],               desc: "Granit czarny, polerowany · Szczecin" },
  { img: nOld9,  type: "Renowacja podwójna",         cats: ["renowacje", "podwojne"],               desc: "Granit czarny, polerowany · Szczecin" },
  { img: nOld2,  type: "Nagrobek podwójny",          cats: ["podwojne"],                            desc: "Granit szary, litery złocone" },
  { img: nOld3,  type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                          desc: "Granit jasny z krzyżem · Poznań" },
  { img: nOld4,  type: "Nagrobek nowoczesny",        cats: ["nowoczesne", "podwojne"],              desc: "Multicolor, forma minimalistyczna" },
  { img: nOld5,  type: "Nagrobek prawosławny",       cats: ["pojedyncze", "nowoczesne"],            desc: "Granit szary, krzyż prawosławny" },
  { img: nOld11, type: "Nagrobek pojedynczy",        cats: ["pojedyncze"],                          desc: "Granit czarny, polerowany" },
  { img: nOld12, type: "Nagrobek podwójny",          cats: ["podwojne"],                            desc: "Granit czarny, polerowany" },
  { img: nOld13, type: "Nagrobek rodzinny",          cats: ["rodzinne"],                            desc: "Granit czarny, polerowany" },
  { img: nDetal,    type: "Detal — grafika nagrobka",cats: ["nowoczesne"],                          desc: "Granit czarny · grawer artystyczny" },
  { img: nWarsztat, type: "Wybór z naszego zakładu", cats: ["pojedyncze", "podwojne", "nowoczesne"],desc: "Obornicka 306, Poznań" },
  { img: n1,  type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit czarny, stela z latarnią" },
  { img: n2,  type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit szary, forma pozioma klasyczna" },
  { img: n3,  type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit szary jasny, płyta pozioma" },
  { img: n4,  type: "Nagrobek nowoczesny",  cats: ["pojedyncze", "nowoczesne"], desc: "Granit szary, skośna płyta nowoczesna" },
  { img: n5,  type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit czarny, stela klasyczna" },
  { img: n6,  type: "Nagrobek nowoczesny",  cats: ["pojedyncze", "nowoczesne"], desc: "Granit różowy, minimalistyczna forma" },
  { img: n7,  type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit szary ciemny, płyta pozioma" },
  { img: n8,  type: "Nagrobek nowoczesny",  cats: ["pojedyncze", "nowoczesne"], desc: "Granit czarny, geometryczna stela" },
  { img: n9,  type: "Nagrobek podwójny",    cats: ["podwojne"],                 desc: "Granit szary, dwa miejsca z stelą" },
  { img: n10, type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit szary jasny, forma pozioma" },
  { img: n11, type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit szary, stela z tablicą" },
  { img: n12, type: "Nagrobek nowoczesny",  cats: ["pojedyncze", "nowoczesne"], desc: "Granit czarny, schodkowa forma z stelą" },
  { img: n13, type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit szary jasny, płyta pozioma niska" },
  { img: n14, type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit szary, płyta z obrzeżem" },
  { img: n15, type: "Nagrobek podwójny",    cats: ["podwojne"],                 desc: "Granit szary, dwa miejsca forma szeroka" },
  { img: n16, type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit różowy melanż, stela klasyczna" },
  { img: n17, type: "Nagrobek nowoczesny",  cats: ["pojedyncze", "nowoczesne"], desc: "Granit szary, minimalistyczna płyta skośna" },
  { img: n18, type: "Nagrobek podwójny",    cats: ["podwojne"],                 desc: "Granit szary ciemny, dwa miejsca z stelą" },
  { img: n19, type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit czarny, klasyczna stela" },
  { img: n20, type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit szary jasny, płyta pozioma" },
  { img: n21, type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit szary jasny, forma pozioma klasyczna" },
  { img: n22, type: "Nagrobek nowoczesny",  cats: ["pojedyncze", "nowoczesne"], desc: "Granit szary melanż, płyta pozioma szeroka" },
  { img: n23, type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit szary jasny, niska płyta z obrzeżem" },
  { img: n24, type: "Nagrobek podwójny",    cats: ["podwojne"],                 desc: "Granit szary, dwa miejsca forma szeroka" },
  { img: n25, type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit czarny, stela z rzeźbą anioła" },
  { img: n26, type: "Nagrobek nowoczesny",  cats: ["pojedyncze", "nowoczesne"], desc: "Granit szary jasny, geometryczna forma" },
  { img: n27, type: "Nagrobek podwójny",    cats: ["podwojne"],                 desc: "Granit szary jasny, dwa miejsca z krzyżem" },
  { img: n28, type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit szary melanż, forma z obrzeżem" },
  { img: n29, type: "Nagrobek podwójny",    cats: ["podwojne"],                 desc: "Granit czarny, dwa miejsca klasyczne" },
  { img: n30, type: "Nagrobek nowoczesny",  cats: ["pojedyncze", "nowoczesne"], desc: "Granit szary jasny, skośna płyta nowoczesna" },
  { img: n31, type: "Nagrobek nowoczesny",  cats: ["pojedyncze", "nowoczesne"], desc: "Granit szary, minimalistyczna płyta pozioma" },
  { img: n32, type: "Nagrobek nowoczesny",  cats: ["pojedyncze", "nowoczesne"], desc: "Granit czarny, geometryczna stela z latarnią" },
  { img: n33, type: "Nagrobek podwójny",    cats: ["podwojne"],                 desc: "Granit szary jasny, dwie płyty poziome" },
  { img: n34, type: "Nagrobek urnowy",      cats: ["urnowe"],                   desc: "Granit czarny, mała forma na urny" },
  { img: n35, type: "Nagrobek nowoczesny",  cats: ["pojedyncze", "nowoczesne"], desc: "Granit biały, wysoka stela minimalistyczna" },
  { img: n36, type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit szary jasny, klasyczna forma pozioma" },
  { img: n37, type: "Nagrobek rodzinny",    cats: ["rodzinne"],                 desc: "Granit szary, grobowiec z rzeźbą anioła" },
  { img: n38, type: "Nagrobek nowoczesny",  cats: ["pojedyncze", "nowoczesne"], desc: "Granit czarny i szary, forma schodkowa" },
  { img: n39, type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit szary jasny, płyta pozioma niska" },
  { img: n40, type: "Nagrobek nowoczesny",  cats: ["pojedyncze", "nowoczesne"], desc: "Granit szary jasny, szeroka płyta nowoczesna" },
  { img: n41, type: "Nagrobek pojedynczy",  cats: ["pojedyncze"],               desc: "Granit czarny, stela z bukietem" },
  { img: n42, type: "Nagrobek nowoczesny",  cats: ["pojedyncze", "nowoczesne"], desc: "Granit czarny, minimalistyczna forma z stelą" },
  { img: n43, type: "Nagrobek rodzinny",    cats: ["rodzinne"],                 desc: "Granit szary jasny, grobowiec wieloosobowy" },
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
            Galeria aktualizowana na bieżąco
          </p>

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
