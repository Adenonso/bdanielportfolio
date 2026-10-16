import { motion, useReducedMotion, type Variants } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Shell } from "../components/Shell";
import { Media } from "../components/Media";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { ToolIcon } from "../components/ToolIcon";
import { projects } from "../data/projects";

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const featured = [
  { p: projects[0], card: "bg-paper text-ink", sub: "text-ink/60" },
  { p: projects[1], card: "bg-[#2b303b] text-white", sub: "text-white/60" },
  { p: projects[2], card: "bg-[#3a1a78] text-white", sub: "text-white/60" },
];
const stats = [["5+", "Projects Completed"], ["2+", "Years Experience"], ["10+", "Articles & Guides"], ["100%", "Commitment"]];

export default function Home() {
  const reduce = useReducedMotion();
  return (
    <Shell>
      <section className="wrap grid items-center gap-6 pb-10 lg:grid-cols-[1.1fr_1fr]">
        <motion.div variants={container} initial={reduce ? "show" : "hidden"} animate="show" className="relative z-10 pt-6 lg:pt-16">
          <motion.p variants={item} className="text-[11px] tracking-[0.2em] text-mute">DANIEL BALOGUN</motion.p>
          <motion.h1 variants={item} className="mt-5 font-display text-[44px] font-bold leading-[1.03] tracking-tight sm:text-6xl lg:text-[76px]">
            I build, write, research &amp; <span className="text-accent">create.</span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
            I turn complex ideas into useful digital products, technical content, and visual stories. I'm a software developer, technical writer, video editor, researcher, and a mechanical engineering graduate.
          </motion.p>
          <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
            <Button to="/work">View my work →</Button>
            <Button to="/contact" variant="ghost">Let's work together</Button>
          </motion.div>
        </motion.div>

        <div className="relative h-[380px] sm:h-[480px] lg:h-[560px]">
          <Media
            src="/imgs/bdaniel.jpg"
            alt="Portrait of Daniel Balogun"
            tone="from-[#1d1d1d] to-ink"
            className="absolute inset-0 [mask-image:linear-gradient(to_left,black_75%,transparent)]"
            imgClassName="object-cover object-top"
          />
          <p className="absolute right-2 top-10 -rotate-[8deg] font-hand text-3xl leading-[1.05] text-accent sm:right-6 sm:text-4xl">
            Building<br />tomorrow,<br />today.
          </p>
          <p className="absolute bottom-6 right-2 text-[11px] tracking-[0.2em] text-white/80">// DANIEL BALOGUN</p>
        </div>
      </section>

      <section className="wrap pb-8">
        <p className="mb-4 text-[11px] tracking-[0.2em] text-white/70">FEATURED WORK</p>
        <div className="flex items-center gap-4">
          <div className="grid flex-1 gap-4 md:grid-cols-3">
            {featured.map(({ p, card, sub }, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to={p.to} className={`group relative flex h-28 overflow-hidden rounded-xl ${card}`}>
                  <div className="z-10 p-4">
                    <h3 className="font-display text-sm font-semibold">{p.title}</h3>
                    <p className={`mt-1 text-xs ${sub}`}>{p.type}</p>
                  </div>
                  <Media src={p.image} tone={p.tone} className="absolute inset-y-0 right-0 w-1/2 transition group-hover:scale-105" />
                </Link>
              </Reveal>
            ))}
          </div>
          <Link to="/work" aria-label="See all work" className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 hover:border-accent md:flex">
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      <section className="wrap pb-10">
        <div className="grid items-center gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1.4fr_1fr]">
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl font-bold text-accent">{n}</dt>
                <dd className="mt-1 text-[11px] text-white/60">{l}</dd>
              </div>
            ))}
          </dl>
          <div className="border-white/10 lg:border-l lg:pl-8">
            <p className="mb-3 text-[10px] tracking-[0.2em] text-white/60">I WORK WITH</p>
            <div className="flex flex-wrap gap-6">
              {(["Flutter", "Dart", "Firebase", "Git", "Figma"] as const).map((t) => <ToolIcon key={t} tool={t} />)}
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
