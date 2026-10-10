import { useState, type FormEvent } from "react";
import { ArrowRight, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter, type LucideIcon } from "lucide-react";
import { Shell } from "../components/Shell";
import { site } from "../data/site";

const details: { Icon: LucideIcon; label: string; value: string }[] = [
  { Icon: Mail, label: "Email", value: site.email },
  { Icon: Phone, label: "Phone", value: site.phone },
  { Icon: MapPin, label: "Location", value: site.location },
  { Icon: Linkedin, label: "LinkedIn", value: site.linkedin },
  { Icon: Twitter, label: "Twitter / X", value: site.twitter },
];

const field = "mt-1.5 w-full rounded border border-white/15 bg-[#161616] px-3 py-2.5 text-xs text-white placeholder:text-white/35 focus:border-accent focus:outline-none";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${d.get("name")}`);
    const body = encodeURIComponent(`${d.get("message")}\n\n— ${d.get("name")} (${d.get("email")})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <Shell tone="light">
      <section className="wrap grid gap-10 pb-16 pt-6 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-[10px] tracking-[0.2em] text-ink/50">GET IN TOUCH</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight">Let's Work Together.</h1>
          <p className="mt-5 max-w-xs text-xs leading-relaxed text-ink/60">
            Have a project in mind, a collaboration idea, or want to say hello? I'd love to hear from you.
          </p>
          <ul className="mt-8 space-y-5">
            {details.map(({ Icon, label, value }) => (
              <li key={label} className="flex items-start gap-4">
                <Icon size={18} className="mt-0.5 text-accent" aria-hidden />
                <div>
                  <p className="text-[11px] text-accent">{label}</p>
                  <p className="text-xs">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={submit} className="rounded-lg bg-ink p-7 text-white sm:p-9">
          <h2 className="font-display text-base font-semibold">Send me a message</h2>
          <label className="mt-6 block text-[11px]">Name <span className="text-accent">*</span>
            <input name="name" required placeholder="Your name" className={field} />
          </label>
          <label className="mt-4 block text-[11px]">Email <span className="text-accent">*</span>
            <input name="email" type="email" required placeholder="you@example.com" className={field} />
          </label>
          <label className="mt-4 block text-[11px]">Message <span className="text-accent">*</span>
            <textarea name="message" required rows={5} placeholder="Tell me about your project…" className={field} />
          </label>
          <button type="submit" className="mt-5 flex w-full items-center justify-center gap-2 rounded bg-accent py-3 text-xs font-semibold text-ink transition hover:brightness-110">
            Send message <ArrowRight size={13} />
          </button>
          <p role="status" className="mt-3 min-h-4 text-center text-[11px] text-ok">{sent ? "Your email app should open with the message ready to send." : ""}</p>
          <div className="mt-3 flex items-center justify-between text-[11px] text-white/70">
            <span>Or just reach out on WhatsApp</span>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 hover:border-accent hover:text-accent">
              <MessageCircle size={16} />
            </a>
          </div>
        </form>
      </section>
    </Shell>
  );
}
