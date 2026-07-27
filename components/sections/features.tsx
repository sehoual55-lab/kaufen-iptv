import {
  Tv2, Film, Zap, ShieldCheck, Headphones, Smartphone, Trophy, Globe, MonitorPlay,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const features = [
  {
    icon: Tv2,
    title: "130.000+ IPTV-Kanäle",
    text: "Live-TV aus aller Welt: Sport, Nachrichten, Kinder-, Doku- und internationale Sender in einer App.",
  },
  {
    icon: Film,
    title: "140.000+ Filme & Serien",
    text: "Riesige VOD-Bibliothek mit Inhalten von Netflix, Prime Video, Disney+ und mehr – immer aktuell.",
  },
  {
    icon: MonitorPlay,
    title: "Echtes 4K / FHD / HD",
    text: "Gestochen scharfe Bildqualität ohne Buffering – dank leistungsstarker Server und Anti-Freeze-Technologie.",
  },
  {
    icon: Zap,
    title: "Sofortige Lieferung",
    text: "Nach dem IPTV kaufen erhältst du deine Zugangsdaten und den m3u-Link innerhalb weniger Minuten.",
  },
  {
    icon: ShieldCheck,
    title: "100 % stabile Server",
    text: "99,9 % Verfügbarkeit und redundante Infrastruktur – auch zur Primetime und bei Live-Sport.",
  },
  {
    icon: Headphones,
    title: "24/7 deutscher Support",
    text: "Unser Team hilft dir rund um die Uhr per WhatsApp – bei Einrichtung, Fragen und mehr.",
  },
  {
    icon: Smartphone,
    title: "Alle Geräte kompatibel",
    text: "Smart TV, Fire TV Stick, Android-Box, MAG, Smartphone, Tablet und PC – überall einsatzbereit.",
  },
  {
    icon: Trophy,
    title: "Live-Sport in 4K",
    text: "Bundesliga, Champions League, Formel 1 und US-Sport – kein Spiel mehr verpassen.",
  },
  {
    icon: Globe,
    title: "iptv m3u deutsch",
    text: "Deutsche Senderliste mit EPG, plus Xtream-Codes für jede gängige IPTV-App.",
  },
];

export function Features() {
  return (
    <section className="section relative">
      <div className="container">
        <SectionHeading
          eyebrow="Warum Kaufen IPTV"
          title={
            <>
              Der <span className="text-gold-gradient">beste IPTV Anbieter</span> für Deutschland
            </>
          }
          subtitle="Premium-Qualität, faire Preise und ein Service, der begeistert. Das erwartet dich, wenn du bei uns IPTV kaufst."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="glass group h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
