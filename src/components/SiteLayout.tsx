import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Clock, Facebook } from "lucide-react";

const NAV = [
  { to: "/", label: "Start" },
  { to: "/oferta", label: "Oferta" },
  { to: "/galeria", label: "Galeria" },
  { to: "/opinie", label: "Opinie" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <header className="sticky top-0 z-50 granite-texture granite-noise border-b border-white/5">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-accent focus:text-granite focus:px-3 focus:py-2 focus:rounded">Przejdź do treści</a>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-2xl tracking-[0.25em] text-white lg:text-3xl">NAGROBEX</span>
          <span className="mt-1 h-px w-12 bg-gold transition-all group-hover:w-full" />
          <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-white/50">Poznań · od pokoleń</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Główna nawigacja">
          {NAV.map((item) => {
            const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative font-display text-base tracking-wide transition-colors ${active ? "text-gold" : "text-white/85 hover:text-gold"}`}
              >
                {item.label}
                {active && <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold" />}
              </Link>
            );
          })}
        </nav>

        <a
          href="tel:515486550"
          className="hidden items-center gap-2 rounded-sm border border-gold/40 px-4 py-2 font-mono text-sm tracking-wider text-gold transition-colors hover:bg-gold hover:text-granite lg:flex"
          aria-label="Zadzwoń: 515 486 550"
        >
          <Phone className="size-4" /> 515 486 550
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="text-white lg:hidden"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden granite-texture border-t border-white/5">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4" aria-label="Mobilna nawigacja">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-white/5 py-3 font-display text-lg text-white/90 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:515486550"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-sm border border-gold/50 py-3 font-mono text-sm tracking-wider text-gold"
            >
              <Phone className="size-4" /> 515 486 550
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="granite-texture granite-noise border-t-2 border-gold/40 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="font-display text-3xl tracking-[0.25em] text-white">NAGROBEX</div>
          <div className="mt-2 h-px w-16 bg-gold" />
          <p className="mt-4 font-display text-lg italic text-gold/90">
            Kamień pamięta. My dbamy o każdy detal.
          </p>
          <p className="mt-3 text-sm text-white/60">Zakład Kamieniarski · Poznań</p>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Nawigacja</h3>
          <ul className="mt-4 space-y-2 font-display text-base">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-white/75 hover:text-gold">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Kontakt</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-gold" /><span>Obornicka 306<br/>60-691 Poznań</span></li>
            <li><a href="tel:515486550" className="flex items-center gap-2 hover:text-gold"><Phone className="size-4 text-gold" />515 486 550</a></li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 size-4 shrink-0 text-gold" /><span>Pon–Pt 10:00–18:00</span></li>
            <li><a href="https://www.facebook.com/p/Nagrobex-100076462323777/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><Facebook className="size-4 text-gold" />Facebook</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Specjalizacja</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Nagrobki granitowe</li>
            <li>Renowacja</li>
            <li>Indywidualne projekty</li>
            <li>Poznań i Wielkopolska</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-white/50 sm:flex-row lg:px-8">
          <p>© 2025 NAGROBEX. Wszelkie prawa zastrzeżone.</p>
          <p className="font-mono tracking-wider">Pan Kamil doradzi osobiście · bez presji</p>
        </div>
      </div>
    </footer>
  );
}

export function PageWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function SectionTitle({ eyebrow, title, center = false }: { eyebrow?: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-gold" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</span>
          <span className="h-px w-8 bg-gold" />
        </div>
      )}
      <h2 className="mt-4 font-display text-3xl text-granite md:text-5xl">{title}</h2>
    </div>
  );
}

export function GoldDivider({ className = "" }: { className?: string }) {
  return <div className={`gold-divider ${className}`} aria-hidden="true" />;
}
