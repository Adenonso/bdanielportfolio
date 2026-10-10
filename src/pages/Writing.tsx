import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Shell } from "../components/Shell";
import { Media } from "../components/Media";
import { Reveal } from "../components/Reveal";
import { articles, featuredArticle } from "../data/projects";

export default function Writing() {
  return (
    <Shell>
      <section className="wrap pb-16 pt-6">
        <p className="text-[10px] tracking-[0.2em] text-mute">ARTICLES • RESEARCH • INSIGHTS</p>
        <h1 className="mt-4 max-w-xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">Words, Ideas &amp; Research</h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
          I write technical articles, research deep into complex topics, and share ideas that help people learn, build and grow.
        </p>

        <Reveal className="mt-10">
          <article className="grid overflow-hidden rounded-xl bg-paper text-ink md:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col justify-center p-7 md:p-9">
              <p className="text-[10px] tracking-[0.2em] text-ink/50">FEATURED ARTICLE</p>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-[28px]">{featuredArticle.title}</h2>
              <p className="mt-3 max-w-xs text-xs leading-relaxed text-ink/60">{featuredArticle.excerpt}</p>
              <Link to="/writing" className="mt-5 inline-flex items-center gap-2 text-xs font-medium hover:text-accent">Read article <ArrowRight size={12} /></Link>
            </div>
            <Media src={featuredArticle.image} tone="from-[#8fb4d9] to-[#2d4f7a]" className="min-h-56" />
          </article>
        </Reveal>

        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-sm font-semibold">Recent Articles</h2>
          <Link to="/writing" className="inline-flex items-center gap-1 text-[11px] text-white/70 hover:text-accent">View all <ArrowRight size={11} /></Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <article className="overflow-hidden rounded-lg bg-paper text-ink">
                <Media src={a.image} tone={a.tone} className="aspect-[16/9]" />
                <div className="p-4">
                  <h3 className="text-[13px] font-semibold leading-snug">{a.title}</h3>
                  <p className="mt-2 text-[11px] text-ink/50">{a.meta}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </Shell>
  );
}
