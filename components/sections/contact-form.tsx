"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { buildWhatsAppLink } from "@/config/site.config";

export function ContactForm() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("Allgemeine Frage");
  const [message, setMessage] = useState("");

  const composed = `Hallo, mein Name ist ${name || "[Name]"}.\nThema: ${topic}\n\n${message}`;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open(buildWhatsAppLink(composed), "_blank", "noopener,noreferrer");
      }}
      className="glass rounded-3xl p-7 md:p-8"
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Dein Name"
            className="w-full rounded-xl border border-white/10 bg-charcoal-900/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30"
          />
        </div>

        <div>
          <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-slate-300">
            Thema
          </label>
          <select
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-charcoal-900/60 px-4 py-3 text-white focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30"
          >
            <option>Allgemeine Frage</option>
            <option>IPTV kaufen / Bestellung</option>
            <option>Hilfe bei der Installation</option>
            <option>Technisches Problem</option>
            <option>Verlängerung / Upgrade</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
            Nachricht
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Wie können wir dir helfen?"
            className="w-full resize-none rounded-xl border border-white/10 bg-charcoal-900/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30"
          />
        </div>

        <button type="submit" className="btn-emerald w-full">
          <Send className="h-4 w-4" /> Über WhatsApp senden
        </button>
        <p className="text-center text-xs text-slate-500">
          Mit dem Absenden öffnet sich WhatsApp mit deiner vorausgefüllten Nachricht.
        </p>
      </div>
    </form>
  );
}
