# kaufen-iptv.store auf Vercel veröffentlichen (mit kostenlosem SSL)

Vercel ist der ideale Host für Next.js: **kostenloses, automatisches HTTPS/SSL**,
globales CDN und volle Next.js-Features. Du brauchst Namecheaps SSL **nicht** –
Vercel kümmert sich um das Zertifikat.

Die Domain bleibt bei Namecheap registriert. Du zeigst sie nur auf Vercel.

---

## Teil A – Projekt auf Vercel bringen

### Weg 1: Über GitHub (empfohlen, einfachste Variante)

1. Erstelle ein kostenloses Konto auf **https://github.com** (falls noch nicht vorhanden).
2. Neues Repository anlegen (z. B. `kaufen-iptv`), **privat** ist in Ordnung.
3. Lade den Inhalt dieses Projekts hoch:
   - Auf github.com im leeren Repo auf **„uploading an existing file"** klicken.
   - Den **entpackten** Projektordner (alle Dateien/Ordner: `app`, `components`,
     `config`, `data`, `lib`, `public`, `package.json`, `next.config.mjs` usw.)
     per Drag & Drop hochladen. **Nicht** `node_modules` mit hochladen.
   - „Commit changes" klicken.
4. Gehe zu **https://vercel.com** → mit GitHub anmelden.
5. **„Add New… → Project"** → dein Repo `kaufen-iptv` auswählen → **Import**.
6. Vercel erkennt Next.js automatisch. Einfach auf **Deploy** klicken.
7. Nach ~1 Minute ist die Seite live unter einer `*.vercel.app`-Adresse.

### Weg 2: Über die Vercel CLI (ohne GitHub)

```bash
npm i -g vercel
cd kaufen-iptv        # entpackter Projektordner
vercel                # einmal anmelden & Fragen mit Enter bestätigen
vercel --prod         # Produktions-Deployment
```

---

## Teil B – TMDB-Key setzen (für die Film-Poster)

Der Key ist bereits im Projekt hinterlegt. Optional kannst du ihn in Vercel als
Umgebungsvariable setzen (sicherer):

Vercel → dein Projekt → **Settings → Environment Variables**:
- Name: `TMDB_API_KEY`
- Value: `eb88f8554c5c594b1b82a59672ee98f4`
Danach einmal **Redeploy**.

---

## Teil C – Eigene Domain kaufen-iptv.store verbinden

1. Vercel → dein Projekt → **Settings → Domains** → `kaufen-iptv.store` eingeben → **Add**.
2. Vercel zeigt dir die nötigen DNS-Einträge. In der Regel:
   - **A-Record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`
   (Verwende immer die Werte, die Vercel dir konkret anzeigt.)
3. Trage diese Einträge bei Namecheap ein:
   - Namecheap → **Domain List** → bei `kaufen-iptv.store` auf **Manage**
   - Reiter **Advanced DNS** → unter **Host Records** die obigen Einträge hinzufügen
     (bestehende „Parking"/URL-Redirect-Einträge vorher löschen).
4. Zurück in Vercel wird die Domain nach einigen Minuten als **Valid** angezeigt.
   Das **SSL-Zertifikat wird automatisch und kostenlos** ausgestellt – fertig.

> Hinweis: DNS-Änderungen brauchen manchmal bis zu ein paar Stunden, meist aber nur Minuten.

---

## Häufige Fragen

**Brauche ich Namecheap-Hosting noch?**
Nein. Für die Website reicht Vercel. Namecheap behältst du nur als **Domain-Registrar**.

**Muss ich bei jeder Änderung neu hochladen?**
Bei GitHub: Datei im Repo ändern → Vercel deployt automatisch neu.
Bei CLI: `vercel --prod` erneut ausführen.

**Kostet Vercel etwas?**
Für ein Projekt dieser Art genügt der kostenlose **Hobby**-Plan.
