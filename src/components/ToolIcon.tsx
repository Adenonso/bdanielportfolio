import { Bird, Figma, Flame, GitBranch, Target, type LucideIcon } from "lucide-react";

export type Tool = "Flutter" | "Dart" | "Firebase" | "REST APIs" | "Git" | "Figma";

const map: Record<Tool, { Icon: LucideIcon; color: string }> = {
  Flutter: { Icon: Bird, color: "#42a5f5" },
  Dart: { Icon: Target, color: "#22b8d9" },
  Firebase: { Icon: Flame, color: "#ffb300" },
  "REST APIs": { Icon: Target, color: "#ff7a1a" },
  Git: { Icon: GitBranch, color: "#f05133" },
  Figma: { Icon: Figma, color: "#a259ff" },
};

export function ToolIcon({ tool }: { tool: Tool }) {
  const { Icon, color } = map[tool];
  return (
    <span className="flex flex-col items-center gap-1.5 text-[10px] text-white/70">
      <Icon size={20} color={color} aria-hidden />
      {tool}
    </span>
  );
}
