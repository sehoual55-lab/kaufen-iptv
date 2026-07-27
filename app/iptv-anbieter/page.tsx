import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SeoLanding } from "@/components/seo-landing";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "IP TV Anbieter aus Deutschland – zuverlässig & premium",
  description:
    "Auf der Suche nach einem zuverlässigen ip tv anbieter? Wir bieten stabile Server, 130.000+ Kanäle und deutschen Support. Jetzt informieren und IPTV kaufen.",
  path: "/iptv-anbieter",
  keywords: ["ip tv anbieter", "ip tv", "iptv-kanäle", "iptv kaufen"],
});

export default function IptvAnbieterPage() {
  return (
    <SeoLanding
      breadcrumb={[{ name: "IP TV Anbieter", path: "/iptv-anbieter" }]}
      eyebrow="IP TV Anbieter"
      h1={
        <>
          Dein zuverlässiger <span className="text-emerald-gradient">IP TV Anbieter</span>
        </>
      }
      intro="Als premium ip tv anbieter bringen wir dir tausende Kanäle und eine riesige Streaming-Bibliothek in gestochen scharfer Qualität nach Hause – stabil, günstig und mit deutschem Support."
      sections={[
        {
          heading: "Was einen guten IP TV Anbieter ausmacht",
          paragraphs: [
            "Ein verlässlicher ip tv anbieter liefert nicht nur viele iptv-kanäle, sondern vor allem konstante Qualität. Unsere Infrastruktur ist auf Stabilität ausgelegt: redundante Server, Anti-Freeze-Technologie und eine Verfügbarkeit von 99,9 % sorgen dafür, dass dein Stream auch zur Primetime flüssig bleibt.",
          ],
          bullets: [
            "130.000+ Live-Kanäle & 140.000+ VOD-Titel",
            "Echtes 4K / FHD / HD ohne Ruckeln",
            "Deutsche & internationale Sender mit EPG",
            "Netflix, Prime Video, Disney+ Inhalte inklusive",
          ],
        },
        {
          heading: "Für jedes Gerät der richtige Anbieter",
          paragraphs: [
            "Egal ob Smart TV, Fire TV Stick, Android-Box, Smartphone oder PC – unser ip tv läuft überall. Du brauchst lediglich eine kompatible App und deine Zugangsdaten, die du nach dem Kauf sofort erhältst.",
          ],
        },
        {
          heading: "Support, der wirklich hilft",
          paragraphs: [
            "Ein Anbieter ist nur so gut wie sein Service. Unser deutschsprachiges Team ist 24/7 über WhatsApp erreichbar und begleitet dich von der Einrichtung bis zum reibungslosen Streaming.",
          ],
        },
      ]}
      faqs={faqs.slice(2, 8)}
      related={[
        { label: "Beste IPTV Anbieter", href: "/beste-iptv-anbieter" },
        { label: "IPTV kaufen", href: "/iptv-kaufen" },
        { label: "IPTV m3u deutsch", href: "/iptv-m3u-deutsch" },
        { label: "Installation", href: "/installation" },
      ]}
    />
  );
}
