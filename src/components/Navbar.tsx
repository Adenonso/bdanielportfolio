import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { nav } from "../data/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center font-display text-xl font-bold tracking-tighter ${className}`} aria-label="Daniel Balogun">
      D<span className="-ml-0.5 text-accent">B</span>
    </span>
  );
}

export function Navbar({ tone }: { tone: "dark" | "light" }) {
  const [open, setOpen] = useState(false);
  const light = tone === "light";
  const link = ({ isActive }: { isActive: boolean }) =>
    `text-[13px] transition ${isActive ? "font-medium" : light ? "text-ink/70 hover:text-ink" : "text-white/80 hover:text-white"}`;

  return (
    <header className="wrap relative z-30 flex items-center justify-between py-6">
      <Link to="/" aria-label="Home"><Logo /></Link>

      <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-10 md:flex" aria-label="Primary">
        {nav.map((n) => <NavLink key={n.to} to={n.to} className={link}>{n.label}</NavLink>)}
      </nav>

      <span className={`hidden items-center gap-2 text-[11px] md:flex ${light ? "text-ink/70" : "text-white/80"}`}>
        <i className="h-1.5 w-1.5 rounded-full bg-ok" /> Available for work
      </span>

      <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className={`absolute inset-x-4 top-full rounded-2xl p-5 shadow-2xl md:hidden ${light ? "bg-white text-ink" : "bg-[#161616] text-white"}`}>
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {nav.map((n) => <NavLink key={n.to} to={n.to} className="text-base font-medium" onClick={() => setOpen(false)}>{n.label}</NavLink>)}
          </nav>
          <p className="mt-5 flex items-center gap-2 text-xs opacity-70"><i className="h-1.5 w-1.5 rounded-full bg-ok" /> Available for work</p>
        </div>
      )}
    </header>
  );
}
