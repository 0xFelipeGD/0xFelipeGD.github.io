// ============================================================================
// LOCALE CONTEXT — provides current locale + toggle to all client components
// ============================================================================
"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Locale, defaultLocale, t, type TranslationKey } from "./i18n";

interface LocaleContextValue {
  locale: Locale;
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "pt" : "en"));
  }, []);

  const translate = useCallback((key: TranslationKey) => t(key, locale), [locale]);

  return <LocaleContext.Provider value={{ locale, toggleLocale, t: translate }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
