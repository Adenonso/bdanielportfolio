import { ArrowRight, Play } from "lucide-react";
import { Shell } from "../components/Shell";
import { Media } from "../components/Media";
import { Reveal } from "../components/Reveal";
import { videos } from "../data/projects";

function VideoCard({ v, tall = false }: { v: (typeof videos)[number]; tall?: boolean }) {
  return (
    <button className="group relative block w-full overflow-hidden rounded-lg text-left" aria-label={`Play ${v.title}`}>
      <Media src={v.image} alt="" tone={v.tone} className={tall ? "aspect-[16/6.5]" : "aspect-[16/8]"} imgClassName="object-cover transition duration-500 group-hover:scale-105">
        <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white ring-1 ring-white/50 transition group-hover:scale-110 group-hover:bg-accent group-hover:text-ink">
          <Play size={14} fill="currentColor" />
        </span>
        <span className="absolute bottom-3 left-4 text-white">
          <span className="block text-xs font-semibold">{v.title}</span>
          <span className="block text-[10px] text-white/70">{v.note}</span>
        </span>
      </Media>
    </button>
  );
}

export default function Video() {
  const [first, ...rest] = videos;
  return (
    <Shell tone="light">
      <section className="wrap pb-16 pt-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Video &amp; Creative Work</h1>
            <p className="mt-3 text-xs text-ink/60">Visual stories, edited with purpose.</p>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-accent">View all <ArrowRight size={11} /></span>
        </div>

        <div className="mt-8 space-y-4">
          <Reveal><VideoCard v={first} tall /></Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {rest.map((v, i) => <Reveal key={v.title} delay={i * 0.05}><VideoCard v={v} /></Reveal>)}
          </div>
        </div>
      </section>
    </Shell>
  );
}
