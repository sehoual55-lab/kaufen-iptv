import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SeoLanding } from "@/components/seo-landing";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "IPTV Box kaufen – oder reicht ein Fire TV Stick?",
  description:
    "IPTV Box kaufen oder doch nur einen Fire TV Stick? Wir vergleichen die Geräte und zeigen die günstigste Lösung, um IPTV in 4K zu streamen.",
  path: "/iptv-box-kaufen",
  keywords: ["iptv box kaufen", "iptv kaufen", "ip tv"],
});

export default function IptvBoxKaufenPage() {
  return (
    <SeoLanding
      breadcrumb={[{ name: "IPTV Box kaufen", path: "/iptv-box-kaufen" }]}
      eyebrow="Hardware-Ratgeber"
      h1={
        <>
          <span className="text-gold-gradient">IPTV Box kaufen</span> – lohnt sich das?
        </>
      }
      intro="Bevor du eine IPTV Box kaufen möchtest, solltest du wissen: In den meisten Fällen brauchst du gar keine zusätzliche Hardware. Wir zeigen dir die beste und günstigste Lösung."
      sections={[
        {
          heading: "Brauche ich überhaupt eine IPTV Box?",
          paragraphs: [
            "Die gute Nachricht: Für unser IPTV brauchst du in der Regel keine spezielle IPTV Box kaufen. Dein vorhandenes Gerät reicht meist völlig aus. Eine dedizierte Box lohnt sich vor allem, wenn du einen älteren Fernseher ohne Smart-Funktionen aufrüsten möchtest.",
          ],
          bullets: [
            "Amazon Fire TV Stick – günstigster & einfachster Einstieg",
            "Android TV Box – mehr Leistung für ältere Fernseher",
            "Smart TV – oft ganz ohne Zusatzgerät nutzbar",
            "Smartphone, Tablet & PC – überall streamen",
          ],
        },
        {
          heading: "Fire TV Stick vs. dedizierte IPTV Box",
          paragraphs: [
            "Der Fire TV Stick ist für die meisten Nutzer die beste Wahl: klein, günstig und flexibel einsetzbar. Eine echte IPTV Box bietet dagegen mehr Speicher und Rechenleistung – sinnvoll, wenn du viele Apps parallel nutzt oder einen alten TV smart machen willst.",
          ],
        },
        {
          heading: "So richtest du deine Box ein",
          paragraphs: [
            "Egal für welches Gerät du dich entscheidest: Nach dem IPTV kaufen installierst du einfach eine kompatible App (z. B. TiviMate oder IPTV Smarters), gibst deine Zugangsdaten ein und streamst sofort in 4K.",
          ],
        },
      ]}
      faqs={faqs.slice(2, 8)}
      related={[
        { label: "IPTV kaufen", href: "/iptv-kaufen" },
        { label: "Installationsanleitung", href: "/installation" },
        { label: "IPTV Line kaufen", href: "/iptv-line-kaufen" },
        { label: "Preise & Pakete", href: "/preise" },
      ]}
    />
  );
}
