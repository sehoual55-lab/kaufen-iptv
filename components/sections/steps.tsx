import { ShoppingCart, MessageSquareText, Download, PlayCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    icon: ShoppingCart,
    title: "1. Paket wählen",
    text: "Wähle das passende Paket und lege mit dem + / − Regler die Anzahl der Verbindungen fest.",
  },
  {
    icon: MessageSquareText,
    title: "2. Über WhatsApp bestellen",
    text: "Schließe die Bestellung sicher per WhatsApp ab. Unser Team beantwortet all deine Fragen.",
  },
  {
    icon: Download,
    title: "3. Zugangsdaten erhalten",
    text: "Du bekommst deine m3u-Liste und Xtream-Codes sofort – meist innerhalb weniger Minuten.",
  },
  {
    icon: PlayCircle,
    title: "4. Loslegen & streamen",
    text: "App installieren, Zugangsdaten eingeben und sofort in 4K auf allen Geräten streamen.",
  },
];

export function Steps() {
  return (
    <section className="section relative">
      <div className="container">
        <SectionHeading
          eyebrow="So funktioniert's"
          title={
            <>
              In 4 Schritten zum <span className="text-emerald-gradient">Premium-Streaming</span>
            </>
          }
          subtitle="IPTV kaufen war noch nie so einfach. Vom Kauf bis zum ersten Stream vergehen oft nur wenige Minuten."
        />

        <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="glass relative h-full rounded-3xl p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
