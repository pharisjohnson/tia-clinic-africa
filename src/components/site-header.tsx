import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/tia-logo.png";

const treatments = [
  { to: "/treatments", label: "All Treatments", hash: "" },
  { to: "/treatments", label: "Non-Surgical Facelifts", hash: "facelifts" },
  { to: "/treatments", label: "FUE Hair Restoration", hash: "hair" },
  { to: "/treatments", label: "Anti-Oxidant IV Therapy", hash: "iv" },
  { to: "/treatments", label: "Botox & Dermal Fillers", hash: "injectables" },
  { to: "/treatments", label: "Medical Facials & Peels", hash: "facials" },
  { to: "/treatments", label: "Pain Management", hash: "pain" },
];

export function SiteHeader({ transparent: _transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  const [tOpen, setTOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border">

      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Tia Clinics" className="h-11 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-10 font-smallcaps text-[0.82rem] tracking-[0.18em] uppercase">
          <Link to="/" className="hover:text-gold transition-colors" activeOptions={{ exact: true }} activeProps={{ className: "text-gold" }}>
            Home
          </Link>
          <Link to="/about" className="hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>
            About
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setTOpen(true)}
            onMouseLeave={() => setTOpen(false)}
          >
            <Link to="/treatments" className="flex items-center gap-1 hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>
              Treatments <ChevronDown className="h-3 w-3" />
            </Link>
            {tOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-72">
                <div className="bg-background border border-border shadow-xl py-3">
                  {treatments.map((t) => (
                    <Link
                      key={t.label}
                      to={t.to}
                      hash={t.hash || undefined}
                      className="block px-5 py-2.5 text-[0.72rem] tracking-[0.18em] uppercase text-foreground/80 hover:text-gold hover:bg-secondary transition-colors"
                    >
                      {t.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/stories" className="hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>
            Stories
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/booking" className="hidden sm:inline-flex btn-gold px-5 py-2.5 rounded-sm text-xs">
            Book Consultation
          </Link>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-6 py-6 space-y-4 text-sm tracking-[0.18em] uppercase">
            <Link to="/" onClick={() => setOpen(false)} className="block">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="block">About</Link>
            <Link to="/treatments" onClick={() => setOpen(false)} className="block">Treatments</Link>
            <Link to="/stories" onClick={() => setOpen(false)} className="block">Stories</Link>
            <Link to="/booking" onClick={() => setOpen(false)} className="block text-gold">Book Consultation</Link>
          </div>
        </div>
      )}
    </header>
  );
}
