import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { ContentShowcase } from "@/components/sections/content-showcase";
import { Steps } from "@/components/sections/steps";
import { Devices } from "@/components/sections/devices";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { Cta } from "@/components/sections/cta";
import { SectionHeading } from "@/components/section-heading";
import { JsonLd } from "@/components/jsonld";
import { faqJsonLd, productJsonLd } from "@/lib/seo";
import { faqs } from "@/data/faqs";
import { plans } from "@/config/pricing.config";
import { siteConfig } from "@/config/site.config";

export default function HomePage() {
  const homeFaqs = faqs.slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(homeFaqs),
          productJsonLd({
            name: "Gold",
            price: 49.99,
            description: siteConfig.seo.defaultDescription,
          }),
        ]}
      />

      <Hero />
      <ContentShowcase />
      <Features />
      <Steps />
      <Devices />
      <Pricing />
      <Testimonials />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Häufige Fragen"
            title={
              <>
                Alles rund um <span className="text-gold-gradient">IPTV kaufen</span>
              </>
            }
            subtitle="Die wichtigsten Antworten auf einen Blick. Weitere Fragen? Unser Support hilft dir jederzeit."
          />
          <div className="mt-12">
            <FaqAccordion items={homeFaqs} />
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="btn-ghost">
              Alle FAQ ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
