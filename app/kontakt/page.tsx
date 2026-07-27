import type { Metadata } from "next";
import { MessageCircle, Clock, Zap } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { buildWhatsAppLink } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt – Support & Beratung",
  description:
    "Kontaktiere Kaufen IPTV: 24/7 deutschsprachiger Support per WhatsApp. Wir beraten dich gerne rund um das IPTV kaufen.",
  path: "/kontakt",
});

export default function KontaktPage() {
  const channels = [
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      value: "Sofort-Chat · schnelle Antwort",
      href: buildWhatsAppLink(),
      accent: "emerald" as const,
    },
    {
      icon: Zap,
      title: "Sofortige Lieferung",
      value: "Zugangsdaten in wenigen Minuten",
      href: buildWhatsAppLink("Hallo! Ich möchte IPTV kaufen. Bitte um die nächsten Schritte."),
      accent: "gold" as const,
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ name: "Kontakt", path: "/kontakt" }]} />

      <PageHero
        eyebrow="Kontakt"
        title={
          <>
            Wir sind <span className="text-emerald-gradient">für dich da</span>
          </>
        }
        description="Fragen zum IPTV kaufen, zur Einrichtung oder zu deinem Abo? Unser deutschsprachiges Team hilft dir rund um die Uhr weiter."
      />

      <section className="section pt-8">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="grid gap-4 sm:grid-cols-1">
                {channels.map((c) => (
                  <a
                    key={c.title}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="glass flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        c.accent === "emerald" ? "bg-emerald/10 text-emerald" : "bg-gold/10 text-gold"
                      }`}
                    >
                      <c.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{c.title}</p>
                      <p className="text-sm text-slate-400">{c.value}</p>
                    </div>
                  </a>
                ))}
                <div className="glass flex items-center gap-4 rounded-2xl p-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] text-slate-300">
                    <Clock className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">Erreichbarkeit</p>
                    <p className="text-sm text-slate-400">24 Stunden · 7 Tage die Woche</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
