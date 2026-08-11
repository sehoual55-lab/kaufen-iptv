/**
 * ============================================================================
 *  ZENTRALE KONFIGURATION — kaufen-iptv.store
 * ============================================================================
 *  Bearbeite ALLES an einer Stelle: Domain, Telefonnummer, WhatsApp,
 *  SEO-Keywords, Land, Sprache, Hero-Statistiken und Kundenbewertungen.
 *
 *  Nach jeder Änderung: Seite speichern → automatisch aktualisiert.
 * ============================================================================
 */

export const siteConfig = {
  // ── Marke ───────────────────────────────────────────────────────────────
  brand: {
    name: "Kaufen IPTV",
    legalName: "Kaufen-IPTV.store",
    tagline: "Premium IPTV kaufen in Deutschland",
    slogan: "Streaming in 4K. Ohne Kompromisse.",
  },

  // ── Domain & URLs ───────────────────────────────────────────────────────
  domain: "kaufen-iptv.store",
  url: "https://kaufen-iptv.store",

  // ── Kontakt ─────────────────────────────────────────────────────────────
  contact: {
    // Telefon (international, mit Ländervorwahl)
    phone: "+33 7 56 75 73 87",
    // Für Links / WhatsApp: nur Ziffern, ohne + und Leerzeichen
    phoneRaw: "33756757387",
    // WhatsApp-Nummer (in der Regel identisch mit der Telefonnummer)
    whatsapp: "16615413954",
    email: "support@kaufen-iptv.store",
    // Standard-Nachricht, die im WhatsApp-Chat vorausgefüllt wird
    whatsappDefaultMessage:
      "Hallo! Ich interessiere mich für ein IPTV-Abo. Können Sie mir bitte weiterhelfen?",
  },

  // ── Land & Sprache ──────────────────────────────────────────────────────
  locale: {
    language: "de",
    country: "DE",
    countryName: "Deutschland",
    currency: "USD", // Preise werden in USD ausgewiesen (wie im Original)
    currencySymbol: "$",
    ogLocale: "de_DE",
  },

  // ── Hero-Statistiken (frei editierbar) ──────────────────────────────────
  heroStats: [
    { value: "130.000+", label: "TV-Kanäle" },
    { value: "140.000+", label: "Filme & Serien" },
    { value: "99,9 %", label: "Server-Verfügbarkeit" },
    { value: "24/7", label: "Deutscher Support" },
  ],

  // ── Vertrauens-Kennzahlen ───────────────────────────────────────────────
  trust: {
    rating: "4,9",
    reviewCount: 2847,
    customersLabel: "Zufriedene Kunden in Deutschland",
    customersCount: "35.000+",
  },

  // ── Soziale Netzwerke (optional) ────────────────────────────────────────
  social: {
    facebook: "",
    instagram: "",
    telegram: "",
    youtube: "",
  },

  // ── TMDB (Film- & Serien-Poster) ────────────────────────────────────────
  // Dein TMDB API-Key (v3). Wird beim Build verwendet, um echte Poster zu laden.
  // Key kostenlos unter: https://www.themoviedb.org/settings/api
  // Kann auch über die Umgebungsvariable TMDB_API_KEY überschrieben werden.
  tmdb: {
    apiKey: "eb88f8554c5c594b1b82a59672ee98f4",
  },

  // ── SEO ─────────────────────────────────────────────────────────────────
  seo: {
    defaultTitle: "IPTV kaufen in Deutschland | Premium IPTV Anbieter 2026",
    titleTemplate: "%s | Kaufen IPTV",
    defaultDescription:
      "IPTV kaufen bei Deutschlands führendem Premium-Anbieter: 130.000+ Kanäle, 140.000+ Filme & Serien in 4K. Sofortige Lieferung, stabile Server und 24/7 Support. Jetzt IPTV-Line kaufen.",
    primaryKeyword: "iptv kaufen",
    keywords: [
      "iptv kaufen",
      "ip tv",
      "iptv m3u deutsch",
      "ip tv anbieter",
      "iptv-kanäle",
      "beste iptv anbieter",
      "iptv line kaufen",
      "iptv kaufe",
      "iptv lines kaufen",
      "iptv box kaufen",
      "kaufen iptv",
    ],
    ogImage: "/images/og-image.jpg",
    twitterHandle: "@kaufeniptv",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Baut einen WhatsApp-Link mit optionaler Nachricht. */
export function buildWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(
    message ?? siteConfig.contact.whatsappDefaultMessage
  );
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`;
}

/** Telefon-Link (tel:) */
export function buildPhoneLink(): string {
  return `tel:+${siteConfig.contact.phoneRaw}`;
}
