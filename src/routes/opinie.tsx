import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Quote, ExternalLink, Facebook } from "lucide-react";
import { PageWrap, SectionTitle } from "@/components/SiteLayout";

export const Route = createFileRoute("/opinie")({
  head: () => ({
    meta: [
      { title: "Opinie — 4.8★ na Google, 114 opinii | NAGROBEX Poznań" },
      { name: "description", content: "Opinie klientów NAGROBEX — 4.8/5 w Google, 114 opinii. Co mówią o nas rodziny z Poznania i Wielkopolski." },
    ],
    links: [{ rel: "canonical", href: "/opinie" }],
  }),
  component: OpiniePage,
});

const reviews = [
  { name: "Nikola Szczepańska", text: "Pan wykonał pomnik dla mojej mamy z dużą starannością i dbałością o szczegóły. Efekt końcowy przerósł moje oczekiwania – pomnik jest piękny i solidnie wykonany. Polecam serdecznie." },
  { name: "Marcin Kozłowski", text: "Pan Kamil zna się na rzeczy i na swojej pracy można z jego strony liczyć na fachowe doradztwo. Pomnik wykonany z wielką starannością w każdym calu. Bardzo polecam." },
  { name: "Monika K.", text: "Pan Kamil doradził, pomógł podjąć decyzję na spokojnie bez żadnej presji. Po prostu czuć że klient dla Nich jest ważniejszy od zarobku." },
  { name: "Filip Przykucki-Zyzak", text: "Cena robocizny i samego materiału była bardzo konkurencyjna biorąc pod uwagę ceny innych zakładów kamieniarskich. Bardzo profesjonalna obsługa." },
  { name: "Mikołaj Ganz", text: "Od początku do końca profesjonalne podejście, fachowa wiedza, pomoc i doradztwo na każdym etapie począwszy od wyboru nagrobka aż do końcowego postawienia. Polecam każdemu." },
];

const fadeIn = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.7 } };

function OpiniePage() {
  return (
    <PageWrap>
      <section className="granite-texture granite-noise py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-gold">Opinie</span>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="mt-8 font-display text-7xl text-gold md:text-8xl shimmer">4.8</div>
            <div className="mt-3 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
                  <Star className="size-7 fill-gold text-gold" />
                </motion.div>
              ))}
            </div>
          </motion.div>
          <h1 className="mt-6 font-display text-3xl text-white md:text-5xl">114 opinii na Google</h1>
          <p className="mx-auto mt-4 max-w-xl text-white/70">Dziękujemy każdej rodzinie, która zaufała naszemu zakładowi.</p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((r, i) => (
              <motion.figure
                key={r.name}
                {...fadeIn}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="relative border border-border bg-card p-8"
              >
                <Quote className="absolute right-6 top-6 size-10 text-gold/15" aria-hidden="true" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} className="size-4 fill-gold text-gold" />)}
                </div>
                <blockquote className="mt-5 font-body text-base italic leading-relaxed text-foreground/85">"{r.text}"</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-display text-lg text-granite">{r.name}</div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Opinia z Google</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://www.google.com/search?q=NAGROBEX+Pozna%C5%84"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-granite hover:bg-gold-soft"
            >
              Zostaw opinię na Google <ExternalLink className="size-4" />
            </a>
            <a
              href="https://www.facebook.com/p/Nagrobex-100076462323777/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-granite px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-granite hover:bg-granite hover:text-white"
            >
              <Facebook className="size-4" /> Facebook
            </a>
          </div>
        </div>
      </section>
    </PageWrap>
  );
}
