import { Code2, FlaskConical, PenLine, Clapperboard, type LucideIcon } from "lucide-react";
import { Shell } from "../components/Shell";
import { Media } from "../components/Media";
import { Tag } from "../components/Tag";
import { Reveal } from "../components/Reveal";

const roles: { Icon: LucideIcon; title: string; note: string }[] = [
  { Icon: Code2, title: "Software Developer", note: "Flutter • Dart • Firebase" },
  { Icon: PenLine, title: "Technical Writer", note: "API Docs • Guides • Articles" },
  { Icon: Clapperboard, title: "Video Editor", note: "Premiere Pro • CapCut • DaVinci" },
  { Icon: FlaskConical, title: "Researcher", note: "Tech • Energy • Innovation" },
];

const journey = [
  { year: "2024", title: "Mechanical Engineering Graduate", note: "(First Class Upper)" },
  { year: "2023 - 2024", title: "Build & Grow", note: "Personal Projects & Freelance Work" },
  { year: "2021 - 2022", title: "University", note: "Learning, Building, Exploring" },
  { year: "2019 - 2021", title: "Foundational Skills", note: "Tech, Design, Communication" },
];

const skills = [
  ["Flutter", "Dart", "Firebase", "REST APIs", "Git", "Figma"],
  ["WordPress", "VS Code", "Adobe Creative Suite", "CapCut"],
  ["SolidWorks", "Research & Analytics", "Microsoft Office"],
];

export default function About() {
  return (
    <Shell tone="light">
      <section className="wrap grid gap-10 pb-16 pt-6 lg:grid-cols-[1fr_1fr_1fr]">
        <div>
          <p className="text-[10px] tracking-[0.2em] text-ink/50">ABOUT ME</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight">Turning Ideas into Impact.</h1>
          <p className="mt-5 max-w-sm text-xs leading-relaxed text-ink/65">
            I'm Daniel Balogun — a multi-disciplinary creative and technical professional. I love building useful digital products, writing clear technical content, editing compelling videos, and researching ideas that create real-world value.
          </p>
          <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {roles.map(({ Icon, title, note }) => (
              <li key={title} className="flex items-center gap-4 py-4">
                <Icon size={20} className="text-accent" aria-hidden />
                <div>
                  <p className="text-xs font-semibold">{title}</p>
                  <p className="mt-0.5 text-[11px] text-ink/55">{note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
          <Media src="/images/dan-about.png" alt="Daniel Balogun working at a laptop" tone="from-[#5a3a1a] to-[#1a0f06]" className="h-[420px] rounded-lg lg:h-[560px]" imgClassName="object-cover object-center">
            <p className="absolute inset-x-0 bottom-6 px-6 text-center font-hand text-3xl leading-[1.05] text-accent">
              Better Systems.<br />Bigger Possibilities.
            </p>
          </Media>
        </Reveal>

        <div>
          <h2 className="text-sm font-semibold">My Journey</h2>
          <ol className="mt-5 space-y-5 border-l border-ink/20 pl-5">
            {journey.map((j) => (
              <li key={j.year} className="relative">
                <span className="absolute -left-[25px] top-1 h-2 w-2 rounded-full bg-accent" />
                <p className="text-[11px] font-semibold">{j.year}</p>
                <p className="mt-1 text-xs font-medium">{j.title}</p>
                <p className="text-[11px] text-ink/55">{j.note}</p>
              </li>
            ))}
          </ol>

          <h2 className="mt-9 text-sm font-semibold">Skills &amp; Tools</h2>
          <div className="mt-4 space-y-2">
            {skills.map((row, i) => (
              <div key={i} className="flex flex-wrap gap-2">{row.map((s) => <Tag key={s} light>{s}</Tag>)}</div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
