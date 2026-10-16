import { useState, type ReactNode } from "react";

interface Props {
  src?: string;
  alt?: string;
  tone?: string;
  className?: string;
  imgClassName?: string;
  children?: ReactNode;
}

/** Image with a gradient fallback, so layouts hold shape until real assets are added. */
export function Media({ src, alt = "", tone = "from-[#2a2a2a] to-[#0b0b0b]", className = "", imgClassName = "object-cover", children }: Props) {
  const [ok, setOk] = useState(Boolean(src));
  const hasPositionClass = /(?:^|\s)(?:absolute|fixed|relative|static|sticky)(?:\s|$)/.test(className);
  return (
    <div className={`${hasPositionClass ? "" : "relative"} overflow-hidden bg-gradient-to-br ${tone} ${className}`}>
      {ok && src && (
        <img src={src} alt={alt} loading="lazy" onError={() => setOk(false)} className={`absolute inset-0 h-full w-full ${imgClassName}`} />
      )}
      {children}
    </div>
  );
}
