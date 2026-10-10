import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { site } from "../data/site";

export function Shell({ tone = "dark", children }: { tone?: "dark" | "light"; children: ReactNode }) {
  const light = tone === "light";
  return (
    <div className={`min-h-screen ${light ? "bg-paper text-ink" : "bg-ink text-white"}`}>
      <Navbar tone={tone} />
      <main>{children}</main>
      <footer className={`wrap flex flex-wrap items-center justify-between gap-3 border-t py-6 text-[11px] ${light ? "border-ink/10 text-ink/60" : "border-white/10 text-white/50"}`}>
        <span>Build. Write. Research. Create.</span>
        <a href={`https://${site.github}`} className="hover:text-accent" target="_blank" rel="noreferrer">GitHub</a>
        <span>© {new Date().getFullYear()} {site.name}</span>
      </footer>
    </div>
  );
}
