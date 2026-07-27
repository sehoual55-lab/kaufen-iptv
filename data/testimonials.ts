/**
 * Kundenbewertungen — frei editierbar.
 * Avatare nutzen pravatar.cc (Platzhalter). Ersetze `avatar` durch eigene
 * Bilder in /public/avatars, z. B. "/avatars/lukas.jpg".
 */

export type Testimonial = {
  name: string;
  city: string;
  avatar: string;
  rating: number;
  text: string;
  plan: string;
  verified: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Lukas Brandt",
    city: "München",
    avatar: "https://i.pravatar.cc/160?img=12",
    rating: 5,
    plan: "Gold Paket",
    verified: true,
    text: "Ich habe schon mehrere IPTV Anbieter getestet, aber die Stabilität hier ist eine andere Liga. Bundesliga in 4K ohne Ruckeln, sofortige Aktivierung nach der Bestellung. Absolut empfehlenswert.",
  },
  {
    name: "Sophie Wagner",
    city: "Hamburg",
    avatar: "https://i.pravatar.cc/160?img=45",
    rating: 5,
    plan: "Exclusive Paket",
    verified: true,
    text: "Der Support über WhatsApp hat mir bei der Einrichtung auf meinem Fire TV Stick innerhalb von fünf Minuten geholfen. Die Auswahl an Serien und Filmen ist riesig – wir haben Netflix komplett ersetzt.",
  },
  {
    name: "Jonas Keller",
    city: "Berlin",
    avatar: "https://i.pravatar.cc/160?img=33",
    rating: 5,
    plan: "Platinum Paket",
    verified: true,
    text: "Endlich ein Anbieter, bei dem die Kanäle wirklich in HD und 4K laufen. Das TV-Programm (EPG) funktioniert einwandfrei. Für den Preis für 15 Monate unschlagbar.",
  },
  {
    name: "Marie Hoffmann",
    city: "Köln",
    avatar: "https://i.pravatar.cc/160?img=47",
    rating: 5,
    plan: "Gold Paket",
    verified: true,
    text: "Ich war anfangs skeptisch, ob IPTV kaufen seriös ist. Aber die Lieferung kam sofort per Mail und läuft seit Monaten stabil. Kein Vergleich zu den billigen Anbietern, die ich vorher hatte.",
  },
  {
    name: "Felix Schröder",
    city: "Frankfurt am Main",
    avatar: "https://i.pravatar.cc/160?img=15",
    rating: 5,
    plan: "Exclusive Paket",
    verified: true,
    text: "130.000 Kanäle klingt übertrieben, aber es stimmt tatsächlich. Sport, internationale Sender, alle Streaming-Inhalte an einem Ort. Die Einrichtung auf meinem Samsung Smart TV war kinderleicht.",
  },
  {
    name: "Laura Fischer",
    city: "Stuttgart",
    avatar: "https://i.pravatar.cc/160?img=44",
    rating: 5,
    plan: "Bronze Paket",
    verified: true,
    text: "Für den Einstieg habe ich das 12-Monats-Paket genommen und bin begeistert. Die Qualität ist top, keine Aussetzer beim Champions-League-Abend. Werde definitiv verlängern.",
  },
  {
    name: "David Neumann",
    city: "Düsseldorf",
    avatar: "https://i.pravatar.cc/160?img=51",
    rating: 5,
    plan: "Platinum Paket",
    verified: true,
    text: "Schneller Support, faire Preise und eine riesige Senderliste. Ich schaue viel türkisches und arabisches Fernsehen – alles dabei und in super Qualität. Klare Empfehlung.",
  },
  {
    name: "Anna Richter",
    city: "Leipzig",
    avatar: "https://i.pravatar.cc/160?img=32",
    rating: 5,
    plan: "Gold Paket",
    verified: true,
    text: "Die m3u-Liste hat sofort mit meiner IPTV-App funktioniert. Alles fluffig, keine Buffering-Probleme am Abend. Der beste IPTV Anbieter, den ich bisher hatte.",
  },
];
