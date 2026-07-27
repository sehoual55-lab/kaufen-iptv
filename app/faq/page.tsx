import type { Metadata } from "next";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { Cta } from "@/components/sections/cta";
import { JsonLd } from "@/components/jsonld";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "FAQ – Häufige Fragen zu IPTV kaufen",
  description:
    "Antworten auf häufige Fragen rund um IPTV kaufen: Lieferung, Geräte, m3u-Liste, Verbindungen, Server-Stabilität und Support. Alles Wichtige auf einen Blick.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />

      <PageHero
        eyebrow="Häufige Fragen"
        title={
          <>
            Häufige Fragen zum <span className="text-gold-gradient">IPTV kaufen</span>
          </>
        }
        description="Hier findest du Antworten auf die meistgestellten Fragen. Ist deine Frage nicht dabei? Schreib uns jederzeit per WhatsApp."
      />

      <section className="section pt-8">
        <div className="container">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <Cta />
    </>
  );
}
