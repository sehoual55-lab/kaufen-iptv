import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { buildWhatsAppLink } from "@/config/site.config";

export function Cta() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="glass-strong glow-border relative overflow-hidden rounded-4xl px-6 py-14 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-gold/15 blur-[100px]" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl md:text-5xl">
                Bereit, dein <span className="text-gold-gradient">IPTV zu kaufen</span>?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">
                Starte noch heute mit Premium-Streaming in 4K. Sofortige Lieferung,
                stabile Server und 24/7 Support – zufriedene Kunden in ganz Deutschland.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/preise" className="btn-premium w-full text-base sm:w-auto">
                  Paket auswählen <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-emerald w-full text-base sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" /> Jetzt beraten lassen
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
