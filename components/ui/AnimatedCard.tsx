// ============================================================================
// AnimatedCard — Card with hover glow border effect
// ============================================================================
"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedCard({ children, className }: AnimatedCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]",
        className
      )}
    >
      {/* Glow overlay on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-purple-500/5" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
