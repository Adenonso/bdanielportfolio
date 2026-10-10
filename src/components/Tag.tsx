export function Tag({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <span className={`rounded-md border px-3 py-1.5 text-[11px] ${light ? "border-ink/15 text-ink/70" : "border-white/15 text-white/80"}`}>
      {children}
    </span>
  );
}
