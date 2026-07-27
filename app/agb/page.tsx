import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Allgemeine Geschäftsbedingungen (AGB)",
  description:
    "Die Allgemeinen Geschäftsbedingungen von Kaufen IPTV: Leistungen, Preise, Lieferung, Nutzung und Haftung rund um das IPTV kaufen.",
  path: "/agb",
});

const sections = [
  {
    title: "1. Geltungsbereich",
    body: "Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen und Verträge, die über die Website abgeschlossen werden. Mit deiner Bestellung erkennst du diese Bedingungen an.",
  },
  {
    title: "2. Leistungen",
    body: "Wir stellen einen IPTV-Streaming-Zugang zur Verfügung, der den Zugriff auf Live-TV-Kanäle sowie Filme und Serien on demand ermöglicht. Der Funktionsumfang richtet sich nach dem gewählten Paket. Für die Nutzung sind eine stabile Internetverbindung und ein kompatibles Gerät erforderlich.",
  },
  {
    title: "3. Preise & Zahlung",
    body: "Es gelten die zum Zeitpunkt der Bestellung angegebenen Preise. Die Zahlung und Bestellabwicklung erfolgt über die im Bestellprozess angebotenen Kanäle. Alle Preise verstehen sich wie ausgewiesen.",
  },
  {
    title: "4. Lieferung & Aktivierung",
    body: "Nach erfolgreichem Zahlungseingang erhältst du deine Zugangsdaten in der Regel innerhalb weniger Minuten. Die Lieferung erfolgt digital per WhatsApp-Nachricht.",
  },
  {
    title: "5. Laufzeit",
    body: "Die Laufzeit richtet sich nach dem gewählten Paket. Nach Ablauf der Laufzeit kann der Zugang gegen erneute Zahlung verlängert werden. Es besteht keine automatische Vertragsverlängerung.",
  },
  {
    title: "6. Nutzung",
    body: "Der Zugang ist ausschließlich für den privaten Gebrauch bestimmt. Eine Weitergabe der Zugangsdaten an Dritte oder eine kommerzielle Nutzung ist nicht gestattet.",
  },
  {
    title: "7. Verfügbarkeit",
    body: "Wir bemühen uns um eine möglichst hohe Verfügbarkeit unserer Dienste (Zielwert 99,9 %). Kurzzeitige Unterbrechungen aufgrund von Wartung oder technischen Störungen können jedoch nicht vollständig ausgeschlossen werden.",
  },
  {
    title: "8. Haftung",
    body: "Wir haften nicht für Störungen, die außerhalb unseres Einflussbereichs liegen, insbesondere für Probleme mit der Internetverbindung des Kunden oder mit Endgeräten Dritter.",
  },
  {
    title: "9. Support",
    body: "Unser deutschsprachiger Support steht dir 24/7 über WhatsApp zur Verfügung, um dich bei Einrichtung und Nutzung zu unterstützen.",
  },
];

export default function AgbPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "AGB", path: "/agb" }]} />
      <PageHero eyebrow="Rechtliches" title="Allgemeine Geschäftsbedingungen" />

      <section className="section pt-8">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-8 text-slate-300">
            <p className="text-sm text-slate-500">Stand: Juli 2026</p>
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-xl font-semibold text-white">{s.title}</h2>
                <p className="mt-2 leading-relaxed">{s.body}</p>
              </div>
            ))}
            <div>
              <h2 className="font-display text-xl font-semibold text-white">10. Kontakt</h2>
              <p className="mt-2 leading-relaxed">
                Bei Fragen zu diesen AGB erreichst du uns über unseren WhatsApp-Support.
              </p>
            </div>
            <p className="text-sm text-slate-500">
              Hinweis: Diese AGB sind eine allgemeine Vorlage und ersetzen keine individuelle
              Rechtsberatung. Bitte passe sie an deine konkreten Gegebenheiten an.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
