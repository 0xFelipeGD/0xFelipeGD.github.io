// ============================================================================
// SkillBadge — Animated skill pill
// ============================================================================
"use client";

import { motion } from "motion/react";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ scale: 1.1 }}
      className="inline-block rounded-full border border-zinc-700 bg-zinc-800/60 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur-sm transition-colors hover:border-blue-500/50 hover:text-blue-400"
    >
      {skill}
    </motion.span>
  );
}
