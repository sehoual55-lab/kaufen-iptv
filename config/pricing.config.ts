/**
 * ============================================================================
 *  PREIS-PAKETE — UNVERÄNDERT ÜBERNEHMEN
 * ============================================================================
 *  Namen, Preise, Laufzeiten, Features, Reihenfolge und das Verbindungs-
 *  System bleiben exakt wie vorgegeben. Nur die Anzeige wurde neu gestaltet
 *  und ins Deutsche übersetzt.
 * ============================================================================
 */

export type Plan = {
  id: string;
  name: string;
  price: number;
  /** Laufzeit als Anzeigetext */
  duration: string;
  /** Bonus-Monate (optional) */
  bonus?: string;
  connections: number;
  channels: string;
  movies: string;
  badge?: "Am beliebtesten" | "Bester Wert";
  highlight?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "bronze",
    name: "Bronze",
    price: 39.99,
    duration: "12 Monate",
    connections: 1,
    channels: "25.000+",
    movies: "100.000+",
    features: [
      "25.000+ TV-Kanäle",
      "100.000+ Filme & Serien",
      "4K / FHD / HD Qualität",
      "Alle US- & internationalen Kanäle",
      "Kompatibel mit allen Geräten",
      "TV-Programm (EPG)",
      "Netflix, Prime Video & mehr",
      "100 % stabile Server",
      "24/7 technischer Support",
      "Sofortige Lieferung",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    price: 49.99,
    duration: "15 Monate",
    bonus: "+3 Monate gratis",
    connections: 1,
    channels: "25.000+",
    movies: "100.000+",
    badge: "Am beliebtesten",
    highlight: true,
    features: [
      "25.000+ TV-Kanäle",
      "100.000+ Filme & Serien",
      "4K / FHD / HD Qualität",
      "Alle US- & internationalen Kanäle",
      "Kompatibel mit allen Geräten",
      "TV-Programm (EPG)",
      "Netflix, Prime Video & mehr",
      "100 % stabile Server",
      "24/7 technischer Support",
      "Sofortige Lieferung",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    price: 59.99,
    duration: "15 Monate",
    bonus: "+3 Monate gratis",
    connections: 1,
    channels: "25.000+",
    movies: "100.000+",
    features: [
      "25.000+ TV-Kanäle",
      "100.000+ Filme & Serien",
      "4K / FHD / HD Qualität",
      "Alle US- & internationalen Kanäle",
      "Kompatibel mit allen Geräten",
      "TV-Programm (EPG)",
      "Netflix, Prime Video & mehr",
      "100 % stabile Server",
      "24/7 technischer Support",
      "Sofortige Lieferung",
    ],
  },
  {
    id: "exclusive",
    name: "Exclusive",
    price: 84.99,
    duration: "24 Monate",
    bonus: "+3 Monate gratis",
    connections: 1,
    channels: "130.000+",
    movies: "140.000+",
    badge: "Bester Wert",
    features: [
      "130.000+ TV-Kanäle",
      "140.000+ Filme & Serien",
      "4K / FHD / HD Qualität",
      "Alle internationalen Kanäle",
      "Kompatibel mit allen Geräten",
      "TV-Programm (EPG)",
      "Netflix, Prime Video & mehr",
      "100 % stabile Server",
      "24/7 technischer Support",
      "Sofortige Lieferung",
    ],
  },
];

/**
 * Verbindungs-System (+ / −):
 * Die erste Verbindung kostet den normalen Grundpreis.
 * Jede WEITERE gleichzeitige Verbindung erhält 15 % Rabatt auf den Grundpreis.
 */
export const connectionConfig = {
  min: 1,
  max: 5,
  /** Rabatt auf jede zusätzliche Verbindung (0.15 = 15 %) */
  additionalDiscount: 0.15,
};

/**
 * Gesamtpreis: erste Verbindung normal, jede weitere 15 % günstiger.
 */
export function calcPrice(basePrice: number, connections: number): number {
  const c = Math.max(connectionConfig.min, Math.min(connectionConfig.max, connections));
  const additional = (c - 1) * basePrice * (1 - connectionConfig.additionalDiscount);
  const total = basePrice + additional;
  return Math.round(total * 100) / 100;
}

/** Preis OHNE Rabatt (Grundpreis × Verbindungen) – für die Ersparnis-Anzeige. */
export function calcFullPrice(basePrice: number, connections: number): number {
  const c = Math.max(connectionConfig.min, Math.min(connectionConfig.max, connections));
  return Math.round(basePrice * c * 100) / 100;
}

export function formatPrice(price: number, symbol = "$"): string {
  return `${symbol}${price.toFixed(2)}`;
}
