// ============================================================================
// Hobbies Page — /hobbies
// ============================================================================
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useLocale } from "@/lib/locale-context";
import { HOBBIES } from "@/lib/constants";
import AuroraBackground from "@/components/ui/AuroraBackground";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";
import FadeIn from "@/components/ui/FadeIn";
import AnimatedCard from "@/components/ui/AnimatedCard";

export default function HobbiesPage() {
  const { locale, t } = useLocale();

  return (
    <>
      {/* Mini hero */}
      <AuroraBackground className="relative min-h-[40vh]">
        <div className="mx-auto flex min-h-[40vh] max-w-4xl flex-col items-center justify-center px-4 text-center sm:px-6">
          <TextGenerateEffect
            words={t("hobbies.title")}
            className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-5xl"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 max-w-lg text-base text-zinc-400"
          >
            {t("hobbies.subtitle")}
          </motion.p>
        </div>
      </AuroraBackground>

      {/* Hobby cards */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOBBIES.map((hobby, i) => (
            <FadeIn key={hobby.title.en} delay={i * 0.08}>
              <AnimatedCard className="flex flex-col overflow-hidden p-0">
                {hobby.image && (
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-800">
                    <Image
                      src={hobby.image}
                      alt={hobby.title[locale]}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{hobby.icon}</span>
                    <h3 className="text-lg font-semibold text-zinc-50">{hobby.title[locale]}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{hobby.description[locale]}</p>
                </div>
              </AnimatedCard>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
