// ============================================================================
// Footer — Site footer with social links
// ============================================================================
"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS, SITE_OWNER, FOOTER_YEAR } from "@/lib/constants";
import { useLocale } from "@/lib/locale-context";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-zinc-500">
          © {FOOTER_YEAR} {SITE_OWNER.fullName}. {t("footer.rights")}
        </p>
        <div className="flex items-center gap-4">
          <SocialIcon href={SOCIAL_LINKS.linkedin} label="LinkedIn">
            <Linkedin size={18} />
          </SocialIcon>
          <SocialIcon href={SOCIAL_LINKS.github} label="GitHub">
            <Github size={18} />
          </SocialIcon>
          <SocialIcon href={SOCIAL_LINKS.email} label="Email">
            <Mail size={18} />
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-zinc-500 transition-colors hover:text-zinc-50"
    >
      {children}
    </a>
  );
}
