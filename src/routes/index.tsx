import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Phone, ArrowRight, Hammer, PencilRuler, Sparkles, Package, Award, HandHeart, Coins, CalendarCheck, MessageCircle, Quote } from "lucide-react";
import { PageWrap, SectionTitle, GoldDivider } from "@/components/SiteLayout";
import { QuoteWidget } from "@/components/QuoteWidget";
import nagrobek1 from "@/assets/nagrobek-1.jpg";
import nagrobek2 from "@/assets/nagrobek-2.jpg";
import nagrobek3 from "@/assets/nagrobek-3.jpg";
import nagrobek4 from "@/assets/nagrobek-4.jpg";
import nagrobek5 from "@/assets/nagrobek-5.jpg";
import warsztat from "@/assets/nagrobek-warsztat.jpg";
import detal from "@/assets/nagrobek-detal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NAGROBEX — Zakład Kamieniarski Poznań | Nagrobki granitowe, renowacja | 515 486 550" },
      { name: "description", content: "NAGROBEX Poznań — nagrobki granitowe, renowacja, projekty indywidualne. 4.8★ Google, 114 opinii. Pan Kamil doradzi osobiście. Bezpłatna wycena." },
      { property: "og:title", content: "NAGROBEX — Zakład Kamieniarski Poznań" },
      { property: "og:description", content: "Nagrobki granitowe, renowacja, projekty indywidualne. Poznań i Wielkopolska." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "NAGROBEX",
        description: "Zakład kamieniarski — sprzedaż, projektowanie i renowacja nagrobków granitowych",
        address: { "@type": "PostalAddress", streetAddress: "Obornicka 306", postalCode: "60-691", addressLocality: "Poznań", addressCountry: "PL" },
        telephone: "+48515486550",
        openingHours: "Mo-Fr 10:00-18:00",
        areaServed: ["Poznań", "Wielkopolska"],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "114" },
      }),
    }],
  }),
  component: HomePage,
});

const services = [
  { icon: Hammer, title: "Sprzedaż nagrobków granitowych", text: "Klasyczne i nowoczesne wzory, granit w wielu kolorach." },
  { icon: PencilRuler, title: "Projektowanie na zamówienie", text: "Indywidualny projekt według Twojego zdjęcia lub pomysłu." },
  { icon: Sparkles, title: "Renowacja nagrobków", text: "Czyszczenie, podnoszenie, odświeżenie liter, wymiana elementów." },
  { icon: Package, title: "Dodatkowe elementy", text: "Wazony, znicze, krzyże, ceramiczne zdjęcia, tabliczki." },
];

const monumentTypes = [
  { label: "Pojedynczy", filter: "pojedyncze" },
  { label: "Podwójny", filter: "podwojne" },
  { label: "Na urnę", filter: "urnowe" },
  { label: "Dziecięcy", filter: "dzieciece" },
  { label: "Rodzinny", filter: "rodzinne" },
  { label: "Nowoczesny", filter: "nowoczesne" },
];

const materials = [
  { name: "Granit czarny", desc: "Klasyczny, elegancki, ponadczasowy.", swatch: "linear-gradient(135deg, #0a0a0a, #2a2a2a)" },
  { name: "Brąz królewski", desc: "Ciepły odcień, popularny w Poznaniu.", swatch: "linear-gradient(135deg, #4a2520, #8b4a3a)" },
  { name: "Granit szary", desc: "Stonowany, nowoczesny charakter.", swatch: "linear-gradient(135deg, #555, #888)" },
  { name: "Granit biały", desc: "Jasny, delikatny — często dla dzieci.", swatch: "linear-gradient(135deg, #d8d2c8, #f0ece4)" },
  { name: "Multicolor", desc: "Wielobarwny, wyjątkowy efekt.", swatch: "linear-gradient(135deg, #6b5840, #a89878 40%, #5a4f42 70%, #8b7560)" },
];

const steps = [
  { n: "01", title: "Kontakt i konsultacja", text: "Zadzwoń lub napisz — Pan Kamil umówi spokojne spotkanie." },
  { n: "02", title: "Wybór projektu i materiału", text: "Doradztwo bez presji, w Twoim tempie." },
  { n: "03", title: "Wycena", text: "Transparentna, bezpłatna, bez ukrytych kosztów." },
  { n: "04", title: "Realizacja", text: "Precyzyjna praca zgodna z projektem i terminem." },
  { n: "05", title: "Montaż na cmentarzu", text: "Profesjonalne ustawienie nagrobka na miejscu." },
];

