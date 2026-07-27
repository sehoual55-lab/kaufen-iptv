import Link from "next/link";
import { Play, MessageCircle, ShieldCheck, Zap, Headphones } from "lucide-react";
import { footerNav } from "@/lib/navigation";
import { siteConfig, buildWhatsAppLink } from "@/config/site.config";

export function Footer() {
  const year = 2026;

  return (
    <footer className="relative mt-20 border-t border-white/[0.06] bg-charcoal-900/60">
      <div className="container py-16">
        {/* Trust badges */}
        <div className="mb-14 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Zap, title: "Sofortige Lieferung", text: "Zugang in wenigen Minuten" },
            { icon: ShieldCheck, title: "100 % stabile Server", text: "99,9 % Verfügbarkeit" },
            { icon: Headphones, title: "24/7 Support", text: "Deutschsprachig per WhatsApp" },
          ].map((b) => (
            <div key={b.title} className="glass flex items-center gap-4 rounded-2xl p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <b.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-white">{b.title}</p>
                <p className="text-sm text-slate-400">{b.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold-gradient">
                <Play className="h-5 w-5 translate-x-[1.5px] text-charcoal-950" fill="currentColor" strokeLinejoin="round" />
              </span>
              <span className="font-display text-xl font-bold text-white">
                Kaufen<span className="ml-1.5 text-gold-gradient">IPTV</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Deutschlands Premium-Anbieter, wenn Sie <strong className="text-slate-300">IPTV kaufen</strong> möchten:
              130.000+ Kanäle, 140.000+ Filme &amp; Serien in 4K, stabile Server und deutschsprachiger 24/7-Support.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald/10 px-4 py-2 font-medium text-emerald transition hover:bg-emerald/20"
              >
                <MessageCircle className="h-4 w-4" /> Support über WhatsApp
              </a>
              <p className="text-slate-500">Erreichbar 24/7 · Antwort in Minuten</p>
            </div>
          </div>

          {Object.values(footerNav).map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-slate-400 transition-colors hover:text-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-sm text-slate-500 md:flex-row">
          <p>
            © {year} {siteConfig.brand.legalName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link href="/datenschutz" className="hover:text-slate-300">Datenschutz</Link>
            <Link href="/agb" className="hover:text-slate-300">AGB</Link>
            <Link href="/kontakt" className="hover:text-slate-300">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
