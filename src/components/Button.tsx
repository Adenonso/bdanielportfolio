import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  to?: string;
  href?: string;
  variant?: "primary" | "ghost" | "ghost-dark";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const styles = {
  primary: "bg-accent text-ink hover:brightness-110",
  ghost: "border border-white/25 text-white hover:border-white/60",
  "ghost-dark": "border border-ink/25 text-ink hover:border-ink/60",
};

export function Button({ to, href, variant = "primary", children, className = "", type = "button", onClick }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition ${styles[variant]} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}
