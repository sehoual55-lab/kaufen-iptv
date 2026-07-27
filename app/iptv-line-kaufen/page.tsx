import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SeoLanding } from "@/components/seo-landing";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "IPTV Line kaufen – dein persönlicher Zugang einfach erklärt",
  description:
    "IPTV Line kaufen leicht gemacht: Was eine IPTV-Line ist, wie du mehrere Lines nutzt und in wenigen Minuten einrichtest. Jetzt IPTV lines kaufen & streamen.",
  path: "/iptv-line-kaufen",
  keywords: ["iptv line kaufen", "iptv lines kaufen", "iptv kaufen"],
});

export default function IptvLineKaufenPage() {
  return (
    <SeoLanding
      breadcrumb={[{ name: "IPTV Line kaufen", path: "/iptv-line-kaufen" }]}
      eyebrow="Grundlagen"
      h1={
        <>
          <span className="text-emerald-gradient">IPTV Line kaufen</span> – so funktioniert's
        </>
      }
      intro="Der Begriff sorgt oft für Verwirrung. Wir erklären dir einfach, was eine IPTV-Line ist, wie viele Lines du brauchst und wie du sie einrichtest, wenn du IPTV lines kaufen möchtest."
      sections={[
        {
          heading: "Was ist eine IPTV-Line?",
          paragraphs: [
            "Wenn du IPTV Line kaufen liest, ist damit dein persönlicher Zugang gemeint. Eine Line besteht aus Benutzername, Passwort und Server-URL bzw. dem m3u-Link, mit dem sich ein Gerät gleichzeitig verbinden kann.",
            "Eine Line entspricht also einer gleichzeitigen Verbindung. Möchtest du parallel auf mehreren Fernsehern schauen, kannst du einfach mehrere iptv lines kaufen oder die Anzahl der Verbindungen mit dem + / − Regler erhöhen.",
          ],
        },
        {
          heading: "Wie viele Lines brauche ich?",
          paragraphs: [
            "Das hängt davon ab, auf wie vielen Geräten du gleichzeitig streamen möchtest:",
          ],
          bullets: [
            "1 Line: ein Fernseher/Gerät zur gleichen Zeit",
            "2 Lines: Wohnzimmer und Schlafzimmer parallel",
            "3+ Lines: große Haushalte oder mehrere Räume gleichzeitig",
          ],
        },
        {
          heading: "Line einrichten in wenigen Minuten",
          paragraphs: [
            "Nach dem Kauf erhältst du deine Line-Zugangsdaten per Nachricht. Installiere eine IPTV-App, gib die Daten oder den m3u-Link ein – und schon werden alle Kanäle und Inhalte geladen. Unser Support hilft dir bei Bedarf jederzeit weiter.",
          ],
        },
      ]}
      faqs={faqs.slice(3, 9)}
      related={[
        { label: "IPTV kaufen", href: "/iptv-kaufen" },
        { label: "IPTV Box kaufen", href: "/iptv-box-kaufen" },
        { label: "IPTV m3u deutsch", href: "/iptv-m3u-deutsch" },
        { label: "Installation", href: "/installation" },
      ]}
    />
  );
}
