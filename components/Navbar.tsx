// ============================================================================
// Navbar — Fixed top navbar with animated dropdown for projects
// ============================================================================
"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Globe, Code2, Cpu } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { SITE_OWNER, PROJECTS_WEBDEV, PROJECTS_ENGINEER } from "@/lib/constants";

export default function Navbar() {
  const { locale, toggleLocale, t } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProjectsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 text-lg font-bold tracking-tight text-zinc-50">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {SITE_OWNER.fullName}
          </motion.span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="/">{t("nav.home")}</NavLink>

          {/* Projects dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setProjectsOpen(!projectsOpen)}
              className="flex items-center gap-1 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
            >
              {t("nav.projects")}
              <ChevronDown size={14} className={`transition-transform ${projectsOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {projectsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 z-50 mt-2 w-130 -translate-x-1/2 rounded-xl border border-zinc-800 bg-zinc-900/95 p-4 shadow-2xl backdrop-blur-lg"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {/* Web Dev column */}
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase">
                        <Code2 size={14} />
                        {t("nav.webdev")}
                      </div>
                      {PROJECTS_WEBDEV.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/career/webdev/projects/${p.slug}`}
                          onClick={() => setProjectsOpen(false)}
                          className="block rounded-lg px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-50"
                        >
                          {p.title}
                        </Link>
                      ))}
                      <Link
                        href="/career/webdev"
                        onClick={() => setProjectsOpen(false)}
                        className="mt-2 block px-3 text-xs font-medium text-blue-400 hover:text-blue-300"
                      >
                        {t("career.viewMore")}
                      </Link>
                    </div>

                    {/* Engineer column */}
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-wider text-purple-400 uppercase">
                        <Cpu size={14} />
                        {t("nav.engineer")}
                      </div>
                      {PROJECTS_ENGINEER.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/career/engineer/projects/${p.slug}`}
                          onClick={() => setProjectsOpen(false)}
                          className="block rounded-lg px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-50"
                        >
                          {p.title}
                        </Link>
                      ))}
                      <Link
                        href="/career/engineer"
                        onClick={() => setProjectsOpen(false)}
                        className="mt-2 block px-3 text-xs font-medium text-purple-400 hover:text-purple-300"
                      >
                        {t("career.viewMore")}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink href="/career/webdev">{t("nav.webdev")}</NavLink>
          <NavLink href="/career/engineer">{t("nav.engineer")}</NavLink>
          <NavLink href="/hobbies">{t("nav.hobbies")}</NavLink>

          {/* Locale toggle */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-50"
          >
            <Globe size={14} />
            {locale === "en" ? "PT" : "EN"}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1 rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-400"
          >
            <Globe size={12} />
            {locale === "en" ? "PT" : "EN"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-zinc-400 hover:bg-zinc-800"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-zinc-800 bg-zinc-950 md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              <MobileLink href="/" onClick={() => setMobileOpen(false)}>
                {t("nav.home")}
              </MobileLink>
              <MobileLink href="/career/webdev" onClick={() => setMobileOpen(false)}>
                {t("nav.webdev")}
              </MobileLink>
              <MobileLink href="/career/engineer" onClick={() => setMobileOpen(false)}>
                {t("nav.engineer")}
              </MobileLink>
              <MobileLink href="/hobbies" onClick={() => setMobileOpen(false)}>
                {t("nav.hobbies")}
              </MobileLink>

              {/* Mobile project lists */}
              <div className="mt-3 border-t border-zinc-800 pt-3">
                <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-blue-400 uppercase">
                  <Code2 size={12} />
                  {t("nav.webdev")} — {t("nav.projects")}
                </p>
                {PROJECTS_WEBDEV.map((p) => (
                  <MobileLink
                    key={p.slug}
                    href={`/career/webdev/projects/${p.slug}`}
                    onClick={() => setMobileOpen(false)}
                    indent
                  >
                    {p.title}
                  </MobileLink>
                ))}

                <p className="mt-3 mb-1 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-purple-400 uppercase">
                  <Cpu size={12} />
                  {t("nav.engineer")} — {t("nav.projects")}
                </p>
                {PROJECTS_ENGINEER.map((p) => (
                  <MobileLink
                    key={p.slug}
                    href={`/career/engineer/projects/${p.slug}`}
                    onClick={() => setMobileOpen(false)}
                    indent
                  >
                    {p.title}
                  </MobileLink>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50">
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
  indent,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  indent?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block rounded-lg py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-50 ${indent ? "pl-6" : "pl-3"}`}
    >
      {children}
    </Link>
  );
}
