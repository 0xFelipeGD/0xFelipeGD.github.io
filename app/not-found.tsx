// ============================================================================
// 404 Page — Route not found
// ============================================================================
"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

export default function NotFound() {
  const { locale } = useLocale();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-7xl font-black text-transparent">
        404
      </h1>
      <p className="mt-4 text-lg text-zinc-400">{locale === "en" ? "Page not found." : "Página não encontrada."}</p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
      >
        {locale === "en" ? "Back to home" : "Voltar ao início"}
      </Link>
    </div>
  );
}
