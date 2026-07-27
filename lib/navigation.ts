/** Zentrale Navigations- & Link-Struktur. */

export const mainNav = [
  { label: "Start", href: "/" },
  { label: "IPTV kaufen", href: "/iptv-kaufen" },
  { label: "Preise", href: "/preise" },
  { label: "Installation", href: "/installation" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerNav = {
  produkt: {
    title: "Produkt",
    links: [
      { label: "IPTV kaufen", href: "/iptv-kaufen" },
      { label: "Preise & Pakete", href: "/preise" },
      { label: "IPTV Box kaufen", href: "/iptv-box-kaufen" },
      { label: "IPTV Line kaufen", href: "/iptv-line-kaufen" },
      { label: "IPTV m3u deutsch", href: "/iptv-m3u-deutsch" },
    ],
  },
  anbieter: {
    title: "Informationen",
    links: [
      { label: "Beste IPTV Anbieter", href: "/beste-iptv-anbieter" },
      { label: "IP TV Anbieter", href: "/iptv-anbieter" },
      { label: "Installationsanleitung", href: "/installation" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  unternehmen: {
    title: "Unternehmen",
    links: [
      { label: "Kontakt", href: "/kontakt" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
    ],
  },
};
