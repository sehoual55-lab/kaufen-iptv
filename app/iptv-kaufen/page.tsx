import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SeoLanding } from "@/components/seo-landing";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "IPTV kaufen in Deutschland – Premium IPTV Anbieter 2026",
  description:
    "IPTV kaufen beim Premium-Anbieter: 130.000+ Kanäle, 140.000+ Filme & Serien in 4K, sofortige Lieferung & 24/7 Support. Sichere dir jetzt dein IPTV-Abo für Deutschland.",
  path: "/iptv-kaufen",
  keywords: ["iptv kaufen", "kaufen iptv", "iptv kaufe", "ip tv"],
});

export default function IptvKaufenPage() {
  return (
    <SeoLanding
      breadcrumb={[{ name: "IPTV kaufen", path: "/iptv-kaufen" }]}
      eyebrow="IPTV kaufen"
      h1={
        <>
          IPTV kaufen – dein Premium-Zugang zu{" "}
          <span className="text-gold-gradient">130.000+ Kanälen</span>
        </>
      }
      intro="Wenn du in Deutschland IPTV kaufen möchtest, bist du hier richtig. Erlebe Live-TV, Sport und eine riesige Film- und Serienbibliothek in echtem 4K – zuverlässig, günstig und sofort verfügbar."
      sections={[
        {
          heading: "Warum bei uns IPTV kaufen?",
          paragraphs: [
            "IPTV kaufen bedeutet, dein komplettes Fernseherlebnis über eine einzige Internetverbindung zu erhalten. Statt teurer Kabel- oder Satelliten-Abos greifst du auf zehntausende Kanäle und eine gigantische Auswahl an Filmen und Serien zu – auf jedem Gerät, jederzeit.",
            "Als einer der besten IPTV Anbieter setzen wir auf leistungsstarke, stabile Server, echte 4K-Qualität und einen deutschsprachigen Support, der rund um die Uhr für dich da ist.",
          ],
          bullets: [
            "130.000+ Live-TV-Kanäle aus aller Welt",
            "140.000+ Filme & Serien on demand",
            "Echtes 4K, Full HD und HD ohne Buffering",
            "Sofortige Lieferung nach dem Kauf",
            "Kompatibel mit Smart TV, Fire TV, Android, iOS & PC",
          ],
        },
        {
          heading: "So einfach kannst du IPTV kaufen",
          paragraphs: [
            "Der Kauf ist in wenigen Minuten erledigt: Wähle dein Paket, lege die Anzahl der gleichzeitigen Verbindungen mit dem + / − Regler fest und schließe die Bestellung sicher über WhatsApp ab. Anschließend erhältst du deine Zugangsdaten samt iptv m3u deutsch Link – meist innerhalb weniger Minuten.",
            "Ob Einsteiger mit dem 12-Monats-Paket oder Vielseher mit dem Exclusive-Abo über 24 Monate: Für jeden Bedarf gibt es das passende Angebot.",
          ],
        },
        {
          heading: "Worauf du beim IPTV kaufen achten solltest",
          paragraphs: [
            "Nicht jeder Anbieter ist seriös. Achte auf Serverstabilität, echte 4K-Qualität, eine große Senderauswahl und einen erreichbaren Support. Genau diese Punkte machen den Unterschied zwischen einem billigen und einem premium ip tv anbieter aus.",
          ],
          bullets: [
            "99,9 % Server-Verfügbarkeit mit Anti-Freeze",
            "Transparente Preise ohne versteckte Kosten",
            "Deutscher 24/7-Support per WhatsApp",
            "Testmöglichkeit vor dem Kauf auf Anfrage",
          ],
        },
      ]}
      faqs={faqs.slice(0, 6)}
      related={[
        { label: "Beste IPTV Anbieter", href: "/beste-iptv-anbieter" },
        { label: "IPTV Box kaufen", href: "/iptv-box-kaufen" },
        { label: "IPTV Line kaufen", href: "/iptv-line-kaufen" },
        { label: "IPTV m3u deutsch", href: "/iptv-m3u-deutsch" },
        { label: "Preise & Pakete", href: "/preise" },
      ]}
    />
  );
}
