import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SeoLanding } from "@/components/seo-landing";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "IPTV m3u deutsch – Liste einrichten & deutsche Sender streamen",
  description:
    "IPTV m3u deutsch einfach einrichten: So bindest du deine m3u-Liste mit deutschen Sendern und EPG in jede App ein. Anleitung für Fire TV, Smart TV & mehr.",
  path: "/iptv-m3u-deutsch",
  keywords: ["iptv m3u deutsch", "iptv-kanäle", "iptv kaufen"],
});

export default function IptvM3uDeutschPage() {
  return (
    <SeoLanding
      breadcrumb={[{ name: "IPTV m3u deutsch", path: "/iptv-m3u-deutsch" }]}
      eyebrow="m3u & Einrichtung"
      h1={
        <>
          <span className="text-gold-gradient">IPTV m3u deutsch</span> – einfach einrichten
        </>
      }
      intro="Eine m3u-Liste ist der Schlüssel zu all deinen Kanälen. Hier erfährst du, was eine iptv m3u deutsch Liste ist und wie du sie in wenigen Minuten in jede App einbindest."
      sections={[
        {
          heading: "Was ist eine m3u-Liste?",
          paragraphs: [
            "Eine iptv m3u deutsch Liste ist eine Datei bzw. ein Link, der alle deine iptv-kanäle und Inhalte enthält. Du bindest sie einmal in eine IPTV-App ein und hast sofort Zugriff auf das komplette Angebot – inklusive deutscher Sender und TV-Programm (EPG).",
          ],
        },
        {
          heading: "m3u-Liste in 4 Schritten einbinden",
          paragraphs: [
            "Nach dem IPTV kaufen erhältst du deinen m3u-Link sowie Xtream-Codes. Beide Methoden funktionieren – wähle die, die deine App unterstützt:",
          ],
          bullets: [
            "Passende App installieren (IPTV Smarters, TiviMate, Smart IPTV)",
            "In der App „Playlist hinzufügen“ bzw. „Add M3U URL“ wählen",
            "Deinen m3u-Link einfügen und einen Namen vergeben",
            "Kanäle & EPG laden – fertig zum Streamen",
          ],
        },
        {
          heading: "Deutsche Sender & EPG inklusive",
          paragraphs: [
            "Unsere Liste enthält alle wichtigen deutschen Sender in HD und 4K, versehen mit einem vollständigen EPG. So hast du das TV-Programm immer im Blick und findest deine Lieblingssendungen im Handumdrehen.",
          ],
        },
        {
          heading: "Probleme beim Laden?",
          paragraphs: [
            "Lädt die Liste nicht, prüfe deine Internetverbindung und ob der Link korrekt kopiert wurde. Unser deutschsprachiger Support hilft dir bei Bedarf 24/7 per WhatsApp weiter.",
          ],
        },
      ]}
      faqs={faqs.slice(4, 10)}
      related={[
        { label: "IPTV kaufen", href: "/iptv-kaufen" },
        { label: "Installationsanleitung", href: "/installation" },
        { label: "IPTV Line kaufen", href: "/iptv-line-kaufen" },
        { label: "IP TV Anbieter", href: "/iptv-anbieter" },
      ]}
    />
  );
}
