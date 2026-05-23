import { Link } from "@tanstack/react-router";
import { Phone, FileText } from "lucide-react";

export function QuoteWidget() {
  return (
    <aside
      className="fixed bottom-4 right-4 z-40 hidden flex-col gap-2 rounded-sm border border-gold/40 bg-granite/95 p-3 shadow-2xl backdrop-blur md:flex"
      aria-label="Bezpłatna wycena"
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">Bezpłatna wycena</div>
      <a href="tel:515486550" className="flex items-center gap-2 rounded-sm bg-gold px-3 py-2 font-mono text-xs tracking-wider text-granite hover:bg-gold-soft">
        <Phone className="size-3.5" /> 515 486 550
      </a>
      <Link to="/kontakt" className="flex items-center gap-2 rounded-sm border border-white/20 px-3 py-2 font-mono text-xs tracking-wider text-white/90 hover:border-gold hover:text-gold">
        <FileText className="size-3.5" /> Formularz
      </Link>
    </aside>
  );
}
