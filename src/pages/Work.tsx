import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Shell } from "../components/Shell";
import { Media } from "../components/Media";
import { Reveal } from "../components/Reveal";
import { categories, projects } from "../data/projects";

export default function Work() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Shell>
      <section className="wrap pb-16 pt-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.2em] text-mute">MY WORK</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Projects &amp;<br />Creative Work
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              A selection of projects I've worked on across mobile apps, technical writing, research and video editing.
            </p>
          </div>
          <p className="hidden text-[11px] text-white/60 lg:block">01 / 03 &nbsp; Scroll to explore</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-1.5 text-xs transition ${active === c ? "bg-accent font-semibold text-ink" : "text-white/70 hover:text-white"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link to={p.to} className="group block overflow-hidden rounded-xl border border-white/10 bg-[#111] transition hover:border-white/30">
                <Media src={p.image} alt={p.title} tone={p.tone} className="aspect-[16/10]" imgClassName="object-cover transition duration-500 group-hover:scale-105" />
                <div className="flex items-end justify-between gap-3 p-4">
                  <div>
                    <h3 className="font-display text-sm font-semibold">{p.title}</h3>
                    <p className="mt-1 text-[11px] text-white/60">{p.type}</p>
                    <p className="mt-0.5 text-[11px] text-white/45">{p.meta}</p>
                  </div>
                  <ArrowRight size={14} className="mb-1 text-white/60 transition group-hover:translate-x-1 group-hover:text-accent" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </Shell>
  );
}
