import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Bell, MapPin, ShieldCheck, ShoppingBag, Store, type LucideIcon } from "lucide-react";
import { Shell } from "../components/Shell";
import { Media } from "../components/Media";
import { Tag } from "../components/Tag";
import { Reveal } from "../components/Reveal";
import { ToolIcon } from "../components/ToolIcon";
import { caseStudies } from "../data/projects";

const featureIcons: Record<string, LucideIcon> = { auth: ShieldCheck, list: Store, order: ShoppingBag, track: MapPin, push: Bell };

function Phone({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div className={`absolute overflow-hidden rounded-[26px] border border-white/20 bg-black p-1 shadow-2xl ${className}`}>
      <Media src={src} tone="from-[#4a2e14] to-[#120b06]" className="h-full w-full rounded-[22px]" />
    </div>
  );
}

export default function CaseStudy() {
  const { slug = "" } = useParams();
  const c = caseStudies[slug];
  if (!c) return <Navigate to="/work" replace />;

  return (
    <Shell>
      <section className="wrap pb-10 pt-4">
        <Link to="/work" className="inline-flex items-center gap-2 text-[11px] text-white/70 hover:text-accent">
          <ArrowLeft size={12} /> Back to work
        </Link>

        <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{c.title}</h1>
            <p className="mt-2 text-xs text-white/60">{c.subtitle}</p>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70">{c.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">{c.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
          </div>
          <div className="relative mx-auto h-64 w-full max-w-sm sm:h-72">
            <Phone src={c.images[0]} className="left-[8%] top-2 h-60 w-32 -rotate-[8deg] sm:h-64 sm:w-36" />
            <Phone src={c.images[1]} className="right-[8%] top-6 h-60 w-32 rotate-[6deg] sm:h-64 sm:w-36" />
          </div>
        </div>

        <div className="mt-10 grid gap-10 border-t border-white/10 pt-8 lg:grid-cols-[1.5fr_1fr]">
          <ol className="divide-y divide-white/10">
            {c.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <li className="grid grid-cols-[3rem_1fr] gap-2 py-5 first:pt-0">
                  <span className="font-display text-xl text-white/90">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="text-sm font-semibold">{s.title}</h2>
                    <p className="mt-2 max-w-lg text-[12px] leading-relaxed text-white/65">{s.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <aside>
            <h2 className="text-sm font-semibold">Key Features</h2>
            <ul className="mt-4 divide-y divide-white/10">
              {c.features.map((f) => {
                const Icon = featureIcons[f.key];
                return (
                  <li key={f.key} className="flex items-center gap-4 py-3 text-xs text-white/75">
                    <Icon size={16} className="text-white/60" aria-hidden /> {f.label}
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 flex items-center justify-between rounded-lg border border-white/20 px-4 py-3">
              <div>
                <p className="text-xs font-medium">See the live</p>
                <p className="text-[10px] text-white/50">(Coming soon)</p>
              </div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-ink"><ArrowRight size={14} /></span>
            </div>
          </aside>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-6">
          <span className="text-xs text-white/70">Tech Stack</span>
          {c.stack.map((t) => <ToolIcon key={t} tool={t} />)}
        </div>
      </section>
    </Shell>
  );
}
