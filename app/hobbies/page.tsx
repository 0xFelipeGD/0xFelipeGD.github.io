// ============================================================================
// Hobbies Page — /hobbies
// Editorial / bento layout: oversized numerals, asymmetric grid, one feature,
// varied card aspect ratios, spotlight hover borders. No emoji, no symmetry.
// ============================================================================
"use client";

import Image from "next/image";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "motion/react";
import { useLocale } from "@/lib/locale-context";
import { HOBBIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { MouseEvent } from "react";

// Bento slot configuration — hand-tuned so 6 hobbies form an asymmetric mosaic.
// Index 0 is the featured card (takes 2 cols on desktop). The rest follow a
// staggered pattern with varied aspect ratios and row spans.
const SLOTS = [
  // 0 — featured
  {
    span: "md:col-span-7 md:row-span-2",
    aspect: "aspect-[4/5] md:aspect-auto md:min-h-[560px]",
    featured: true,
    align: "left",
  },
  // 1
  {
    span: "md:col-span-5",
    aspect: "aspect-[5/4]",
    featured: false,
    align: "left",
  },
  // 2
  {
    span: "md:col-span-5 md:translate-y-8",
    aspect: "aspect-[5/4]",
    featured: false,
    align: "right",
  },
  // 3
  {
    span: "md:col-span-4",
    aspect: "aspect-[4/5]",
    featured: false,
    align: "left",
  },
  // 4
  {
    span: "md:col-span-4 md:translate-y-10",
    aspect: "aspect-square",
    featured: false,
    align: "left",
  },
  // 5
  {
    span: "md:col-span-4",
    aspect: "aspect-[4/5]",
    featured: false,
    align: "right",
  },
] as const;

export default function HobbiesPage() {
  const { locale } = useLocale();

  const kicker = locale === "pt" ? "Fora do trabalho" : "Off the clock";
  const headline =
    locale === "pt" ? (
      <>
        Seis coisas que mantêm <br className="hidden sm:block" />
        a <em className="font-serif italic text-zinc-50">curiosidade</em> viva.
      </>
    ) : (
      <>
        Six things that keep <br className="hidden sm:block" />
        the <em className="font-serif italic text-zinc-50">curiosity</em> alive.
      </>
    );
  const lede =
    locale === "pt"
      ? "Uma coleção pessoal — não um currículo. O que faço quando o teclado esfria e o cérebro ainda quer trabalhar em algo."
      : "A personal collection — not a résumé. What I do when the keyboard cools down and my brain still wants to be working on something.";

  return (
    <div className="relative min-h-screen bg-[#0b0b0e] text-zinc-200">
      {/* Faint grid backdrop — subtle, expensive feel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%)",
        }}
      />
      {/* Soft top wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            "radial-gradient(1200px 520px at 20% 0%, rgba(59,130,246,0.10), transparent 60%), radial-gradient(900px 420px at 85% 10%, rgba(139,92,246,0.08), transparent 60%)",
        }}
      />

      {/* ── Editorial masthead ──────────────────────────────────────────── */}
      <header className="relative mx-auto max-w-7xl px-6 pt-28 pb-20 sm:px-10 md:pt-36 lg:pb-28">
        <div className="grid grid-cols-12 items-end gap-y-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-12 md:col-span-8"
          >
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-zinc-500 uppercase">
              <span className="h-px w-8 bg-zinc-700" />
              <span>— {kicker}</span>
            </div>

            <h1 className="mt-8 text-[2.5rem] leading-[1.02] font-semibold tracking-tight text-zinc-100 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              {headline}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="col-span-12 md:col-span-4 md:pb-4"
          >
            <p className="max-w-sm text-[15px] leading-relaxed text-zinc-400 md:ml-auto md:text-right">
              {lede}
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] text-zinc-500 uppercase md:justify-end">
              <span>Vol.</span>
              <span className="text-zinc-300">01</span>
              <span className="mx-1 text-zinc-700">/</span>
              <span>06 entries</span>
            </div>
          </motion.div>
        </div>

        {/* hairline */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </header>

      {/* ── Bento editorial grid ────────────────────────────────────────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-32 sm:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          {HOBBIES.map((hobby, i) => {
            const slot = SLOTS[i] ?? SLOTS[SLOTS.length - 1];
            const index = String(i + 1).padStart(2, "0");

            return (
              <motion.div
                key={hobby.title.en}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={cn("group/card", slot.span)}
              >
                <HobbyCard
                  index={index}
                  title={hobby.title[locale]}
                  description={hobby.description[locale]}
                  image={hobby.image}
                  aspect={slot.aspect}
                  featured={slot.featured}
                  align={slot.align}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Closing editorial note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 grid grid-cols-12 items-center gap-6"
        >
          <div className="col-span-12 md:col-span-5">
            <div className="font-mono text-[11px] tracking-[0.24em] text-zinc-500 uppercase">
              — {locale === "pt" ? "Fim da coluna" : "End of column"}
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="font-serif text-xl leading-relaxed text-zinc-300 italic md:text-2xl">
              {locale === "pt"
                ? "“Ferramentas mudam, curiosidade não.”"
                : "“Tools change. Curiosity doesn’t.”"}
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// HobbyCard — one tile in the bento grid. Pointer-tracked spotlight border.
// ---------------------------------------------------------------------------
interface HobbyCardProps {
  index: string;
  title: string;
  description: string;
  image?: string;
  aspect: string;
  featured: boolean;
  align: "left" | "right" | string;
}

function HobbyCard({ index, title, description, image, aspect, featured, align }: HobbyCardProps) {
  // Pointer-tracked spotlight — gives each card a "living" border on hover.
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 25, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 25, mass: 0.5 });
  const background = useMotionTemplate`radial-gradient(260px circle at ${smoothX}px ${smoothY}px, rgba(139,92,246,0.22), transparent 65%)`;

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={() => {
        mouseX.set(-200);
        mouseY.set(-200);
      }}
      className={cn(
        "relative h-full overflow-hidden bg-zinc-950/60 backdrop-blur-[2px] transition-colors duration-500",
        "ring-1 ring-inset ring-zinc-800/80 hover:ring-zinc-700",
        featured ? "rounded-[28px]" : "rounded-2xl",
        aspect
      )}
    >
      {/* Image layer */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            sizes={featured ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 40vw, 100vw"}
            className={cn(
              "object-cover transition-transform duration-[1200ms] ease-out",
              "scale-[1.02] group-hover/card:scale-[1.08]",
              // grayscale -> color on hover for a subtle editorial reveal
              "saturate-[0.85] group-hover/card:saturate-110"
            )}
            priority={featured}
          />
          {/* Gradient scrim — stronger at bottom for legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(11,11,14,0.15) 0%, rgba(11,11,14,0.55) 55%, rgba(11,11,14,0.95) 100%)",
            }}
          />
        </div>
      )}

      {/* Pointer spotlight (under content) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        style={{ background }}
      />

      {/* Top hairline highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Oversized index numeral — the typographic signature */}
      <div
        className={cn(
          "pointer-events-none absolute top-4 font-mono text-[11px] tracking-[0.3em] text-zinc-400/90 uppercase",
          align === "right" ? "right-5" : "left-5"
        )}
      >
        {featured ? "Feature" : "Nº"} {index}
      </div>

      {/* Content */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end p-6 sm:p-7",
          featured && "md:p-10",
          align === "right" && "items-end text-right"
        )}
      >
        {/* Giant numeral — sits above the title, magazine style */}
        <div
          className={cn(
            "mb-2 font-serif leading-none font-light text-white/95 tabular-nums",
            featured ? "text-[6rem] md:text-[9rem]" : "text-[4.5rem] md:text-[5.5rem]",
            align === "right" && "self-end"
          )}
          style={{ fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif" }}
        >
          {index}
        </div>

        <div className={cn("max-w-md", align === "right" && "ml-auto")}>
          <h3
            className={cn(
              "font-semibold tracking-tight text-zinc-50",
              featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "mt-3 leading-relaxed text-zinc-300/90",
              featured ? "text-[15px] md:text-base" : "text-[14px]"
            )}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Corner tick marks — subtle technical detail */}
      <CornerTicks />
    </div>
  );
}

// Small technical flourish — four corner ticks. Keeps the "blueprint" feel
// without being loud. Only fades in on hover.
function CornerTicks() {
  const base =
    "pointer-events-none absolute h-3 w-3 border-zinc-500/70 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100";
  return (
    <>
      <span className={cn(base, "top-3 left-3 border-t border-l")} />
      <span className={cn(base, "top-3 right-3 border-t border-r")} />
      <span className={cn(base, "bottom-3 left-3 border-b border-l")} />
      <span className={cn(base, "right-3 bottom-3 border-r border-b")} />
    </>
  );
}

