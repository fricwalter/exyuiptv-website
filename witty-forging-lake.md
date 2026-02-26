# EXYU IPTV - Astro Rebuild Plan

## Kontext

Die bestehende Website https://exyuiptv.org ist ein IPTV-Service für die Ex-Jugoslawische Diaspora weltweit. Die aktuelle Website basiert auf Lovable und soll nun mit Astro neu aufgebaut werden, um:
- Ein modernes, professionelles Design zu erhalten
- Bessere SEO-Performance zu erzielen
- Eine Blog-Kategorie mit relevanten Inhalten zu integrieren
- Die Seite komplett auf Bosnisch (BS) zu überführen

---

## Wichtige Entscheidungen (vom Benutzer bestätigt)

✅ **Sprache:** Nur Bosnisch (komplett neue Texte)
✅ **Design:** Komplett neu - modernes, einzigartiges Design
✅ **Länderseiten:** Alle 18 Seiten werden behalten

---

## Analyse der bestehenden Website

### Aktuelle Seitenstruktur (27 Seiten)
**Hauptseiten:**
- `/` - Početna (Startseite)
- `/o-nama` - O nama (Über uns)
- `/tv-lista-kanala` - Lista kanala (Kanalliste)
- `/instalacija` - Instalacija (Installation)
- `/blog` - Blog
- `/kontakt` - Kontakt
- `/osnovni-paket` - Cijene (Preise)

**Länderspezifische Seiten (18):**
- `/exyu-iptv-deutschland`, `/exyuiptv-austrija`, `/ex-yu-iptv-oesterreich`, `/iptv-serbien-deutschland`, `/exyuiptv-svicarska`, `/exyuiptv-hrvatska`, `/exyuiptv-bosna`, `/exyuiptv-srbija`, `/exyuiptv-australija`, `/exyuiptv-belgija`, `/exyuiptv-crna-gora`, `/exyuiptv-kanada`, `/exyuiptv-makedonija`, `/exyuiptv-slovenija`, `/exyuiptv-spanija`, `/exyuiptv-svedska`, `/exyuiptv-usa`, `/exyuiptv-velika-britanija`

**Blog-Artikel (4):**
- `/blog/strong-leap-s3-vs-s3-pro`
- `/blog/smart-tv-vs-android-box`
- `/blog/bester-iptv-anbieter-2025`
- `/blog/iptv-ex-yu-dijaspora-2025`

**Rechtliche Seiten (4):**
- `/uslovi-koristenja` - Uslovi korištenja (AGB)
- `/politika-privatnosti` - Politika privatnosti (Datenschutz)
- `/politika-povrata-novca` - Politika povrata novca (Rückgaberichtlinie)
- `/politika-kolacica` - Politika kolačića (Cookie-Richtlinie)

