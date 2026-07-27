import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Kaufen IPTV. Erfahre, wie wir mit deinen Daten umgehen und welche Rechte dir nach der DSGVO zustehen.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Datenschutz", path: "/datenschutz" }]} />
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />

      <section className="section pt-8">
        <div className="container">
          <div className="prose-legal mx-auto max-w-3xl space-y-8 text-slate-300">
            <p className="text-sm text-slate-500">Stand: Juli 2026</p>

            <div>
              <h2 className="font-display text-xl font-semibold text-white">1. Verantwortlicher</h2>
              <p className="mt-2 leading-relaxed">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist der Betreiber von{" "}
                {siteConfig.domain}. Bei Fragen zum Datenschutz erreichst du uns über unseren
                WhatsApp-Support.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-white">2. Erhebung von Daten</h2>
              <p className="mt-2 leading-relaxed">
                Wir erheben personenbezogene Daten nur, wenn du sie uns freiwillig – etwa im Rahmen einer
                Kontaktaufnahme über WhatsApp – mitteilst. Beim Besuch der Website
                werden technisch notwendige Daten (z. B. IP-Adresse, Browsertyp) verarbeitet, um die
                Auslieferung der Seite sicherzustellen.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-white">3. Zweck der Verarbeitung</h2>
              <p className="mt-2 leading-relaxed">
                Deine Daten verwenden wir ausschließlich zur Bearbeitung deiner Anfrage, zur Abwicklung
                deiner Bestellung und zur Bereitstellung unseres Supports. Eine Weitergabe an Dritte
                erfolgt nicht, sofern dies nicht zur Vertragserfüllung erforderlich oder gesetzlich
                vorgeschrieben ist.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-white">4. WhatsApp-Kontakt</h2>
              <p className="mt-2 leading-relaxed">
                Wenn du uns über WhatsApp kontaktierst, gelten zusätzlich die Datenschutzbestimmungen von
                WhatsApp. Die von dir übermittelten Nachrichten und deine Telefonnummer verarbeiten wir zur
                Kommunikation und Auftragsabwicklung.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-white">5. Cookies &amp; Analyse</h2>
              <p className="mt-2 leading-relaxed">
                Diese Website nutzt technisch notwendige Cookies. Sofern Analyse- oder Marketing-Tools
                eingesetzt werden, geschieht dies nur mit deiner Einwilligung, die du jederzeit widerrufen
                kannst.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-white">6. Deine Rechte</h2>
              <p className="mt-2 leading-relaxed">
                Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
                deiner Daten sowie das Recht auf Datenübertragbarkeit und Widerspruch. Zur Ausübung deiner
                Rechte kontaktiere uns über unseren WhatsApp-Support.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-white">7. Speicherdauer</h2>
              <p className="mt-2 leading-relaxed">
                Wir speichern personenbezogene Daten nur so lange, wie es für die genannten Zwecke oder zur
                Einhaltung gesetzlicher Aufbewahrungsfristen erforderlich ist.
              </p>
            </div>

            <p className="text-sm text-slate-500">
              Hinweis: Diese Datenschutzerklärung ist eine allgemeine Vorlage und ersetzt keine
              individuelle Rechtsberatung. Bitte passe sie an deine konkreten Gegebenheiten an.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
