// ============================================================================
// CareerPage — Shared career landing page component
// ============================================================================
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Download, ArrowRight, ChevronDown } from "lucide-react";
import AuroraBackground from "@/components/ui/AuroraBackground";
import Spotlight from "@/components/ui/Spotlight";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";
import AnimatedCard from "@/components/ui/AnimatedCard";
import FadeIn from "@/components/ui/FadeIn";
import SkillBadge from "@/components/ui/SkillBadge";
import { useLocale } from "@/lib/locale-context";
import { SITE_OWNER, EDUCATION, type Project, type Experience } from "@/lib/constants";
import type { Locale, TranslationKey } from "@/lib/i18n";

interface CareerPageProps {
  career: "webdev" | "engineer";
  accentColor: "blue" | "purple";
  titleKey: TranslationKey;
  subtitleKey: TranslationKey;
  bioKey: TranslationKey;
  projects: Project[];
  experience: Experience[];
  skills: string[];
  cvUrl: string;
  projectBasePath: string;
}

export default function CareerPage({
  career,
  accentColor,
  titleKey,
  subtitleKey,
  bioKey,
  projects,
  experience,
  skills,
  cvUrl,
  projectBasePath,
}: CareerPageProps) {
  const { locale, t } = useLocale();
  const accent = accentColor === "blue" ? "blue" : "purple";
  const spotlightFill = accent === "blue" ? "#3b82f6" : "#8b5cf6";
  const gradientFrom = accent === "blue" ? "from-blue-600" : "from-purple-600";
  const gradientTo = accent === "blue" ? "to-cyan-500" : "to-pink-500";
  const accentText = accent === "blue" ? "text-blue-400" : "text-purple-400";
  const accentBorder = accent === "blue" ? "hover:border-blue-500/50" : "hover:border-purple-500/50";

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <AuroraBackground className="relative">
        <Spotlight className="-top-40 left-0 md:left-60" fill={spotlightFill} />
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 pt-40 pb-28 text-center sm:px-6">
          {/* Accent badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold tracking-widest uppercase ${
              accent === "blue"
                ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                : "border-purple-500/30 bg-purple-500/10 text-purple-400"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${accent === "blue" ? "bg-blue-400" : "bg-purple-400"} animate-pulse`}
            />
            {t(subtitleKey)}
          </motion.div>

          {/* Title */}
          <div className="flex min-h-45 items-center justify-center sm:min-h-50 md:min-h-60">
            <TextGenerateEffect
              words={t(titleKey)}
              className={`bg-linear-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-6xl md:text-7xl`}
            />
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
          >
            {t(bioKey)}
          </motion.p>

          {/* CTA */}
          <motion.a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className={`mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r ${gradientFrom} ${gradientTo} px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:opacity-90 ${
              accent === "blue" ? "shadow-blue-500/20" : "shadow-purple-500/20"
            }`}
          >
            <Download size={16} />
            {t("hero.downloadCV")}
          </motion.a>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1.2, duration: 0.5 },
              y: { delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          >
            <span className="text-sm font-medium text-zinc-500">
              {locale === "en" ? "Scroll down" : "Role para baixo"}
            </span>
            <ChevronDown className={`h-8 w-8 ${accent === "blue" ? "text-blue-400" : "text-purple-400"}`} />
          </motion.div>
        </div>
      </AuroraBackground>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* ── Projects ──────────────────────────────────────────── */}
        <section className="py-20">
          <FadeIn>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
              {t("section.projects")}
            </h2>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.08}>
                <Link href={`${projectBasePath}/${project.slug}`} className="group block h-full">
                  <div
                    className={`flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 transition-all duration-300 hover:border-zinc-700 ${accentBorder} hover:shadow-lg ${
                      accent === "blue" ? "hover:shadow-blue-500/5" : "hover:shadow-purple-500/5"
                    }`}
                  >
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-800">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-semibold text-zinc-50">{project.title}</h3>
                      <p className="mt-1 flex-1 text-sm leading-relaxed text-zinc-400">{project.description[locale]}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span
                        className={`mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-transform group-hover:translate-x-1 ${accentText}`}
                      >
                        {locale === "en" ? "View project" : "Ver projeto"}
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── Experience Timeline ────────────────────────────────── */}
        <section className="py-20">
          <FadeIn>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
              {t("section.experience")}
            </h2>
          </FadeIn>

          <div className="relative space-y-8 pl-6 before:absolute before:top-0 before:bottom-0 before:left-1.75 before:w-px before:bg-zinc-800">
            {experience.map((exp, i) => (
              <FadeIn key={`${exp.company}-${i}`} delay={i * 0.1}>
                <div className="relative">
                  <div
                    className={`absolute top-1.5 -left-6 h-3.5 w-3.5 rounded-full border-2 border-zinc-950 ${
                      accent === "blue" ? "bg-blue-500" : "bg-purple-500"
                    }`}
                  />
                  <AnimatedCard>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="font-semibold text-zinc-50">{exp.company}</h3>
                      <span className="text-xs text-zinc-500">{exp.period}</span>
                    </div>
                    <p className={`mt-1 text-sm font-medium ${accentText}`}>{exp.role[locale]}</p>
                    <p className="text-xs text-zinc-500">{exp.location}</p>
                    <ul className="mt-3 space-y-1">
                      {exp.bullets[locale].map((bullet, j) => (
                        <li key={j} className="flex gap-2 text-sm text-zinc-400">
                          <span
                            className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${accent === "blue" ? "bg-blue-500" : "bg-purple-500"}`}
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </AnimatedCard>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── Skills ────────────────────────────────────────────── */}
        <section className="py-20">
          <FadeIn>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">{t("section.skills")}</h2>
          </FadeIn>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <SkillBadge key={skill} skill={skill} index={i} />
            ))}
          </div>
        </section>

        {/* ── Education ─────────────────────────────────────────── */}
        <section className="pt-4 pb-24">
          <FadeIn>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
              {t("section.education")}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <AnimatedCard>
              <h3 className="font-semibold text-zinc-50">{EDUCATION.school}</h3>
              <p className={`mt-1 text-sm font-medium ${accentText}`}>{EDUCATION.degree[locale]}</p>
              <p className="mt-1 text-xs text-zinc-500">
                {EDUCATION.period} • {EDUCATION.location}
              </p>
            </AnimatedCard>
          </FadeIn>
        </section>
      </div>
    </>
  );
}
