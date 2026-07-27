import type { Metadata } from "next";
import { buildMetadata, faqJsonLd, productJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { Pricing } from "@/components/sections/pricing";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { SectionHeading } from "@/components/section-heading";
import { Cta } from "@/components/sections/cta";
import { JsonLd } from "@/components/jsonld";
import { faqs } from "@/data/faqs";
import { plans } from "@/config/pricing.config";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  title: "IPTV kaufen – Preise & Pakete | Ab $39.99",
  description:
    "IPTV kaufen ab $39.99: Bronze, Gold, Platinum & Exclusive. 25.000–130.000+ Kanäle, 4K-Qualität, sofortige Lieferung. Wähle deine Verbindungen mit dem + / − Regler.",
  path: "/preise",
});

const priceFaqs = faqs.slice(0, 5);

export default function PreisePage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(priceFaqs),
          ...plans.map((p) =>
            productJsonLd({ name: p.name, price: p.price, description: `${p.name} IPTV Paket – ${p.duration}` })
          ),
        ]}
      />
      <Breadcrumbs items={[{ name: "Preise", path: "/preise" }]} />

      <PageHero
        eyebrow="Preise & Pakete"
        title={
          <>
            IPTV kaufen zu <span className="text-gold-gradient">fairen Preisen</span>
          </>
        }
        description="Transparente Pakete ohne versteckte Kosten. Alle Preise inklusive 4K-Streaming, riesiger Senderauswahl und deutschem 24/7-Support."
      />

      <Pricing showHeading={false} />

      <section className="section pt-0">
        <div className="container">
          <SectionHeading
            eyebrow="Fragen zum Kauf"
            title="Häufige Fragen zu Preisen & Bestellung"
          />
          <div className="mt-12">
            <FaqAccordion items={priceFaqs} />
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