const testimonials = [
  { name: "Nikola Szczepańska", text: "Pan wykonał pomnik dla mojej mamy z dużą starannością i dbałością o szczegóły. Efekt końcowy przerósł moje oczekiwania – pomnik jest piękny i solidnie wykonany." },
  { name: "Marcin Kozłowski", text: "Pan Kamil zna się na rzeczy i na swojej pracy można z jego strony liczyć na fachowe doradztwo. Pomnik wykonany z wielką starannością w każdym calu." },
  { name: "Monika K.", text: "Pan Kamil doradził, pomógł podjąć decyzję na spokojnie bez żadnej presji. Po prostu czuć że klient dla Nich jest ważniejszy od zarobku." },
  { name: "Filip Przykucki-Zyzak", text: "Cena robocizny i samego materiału była bardzo konkurencyjna biorąc pod uwagę ceny innych zakładów kamieniarskich." },
  { name: "Mikołaj Ganz", text: "Od początku do końca profesjonalne podejście, fachowa wiedza, pomoc i doradztwo na każdym etapie począwszy od wyboru nagrobka aż do końcowego postawienia." },
];

const fadeIn = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.8, ease: "easeOut" as const } };

function HomePage() {
  return (
    <PageWrap>
      <QuoteWidget />

      {/* HERO */}
      <section className="relative granite-texture granite-noise overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${nagrobek1})`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(0.4) brightness(0.4)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-granite/60 via-granite/70 to-granite" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 text-center md:py-36 lg:px-8">
          <motion.div {...fadeIn} className="flex justify-center gap-3">
            <span className="h-px w-12 self-center bg-gold" />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-gold">Poznań · od pokoleń</span>
            <span className="h-px w-12 self-center bg-gold" />
          </motion.div>

          <motion.h1
            {...fadeIn}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-8 font-display text-4xl leading-tight text-white md:text-6xl lg:text-7xl"
          >
            <span className="shimmer">NAGROBEX</span>
            <br />
            <span className="text-white/90">Zakład Kamieniarski w Poznaniu</span>
          </motion.h1>

          <motion.p {...fadeIn} transition={{ duration: 0.8, delay: 0.2 }} className="mx-auto mt-6 max-w-2xl font-display text-lg italic text-white/75 md:text-xl">
            Kamień pamięta. My dbamy o każdy detal.
          </motion.p>

          <motion.p {...fadeIn} transition={{ duration: 0.8, delay: 0.3 }} className="mx-auto mt-3 max-w-xl text-sm text-white/60 md:text-base">
            Nagrobki granitowe · Renowacja · Indywidualne projekty · Poznań i Wielkopolska
          </motion.p>

          <motion.div {...fadeIn} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/galeria" className="group inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 font-mono text-sm tracking-wider text-granite transition-colors hover:bg-gold-soft">
              Zobacz nagrobki <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-sm border border-gold/60 px-6 py-3 font-mono text-sm tracking-wider text-gold transition-colors hover:bg-gold/10">
              Bezpłatna wycena
            </Link>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.8, delay: 0.5 }} className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/65 md:text-sm">
            <span className="flex items-center gap-1"><Star className="size-4 fill-gold text-gold" /> 4.8 / 5 Google</span>
            <span className="opacity-30">·</span>
            <span>114 opinii</span>
            <span className="opacity-30">·</span>
            <span>Poznań i Wielkopolska</span>
            <span className="opacity-30">·</span>
            <span>Pan Kamil doradzi osobiście</span>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <motion.div {...fadeIn}>
            <SectionTitle eyebrow="O zakładzie" title="Rzemiosło z osobistym zaangażowaniem" />
            <p className="mt-6 text-base leading-relaxed text-foreground/85 md:text-lg">
              NAGROBEX to poznański zakład kamieniarski prowadzony przez <strong className="font-medium">Pana Kamila</strong> — kamieniarza z powołania, który każde zlecenie traktuje z osobistym zaangażowaniem. Tworzymy nagrobki granitowe w różnych stylach, łącząc trwałość naturalnego kamienia z estetyką i precyzją rzemiosła.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">
              Pomagamy rodzinom w trudnych chwilach — bez presji, bez pośpiechu, z pełnym doradztwem na każdym etapie.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: HandHeart, label: "Fachowe doradztwo" },
                { icon: Coins, label: "Przystępne ceny" },
                { icon: CalendarCheck, label: "Terminowa realizacja" },
                { icon: Award, label: "114 opinii · 4.8★" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 border-l-2 border-gold/60 pl-3">
                  <Icon className="size-5 shrink-0 text-gold" />
                  <span className="font-display text-base text-granite">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeIn} className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-border shadow-2xl">
              <img src={warsztat} alt="Warsztat NAGROBEX w Poznaniu — nagrobki granitowe" loading="lazy" className="size-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 border-2 border-gold lg:block" aria-hidden="true" />
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5"><GoldDivider /></div>

      {/* SERVICES */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <motion.div {...fadeIn}><SectionTitle eyebrow="Co robimy" title="Nasze usługi" center /></motion.div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                {...fadeIn}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative overflow-hidden border border-border bg-card p-7 transition-all hover:border-gold hover:shadow-xl"
              >
                <div className="granite-texture mb-5 inline-flex size-14 items-center justify-center rounded-sm">
                  <Icon className="size-6 text-gold" />
                </div>
                <h3 className="font-display text-xl text-granite">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <div className="mt-5 h-px w-12 bg-gold/40 transition-all group-hover:w-full group-hover:bg-gold" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MONUMENT TYPES */}
      <section className="granite-texture granite-noise relative py-20 md:py-28">
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="Wybierz" title="Jakiego nagrobka szukasz?" center />
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-white/60">Kliknij kategorię, żeby zobaczyć realizacje</p>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {monumentTypes.map((t) => (
              <Link
                key={t.label}
                to="/galeria"
                search={{ kategoria: t.filter }}
                className="group flex aspect-square flex-col items-center justify-center border border-white/15 bg-white/[0.02] p-4 text-center transition-all hover:border-gold hover:bg-gold/10"
              >
                <span className="font-display text-lg text-white group-hover:text-gold md:text-xl">{t.label}</span>
                <span className="mt-2 h-px w-6 bg-gold/40 transition-all group-hover:w-12 group-hover:bg-gold" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="Materiał" title="Granit — kamień na wieki" center />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {materials.map((m, i) => (
              <motion.div
                key={m.name}
                {...fadeIn}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group border border-border bg-card transition-all hover:border-gold hover:shadow-lg"
              >
                <div className="aspect-[4/3] w-full transition-transform group-hover:scale-[1.02]" style={{ background: m.swatch }} aria-hidden="true" />
                <div className="p-5">
                  <h3 className="font-display text-lg text-granite">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-sandstone py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionTitle eyebrow="Proces" title="Jak przebiega realizacja?" center />
          <div className="mt-14 space-y-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                {...fadeIn}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group flex items-start gap-6 border-l-2 border-gold/30 bg-card p-6 transition-all hover:border-gold hover:shadow-md"
              >
                <span className="font-mono text-3xl text-gold md:text-4xl">{s.n}</span>
                <div>
                  <h3 className="font-display text-xl text-granite md:text-2xl">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-base">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="Opinie klientów" title="Zaufały nam dziesiątki rodzin" center />
          <div className="mt-4 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="size-5 fill-gold text-gold" />)}
            <span className="ml-2 font-mono text-sm text-muted-foreground">4.8 / 5 · 114 opinii Google</span>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                {...fadeIn}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative border border-border bg-card p-7"
              >
                <Quote className="absolute right-5 top-5 size-8 text-gold/20" aria-hidden="true" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => <Star key={j} className="size-4 fill-gold text-gold" />)}
                </div>
                <blockquote className="mt-4 font-body italic leading-relaxed text-foreground/85">"{t.text}"</blockquote>
                <figcaption className="mt-5 border-t border-border pt-4 font-display text-base text-granite">— {t.name}</figcaption>
              </motion.figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/opinie" className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-granite hover:text-gold">
              Wszystkie opinie <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* RENOWACJA */}
      <section className="granite-texture granite-noise relative py-20 md:py-28">
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="Renowacja" title="Przywracamy blask nagrobkom" center />
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-white/70">
            Renowacja nagrobka to wyraz troski o pamięć bliskich — i często znacznie tańsza alternatywa niż nowy nagrobek.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "Renowacja lastryko", img: nagrobek3 },
              { title: "Podniesienie nagrobka", img: nagrobek2 },
              { title: "Odświeżenie napisów", img: detal },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeIn}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative overflow-hidden border border-white/10"
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img src={item.img} alt={item.title} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-granite via-granite/80 to-transparent p-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">Przed → Po</span>
                  <h3 className="mt-1 font-display text-xl text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="font-display text-3xl leading-tight text-granite md:text-5xl">
            Jesteśmy tu, żeby pomóc.<br />
            <span className="italic text-gold">Bez presji, bez pośpiechu.</span>
          </h2>
          <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="tel:515486550" className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-4 font-mono text-sm tracking-wider text-granite hover:bg-gold-soft">
              <Phone className="size-4" /> 515 486 550
            </a>
            <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 rounded-sm border border-granite px-6 py-4 font-mono text-sm tracking-wider text-granite hover:bg-granite hover:text-white">
              <MessageCircle className="size-4" /> Napisz do nas
            </Link>
          </div>
        </div>
      </section>
    </PageWrap>
  );
}
