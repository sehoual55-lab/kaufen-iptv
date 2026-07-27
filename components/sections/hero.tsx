"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Star, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/config/site.config";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-[360px] w-[360px] rounded-full bg-emerald/10 blur-[120px]" />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <span className="eyebrow">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" />
              {siteConfig.trust.rating} / 5 · {siteConfig.trust.reviewCount.toLocaleString("de-DE")} Bewertungen
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white text-balance sm:text-6xl md:text-7xl"
          >
            IPTV kaufen –{" "}
            <span className="text-gold-gradient">Premium Streaming</span> für Deutschland
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            130.000+ TV-Kanäle und 140.000+ Filme &amp; Serien in echtem 4K.
            Sofortige Lieferung, 100 % stabile Server und deutscher 24/7-Support –
            der beste IPTV Anbieter für dein Zuhause.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link href="/preise" className="btn-premium w-full text-base sm:w-auto">
              Jetzt IPTV kaufen <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full text-base sm:w-auto"
            >
              <Play className="h-4 w-4 fill-current" /> Kostenlos beraten lassen
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400"
          >
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-gold" /> Sofortige Lieferung
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald" /> Sichere Bestellung
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 text-gold" /> Kompatibel mit allen Geräten
            </span>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="glass mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-3xl md:grid-cols-4"
        >
          {siteConfig.heroStats.map((s) => (
            <div key={s.label} className="bg-charcoal-800/30 px-6 py-7 text-center">
              <div className="font-display text-2xl font-bold text-white md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-slate-400 md:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
