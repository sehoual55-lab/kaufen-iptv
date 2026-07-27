import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { Devices } from "@/components/sections/devices";
import { Cta } from "@/components/sections/cta";
import { buildWhatsAppLink } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  title: "IPTV Installationsanleitung – Einrichtung auf allen Geräten",
  description:
    "Schritt-für-Schritt-Anleitung, um dein IPTV einzurichten: Fire TV Stick, Smart TV, Android, iOS, Konsole und PC. Mit iptv m3u deutsch Link in wenigen Minuten startklar.",
  path: "/installation",
});

export default function InstallationPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Installation", path: "/installation" }]} />

      <PageHero
        eyebrow="Installationsanleitung"
        title={
          <>
            IPTV einrichten in <span className="text-emerald-gradient">wenigen Minuten</span>
          </>
        }
        description="Nach dem IPTV kaufen erhältst du deine Zugangsdaten und den iptv m3u deutsch Link. Wähle unten dein Gerät und folge der Anleitung."
      />

      <Devices />

      <section className="pb-4">
        <div className="container">
          <div className="glass mx-auto max-w-3xl rounded-3xl p-8 text-center">
            <h2 className="font-display text-xl font-semibold text-white">
              Brauchst du Hilfe bei der Einrichtung?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-400">
              Unser deutschsprachiger Support hilft dir rund um die Uhr per WhatsApp –
              Schritt für Schritt, bis alles läuft.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={buildWhatsAppLink("Hallo! Ich brauche Hilfe bei der IPTV-Installation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emerald"
              >
                Support über WhatsApp
              </a>
              <Link href="/preise" className="btn-ghost">
                IPTV kaufen <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
