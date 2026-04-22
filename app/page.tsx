// ============================================================================
// Main Landing Page — Presents all three careers
// ============================================================================
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Factory, ArrowRight, Workflow } from "lucide-react";
import AuroraBackground from "@/components/ui/AuroraBackground";
import Spotlight from "@/components/ui/Spotlight";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";
import AnimatedCard from "@/components/ui/AnimatedCard";
import FadeIn from "@/components/ui/FadeIn";
import { useLocale } from "@/lib/locale-context";
import { SITE_OWNER, SOCIAL_LINKS } from "@/lib/constants";

export default function HomePage() {
  const { t } = useLocale();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <AuroraBackground className="relative min-h-screen">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#3b82f6" />

        <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 pt-20 sm:px-6 sm:pt-0">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:gap-16 md:text-left">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-56 w-56 shrink-0 overflow-hidden rounded-full border-2 border-zinc-700 shadow-2xl sm:h-64 sm:w-64 md:h-92 md:w-92"
            >
              <Image
                src={SITE_OWNER.avatarSrc}
                alt={SITE_OWNER.firstName}
                width={368}
                height={368}
                className="object-cover object-center transition-transform hover:scale-105"
                priority
              />
            </motion.div>

            {/* Text content */}
            <div className="flex max-w-xl flex-col items-center md:items-start">
              <TextGenerateEffect
                words={t("hero.greeting")}
                className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-4 max-w-lg text-base leading-relaxed text-zinc-400"
              >
                {t("hero.bio")}
              </motion.p>

              {/* Social + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <SocialButton href={SOCIAL_LINKS.linkedin} label="LinkedIn">
                  <Linkedin size={18} />
                </SocialButton>
                <SocialButton href={SOCIAL_LINKS.github} label="GitHub">
                  <Github size={18} />
                </SocialButton>
                <SocialButton href={SOCIAL_LINKS.email} label="Email">
                  <Mail size={18} />
                </SocialButton>

                <a
                  href="#careers"
                  className="ml-2 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  {t("hero.explore")}
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </AuroraBackground>

      {/* ── Career cards ──────────────────────────────────────────────── */}
      <section id="careers" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <FadeIn>
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            {t("hero.explore")}
          </h2>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Industry 4.0 & Engineering card */}
          <FadeIn delay={0.1} className="h-full">
            <Link href="/career/industry" className="block h-full">
              <AnimatedCard className="h-full p-8">
                <div className="flex h-full flex-col items-center text-center md:items-start md:text-left">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                    <Factory size={28} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-50">{t("career.industry.title")}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{t("career.industry.desc")}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-400">
                    {t("career.viewMore")}
                  </span>
                </div>
              </AnimatedCard>
            </Link>
          </FadeIn>

          {/* SaaS & Automation card */}
          <FadeIn delay={0.2} className="h-full">
            <Link href="/career/automation-it" className="block h-full">
              <AnimatedCard className="h-full p-8">
                <div className="flex h-full flex-col items-center text-center md:items-start md:text-left">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                    <Workflow size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-50">{t("career.automation.title")}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{t("career.automation.desc")}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-400">
                    {t("career.viewMore")}
                  </span>
                </div>
              </AnimatedCard>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function SocialButton({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-50"
    >
      {children}
    </a>
  );
}
