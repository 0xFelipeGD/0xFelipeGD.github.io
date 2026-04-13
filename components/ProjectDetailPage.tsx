// ============================================================================
// ProjectDetailPage — Shared project detail component (client)
// ============================================================================
"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { PROJECT_DETAILS } from "@/lib/constants";
import { useLocale } from "@/lib/locale-context";
import FadeIn from "@/components/ui/FadeIn";

interface Props {
  slug: string;
  backHref: string;
  accentColor: "blue" | "purple" | "green";
}

export default function ProjectDetailPage({ slug, backHref, accentColor }: Props) {
  const { locale, t } = useLocale();
  const detail = PROJECT_DETAILS[slug];

  if (!detail) {
    notFound();
  }

  const accentText =
    accentColor === "blue" ? "text-blue-400" : accentColor === "purple" ? "text-purple-400" : "text-emerald-400";
  const accentBg =
    accentColor === "blue" ? "bg-blue-500" : accentColor === "purple" ? "bg-purple-500" : "bg-emerald-500";
  const accentGradient =
    accentColor === "blue"
      ? "from-blue-600 to-cyan-500 shadow-blue-500/20"
      : accentColor === "purple"
        ? "from-purple-600 to-pink-500 shadow-purple-500/20"
        : "from-emerald-600 to-teal-400 shadow-emerald-500/20";

  return (
    <article className="mx-auto max-w-4xl px-4 pt-28 pb-20 sm:px-6">
      {/* Back link */}
      <FadeIn>
        <Link
          href={backHref}
          className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-50"
        >
          <ArrowLeft size={16} />
          {t("project.backToProjects")}
        </Link>
      </FadeIn>

      {/* Header */}
      <FadeIn delay={0.1}>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">{detail.title}</h1>
        <p className={`mt-2 text-base ${accentText}`}>{detail.subtitle[locale]}</p>
        {detail.liveUrl && (
          <a
            href={detail.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-5 inline-flex items-center gap-2 rounded-full bg-linear-to-r ${accentGradient} px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:opacity-90`}
          >
            {locale === "en" ? "Try it live" : "Experimente agora"}
            <ExternalLink size={16} />
          </a>
        )}
      </FadeIn>

      {/* Banner */}
      <FadeIn delay={0.2}>
        <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <Image src={detail.bannerImage} alt={detail.title} fill className="object-contain" priority />
        </div>
      </FadeIn>

      {/* Sections */}
      <div className="mt-8 space-y-12">
        {detail.sections.map((section, i) => (
          <FadeIn key={section.heading[locale]} delay={0.1 * (i + 1)}>
            <div>
              <div className="flex items-center gap-3">
                <span className={`h-2 w-2 rounded-full ${accentBg}`} />
                <h2 className="text-xl font-bold text-zinc-50">{section.heading[locale]}</h2>
              </div>
              <p className="mt-3 text-base leading-relaxed whitespace-pre-line text-zinc-400">
                {section.body[locale]}
              </p>
              {section.image && (
                <figure className="mt-6">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                    <Image
                      src={section.image}
                      alt={section.imageCaption?.[locale] ?? section.heading[locale]}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {section.imageCaption && (
                    <figcaption className="mt-2 text-center text-sm text-zinc-500">
                      {section.imageCaption[locale]}
                    </figcaption>
                  )}
                </figure>
              )}
              {section.images && section.images.length > 0 && (
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {section.images.map((img, j) => (
                    <div
                      key={j}
                      className={`relative aspect-video overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900${
                        section.images!.length % 2 !== 0 && j === 0 ? " sm:col-span-2" : ""
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${section.heading[locale]} — ${j + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </article>
  );
}
