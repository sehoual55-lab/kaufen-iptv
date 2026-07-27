import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SeoLanding } from "@/components/seo-landing";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Beste IPTV Anbieter 2026 – der Vergleich für Deutschland",
  description:
    "Was macht die besten IPTV Anbieter aus? Wir zeigen die wichtigsten Qualitätsmerkmale, damit du einen seriösen ip tv anbieter findest und sicher IPTV kaufen kannst.",
  path: "/beste-iptv-anbieter",
  keywords: ["beste iptv anbieter", "ip tv anbieter", "iptv kaufen"],
});

export default function BesteIptvAnbieterPage() {
  return (
    <SeoLanding
      breadcrumb={[{ name: "Beste IPTV Anbieter", path: "/beste-iptv-anbieter" }]}
      eyebrow="Anbieter-Vergleich"
      h1={
        <>
          Die <span className="text-gold-gradient">besten IPTV Anbieter</span> für Deutschland
        </>
      }
      intro="Der Markt ist groß und unübersichtlich. Wir erklären dir, woran du die besten IPTV Anbieter erkennst und worauf es wirklich ankommt, bevor du dein IPTV kaufst."
      sections={[
        {
          heading: "Diese Kriterien zeichnen die besten IPTV Anbieter aus",
          paragraphs: [
            "Ein starker ip tv anbieter überzeugt nicht durch den niedrigsten Preis, sondern durch Zuverlässigkeit und Qualität. Achte auf folgende Merkmale, um einen seriösen Dienst zu erkennen:",
          ],
          bullets: [
            "Umfangreiche iptv-kanäle inklusive deutscher Sender & Sport",
            "Echtes 4K statt nur beworbenem HD",
            "Stabile Server mit 99,9 % Verfügbarkeit",
            "Sofortige Lieferung des Zugangs & m3u-Links",
            "Deutschsprachiger 24/7-Support",
          ],
        },
        {
          heading: "Rote Flaggen unseriöser Anbieter",
          paragraphs: [
            "Vorsicht bei Anbietern ohne erreichbaren Kontakt, mit unrealistisch niedrigen Preisen oder ständigen Ausfällen. Ein guter Anbieter bietet dir Transparenz, eine klare Laufzeit und die Möglichkeit, den Dienst vor dem Kauf zu testen.",
          ],
        },
        {
          heading: "Warum wir zu den besten IPTV Anbietern gehören",
          paragraphs: [
            "Wir vereinen alles, was einen Premium-Dienst ausmacht: eine riesige Auswahl an Kanälen und Inhalten, echte 4K-Qualität, blitzschnelle Lieferung und einen Support, der wirklich hilft. Tausende zufriedene Kunden in Deutschland vertrauen uns bereits.",
          ],
          bullets: [
            "35.000+ zufriedene Kunden in Deutschland",
            "4,9 von 5 Sternen aus tausenden Bewertungen",
            "Faire Pakete von 12 bis 24 Monaten Laufzeit",
          ],
        },
      ]}
      faqs={faqs.slice(1, 7)}
      related={[
        { label: "IPTV kaufen", href: "/iptv-kaufen" },
        { label: "IP TV Anbieter", href: "/iptv-anbieter" },
        { label: "Preise & Pakete", href: "/preise" },
        { label: "Blog & Ratgeber", href: "/blog" },
      ]}
    />
  );
}
