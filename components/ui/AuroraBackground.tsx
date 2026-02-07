// ============================================================================
// Aurora Background — Aceternity-inspired animated aurora gradient
// ============================================================================
"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
  showRadialGradient?: boolean;
}

export default function AuroraBackground({ children, className, showRadialGradient = true }: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950 text-zinc-200 transition-colors",
        className
      )}
    >
      {/* Aurora layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "animate-aurora pointer-events-none absolute -inset-2.5 opacity-40",
            "[background-image:var(--aurora)]",
            "bg-size-[300%,200%]",
            "bg-position-[50%_50%,50%_50%]",
            "blur-[10px] filter",
            "after:absolute after:inset-0 after:[background-image:var(--aurora)] after:bg-size-[200%,100%] after:mix-blend-difference after:content-['']",
            showRadialGradient && "mask-[radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
          )}
          style={
            {
              "--aurora":
                "repeating-linear-gradient(100deg,#3b82f6 10%,#8b5cf6 15%,#06b6d4 20%,#3b82f6 25%,#8b5cf6 30%)",
            } as React.CSSProperties
          }
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