### Technische Details
- **Farbschema:** Blau (#primary), Rot (Accent), Gold (Sekundär)
- **Dark/Light Mode:** Unterstützt via CSS-Variablen und localStorage
- **Responsive:** Ja
- **Kontakt:** +49 152 51741280
- **Social:** Facebook, Instagram

---

## Implementierungsplan

### Phase 1: Projekt-Setup
1. Neues Astro-Projekt erstellen
2. TypeScript konfigurieren
3. Tailwind CSS installieren (für modernes Styling)
4. MDX für Blog-Artikel konfigurieren

### Phase 2: Design-System erstellen (Komplett NEU)
**Neue moderne Farbpalette:**
- Primary: Modernes Blau (z.B. `#2563eb` bis `#1d4ed8`)
- Secondary: Dunkles Slate (`#1e293b`)
- Accent: Lebhaftes Rot oder Gold (neu interpretieren)
- Background: Reinweiß / Dunkles Navy
- Glassmorphismus-Effekte
- Subtile Animationen

**Design-Merkmale:**
- Modernes, professionelles IPTV-Design
- Klare Typografie mit guter Lesbarkeit
- Responsive Grid-Layouts
- Hero-Sektionen mit ansprechenden Grafiken
- Moderne Button-States und Hover-Effekte
- Dark Mode Support (modern interpretiert)

**Typography:**
- Moderne Sans-Serif Schrift (Inter oder Plus Jakarta Sans)
- Lesbare Überschriften mit angemessenen H1-H6 Stufen

**Komponenten:**
- Header mit Navigation
- Footer mit Links und Social Icons
- Hero-Sektion
- Preis-Karten
- Channel-Grid
- Kontaktformular
- Blog-Card Komponente

### Phase 3: Seiten-Struktur erstellen

Alle 27 bestehenden Seiten müssen als Astro-Seiten erstellt werden mit:
- **H1 Tags** auf jeder Seite (SEO)
- **Meta Descriptions** für jede Seite
- **Canonical URLs**
- **OG-Tags** für Social Media
- **JSON-LD Structured Data** (Organization Schema)

### Phase 4: Blog-Integration
**6 neue Blogposts erstellen (bosnisch):**

1. **"Kako odabrati najbolji IPTV paket za 2025"**
   - Vodič za odabir pravog paketa

2. **"IPTV za dijasporu: Gledajte balkansku televiziju bilo gdje u svijetu"**
   - Diaspora-fokussierter Artikel

3. **"Smart TV naspram Android Box - Šta je bolje za IPTV?"**
   - Gerätevergleich

4. **"Kompletan vodič za instalaciju IPTV-a na svim uređajima"**
   - Installationsanleitung für alle Geräte

5. **"Najbolji IPTV provajderi u 2025 - Naša preporuka"**
   - Provider-Vergleich

6. **"Šta je IPTV i kako funkcioniše?"**
   - Grundlagenartikel für Einsteiger

### Phase 5: SEO-Optimierung
- **Keine verwaisten URLs:** Alle 27 Seiten bleiben unter identischen URLs (1:1 Mapping)
- **H1 Tags:** Jede Seite erhält EINEN klaren H1-Tag (SEO Anforderung)
- **Meta Descriptions:** Eindeutige Beschreibung für jede Seite
- **Canonical URLs:** Vermeidung von Duplicate Content
- **OG-Tags:** Für Social Media Optimierung
- **JSON-LD:** Organization Schema für local SEO
- **Sitemap:** Automatische sitemap.xml Generierung
- **Robots.txt:** Konfiguration
- **Performance:** Bildoptimierung, Lazy Loading
- **Core Web Vitals:** Optimierung für bessere Rankings

### Phase 6: Deployment
- Empfohlen: Vercel, Netlify oder Cloudflare Pages
- CI/CD Pipeline einrichten

---

## Kritische Dateien und Komponenten

### Zu erstellende Dateien:
```
/src
  /components
    - Header.astro
    - Footer.astro
    - Hero.astro
    - PricingCard.astro
    - ChannelCard.astro
    - BlogCard.astro
    - ContactForm.astro
    - SEOHead.astro
  /layouts
    - BaseLayout.astro
    - BlogPostLayout.astro
  /pages
    - index.astro
    - o-nama.astro
    - tv-lista-kanala.astro
    - instalacija.astro
    - kontakt.astro
    - osnovni-paket.astro
    - /blog
      - index.astro
      - [slug].astro
      - /6-neue-blogposts
    /exyu-iptv-deutschland.astro
    - ... (alle 18 Länderseiten)
    /uslovi-koristenja.astro
    - ... (alle 4 rechtlichen Seiten)
  /content
    /blog
      - 6-md-files
  /styles
    - global.css
```

### Bestehende Assets übernehmen:
- Logo: `https://exyuiptv.org/lovable-uploads/e4a28940-4f1a-4d07-a036-28da9aab5cfe.png`
- Facebook: `https://facebook.com/exyuiptv`
- Instagram: `https://instagram.com/exyuiptv`

---

## Sprache: Nur Bosnisch

Alle Inhalte werden komplett **auf Bosnisch** geschrieben. Wichtige Übersetzungen:

| Deutsch | Bosnisch |
|---------|----------|
| Startseite | Početna |
| Über uns | O nama |
| Kanalliste | Lista kanala |
| Installation | Instalacija |
| Kontakt | Kontakt |
| Preise | Cijene |
| IPTV Preise & Pakete | IPTV cijene i paketi |
| Premium Balkan TV | Premium balkanska TV |
| HD & 4K | HD & 4K |
| Über 25.000 Kanäle | Preko 25.000 kanala |
| Jetzt kaufen | Kupi sada |
| Mehr erfahren | Saznaj više |
| 24/7 Support | Podrška 24/7 |
| Kostenloser Test | Besplatna proba |
| AGB | Uslovi korištenja |
| Datenschutz | Politika privatnosti |

---

## Verifizierung

Nach dem Rebuild:
1. **URL-Test:** Alle 27 alten URLs funktionieren (keine 404)
2. **H1-Test:** Jede Seite hat genau einen H1-Tag
3. **SEO-Audit:** Lighthouse SEO Score > 90
4. **Performance:** Lighthouse Performance > 90
5. **Sprachcheck:** Alle Texte auf Bosnisch (keine deutschen Texte)
6. **Responsive:** Funktioniert auf Mobile, Tablet, Desktop
7. **Blog:** 6 Blogposts vorhanden und aufrufbar
8. **Design:** Modernes, professionelles Erscheinungsbild

---

## Technische Empfehlungen

- **Framework:** Astro 5.x mit View Transitions
- **Styling:** Tailwind CSS
- **Content:** Astro Content Collections für Blog
- **SEO:** @astrojs/sitemap, @astrojs/seo
- **Deployment:** Vercel oder Netlify
- **Hosting:** Kostenlos für statische Seiten
