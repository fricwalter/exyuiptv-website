export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;        // Pfad relativ zu /public, z.B. /images/blog/slug.jpg
  htmlContent?: string;  // Vollständiger HTML-Content (überschreibt das generische Template)
  seoKeywords?: string;  // Kommagetrennte Keywords für Meta-Tags
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'android-box-iptv-instalacija',
    title: 'Kako instalirati IPTV na Android Box - kompletni vodic',
    excerpt: 'Naucite kako brzo instalirati IPTV aplikaciju na Android TV Box, uz jasne korake od preuzimanja do prvog pokretanja.',
    content: 'U ovom vodicu pokazujemo kako instalirati IPTV aplikaciju na Android Box uredaj. Proces je jednostavan i traje svega nekoliko minuta.',
    date: '2026-01-15',
    category: 'Instalacija',
    readTime: '5 min',
    image: '/images/blog/android-box-iptv-instalacija.jpg'
  },
  {
    slug: 'fire-tv-stick-iptv-instalacija',
    title: 'Kako instalirati IPTV na Amazon Fire TV Stick - kompletni vodic',
    excerpt: 'Pratite jednostavne korake za instalaciju IPTV aplikacije na Fire TV Stick i postavljanje liste kanala bez komplikacija.',
    content: 'Amazon Fire TV Stick je medu najpopularnijim uredajima za streaming. U ovom vodicu objasnjavamo instalaciju i osnovno podesavanje IPTV-a.',
    date: '2026-01-10',
    category: 'Instalacija',
    readTime: '4 min',
    image: '/images/blog/fire-tv-stick-iptv-instalacija.jpg'
  },
  {
    slug: 'kako-instalirati-iptv-na-samsung-tv',
    title: 'Kako instalirati IPTV na Samsung TV - korak po korak',
    excerpt: 'Detaljan vodic za instalaciju IPTV aplikacija na Samsung Smart TV uredajima sa preporucenim postavkama za stabilan stream.',
    content: 'Samsung Smart TV uredaji podrzavaju vise IPTV aplikacija. U ovom clanku pokrivamo instalaciju i konfiguraciju najcesce koristenih rjesenja.',
    date: '2026-01-05',
    category: 'Instalacija',
    readTime: '6 min',
    image: '/images/blog/kako-instalirati-iptv-na-samsung-tv.jpg'
  },
  {
    slug: 'najbolji-iptv-box-2026',
    title: 'Najbolji IPTV Box u 2026 - kompletna usporedba',
    excerpt: 'Usporedujemo najpopularnije IPTV Box uredaje i pomazemo vam da odaberete model koji najbolje odgovara vasim navikama gledanja.',
    content: 'Ako trazite najbolji IPTV Box, usporedujemo kljucne opcije i njihove prednosti kako biste lakse donijeli odluku.',
    date: '2026-02-20',
    category: 'Uredaji',
    readTime: '8 min',
    image: '/images/blog/najbolji-iptv-box-2026.jpg'
  },
  {
    slug: 'sta-je-iptv-i-kako-radi',
    title: 'Sta je IPTV i kako radi - sve sto trebate znati',
    excerpt: 'Objasnjavamo sto je IPTV, kako funkcionira i koje su glavne prednosti u odnosu na tradicionalnu kabelsku televiziju.',
    content: 'IPTV je tehnologija prijenosa TV sadrzaja putem interneta. U clanku objasnjavamo osnove rada, prednosti i moguce izazove.',
    date: '2026-02-18',
    category: 'Vodic',
    readTime: '6 min',
    image: '/images/blog/sta-je-iptv-i-kako-radi.jpg'
  },
  {
    slug: 'iptv-vs-kabelska-televizija',
    title: 'IPTV vs kabelska televizija - sto je bolje',
    excerpt: 'Usporedba IPTV-a i kabelske TV kroz cijenu, fleksibilnost, kvalitetu slike i dostupnost sadrzaja za dijasporu.',
    content: 'U ovom tekstu usporedujemo IPTV i kabelsku televiziju kako biste odabrali opciju koja bolje odgovara vasem budzetu i potrebama.',
    date: '2026-02-15',
    category: 'Vodic',
    readTime: '7 min',
    image: '/images/blog/iptv-vs-kabelska-televizija.jpg'
  },
  {
    slug: 'kako-poboljsati-kvalitetu-iptv-streama',
    title: 'Kako poboljsati kvalitetu IPTV streama - 10 savjeta',
    excerpt: 'Prakticni savjeti za manje bufferiranja i stabilniji IPTV stream, od mreze i rutera do postavki aplikacije.',
    content: 'Ako imate problema sa zamrzavanjem slike, ovdje su provjereni koraci za poboljsanje kvalitete IPTV streama.',
    date: '2026-02-12',
    category: 'Savjeti',
    readTime: '5 min',
    image: '/images/blog/kako-poboljsati-kvalitetu-iptv-streama.jpg'
  },
  {
    slug: 'legalnost-iptv-u-njemackoj',
    title: 'Legalnost IPTV-a u Njemackoj, Austriji i Svicarskoj',
    excerpt: 'Pregled pravnog okvira IPTV-a u DACH regiji i kljucne informacije koje trebate znati prije odabira usluge.',
    content: 'Tema legalnosti IPTV-a je kompleksna. Ovdje sazimamo osnovne smjernice i razlike izmedu legalnih i rizicnih scenarija.',
    date: '2026-02-08',
    category: 'Pravno',
    readTime: '6 min',
    image: '/images/blog/legalnost-iptv-u-njemackoj.jpg'
  },
  {
    slug: 'najbolji-sportski-kanali-exyu-iptv',
    title: 'Najbolji sportski kanali na EXYU IPTV',
    excerpt: 'Popis najtrazenijih sportskih kanala na EXYU IPTV-u za nogomet, kosarku, borilacke sportove i jos mnogo toga.',
    content: 'EXYU IPTV nudi siroku ponudu sportskih kanala za regiju i dijasporu. U clanku izdvajamo najgledanije opcije.',
    date: '2026-02-05',
    category: 'Kanali',
    readTime: '4 min',
    image: '/images/blog/najbolji-sportski-kanali-exyu-iptv.jpg'
  },
  {
    slug: 'kako-gledati-exyu-kanale-u-inostranstvu',
    title: 'Kako gledati EXYU kanale u inostranstvu - dijaspora vodic',
    excerpt: 'Saznajte kako gledati EXYU kanale iz inostranstva uz stabilnu vezu, pravilnu aplikaciju i optimizirane IPTV postavke.',
    content: 'Ako zivite u inostranstvu i zelite gledati domace kanale, ovaj vodic pokriva najvaznije korake za brzo postavljanje.',
    date: '2026-02-01',
    category: 'Vodic',
    readTime: '5 min',
    image: '/images/blog/kako-gledati-exyu-kanale-u-inostranstvu.jpg'
  },

  // ===== NOVI SEO POSTOVI - Mart 2026 =====

  {
    slug: 'iptv-besplatno-testirati-24h',
    title: 'IPTV besplatno testirati 2026 - Kako dobiti 24h test nalog za EXYU kanale',
    excerpt: 'Zelite isprobati EXYU IPTV prije nego sto platite? Saznajte kako u 5 minuta dobiti besplatan 24-satni test nalog i sto provjeriti tokom probe.',
    content: 'Besplatan test nalog je najsigurniji nacin da se uvjerite u kvalitet usluge. EXYU IPTV nudi 24h probni pristup bez kreditne kartice.',
    date: '2026-03-01',
    category: 'Savjeti',
    readTime: '4 min',
    image: '/images/blog/iptv-besplatno-testirati-24h.jpg',
    seoKeywords: 'iptv kostenlos testen, iptv gratis testen, iptv 24 stunden test, exyu iptv probe, iptv testaccount, iptv free trial deutschland',
    htmlContent: `
      <p class="text-xl text-gray-200 font-medium border-l-4 border-blue-500 pl-4">
        Žeite isprobati EXYU IPTV prije nego što platite? U ovom vodiču objašnjavamo kako za 5 minuta dobiti besplatan 24-satni test nalog — bez kreditne kartice, bez obaveza.
      </p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4">Zašto je besplatan test važan?</h2>
      <p>Svaki IPTV servis zvuči odlično na papiru. Ali tek kada vidite sliku u punom HD-u ili 4K kvaliteti na vašem TV-u, možete stvarno procijeniti da li je usluga prava za vas. Kvalitetan IPTV provajder uvijek nudi probni period — ako toga nema, to je loš znak.</p>
      <p>Tokom 24-satnog testa provjerite ove ključne stvari:</p>
      <ul class="space-y-3 my-4">
        ${[
          '<strong>Stabilnost streama</strong> — Da li se slika zamrzava ili bufferuje? Testirajte u prime time (19–22h) kada je opterećenje mreže najveće.',
          '<strong>Broj kanala</strong> — Da li su dostupni svi kanali koji su vam važni: RTS, Pink, FTV, HRT, Nova TV, Arena Sport, Eurosport?',
          '<strong>4K i HD kvaliteta</strong> — Testirajte na najvećem TV-u koji imate.',
          '<strong>EPG (programski vodič)</strong> — Da li raspored programa radi ispravno?',
          '<strong>VOD (video na zahtjev)</strong> — Da li filmovi i serije učitavaju brzo?',
        ].map(item => `<li class="flex items-start gap-3"><span class="mt-1 w-5 h-5 flex-shrink-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center"><svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg></span><span>${item}</span></li>`).join('')}
      </ul>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4">Kako zatražiti besplatan test nalog?</h2>
      <p>Postupak je jednostavan i traje manje od 5 minuta:</p>
      <ol class="space-y-4 my-4 list-none">
        <li class="flex gap-4"><span class="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">1</span><div><strong class="text-white">Kontaktirajte nas</strong> — putem WhatsApp-a ili kontakt forme na ovoj stranici. Napišite koji uređaj koristite (Smart TV, Fire Stick, Android Box, telefon).</div></li>
        <li class="flex gap-4"><span class="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">2</span><div><strong class="text-white">Primite pristupne podatke</strong> — u roku od nekoliko minuta dobijete M3U link ili Xtream Codes (korisničko ime + lozinka + URL servera).</div></li>
        <li class="flex gap-4"><span class="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">3</span><div><strong class="text-white">Unesite podatke u aplikaciju</strong> — IPTV Smarters Pro, TiviMate ili drugu IPTV aplikaciju po vašem izboru.</div></li>
        <li class="flex gap-4"><span class="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">4</span><div><strong class="text-white">Uživajte 24 sata</strong> — testirajte sve što vam je važno. Bez stresa, bez obaveze.</div></li>
      </ol>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4">Šta je uključeno u test nalog?</h2>
      <p>Probni nalog je identičan punoj pretplati — ne dobijate ograničenu verziju:</p>
      <ul class="space-y-3 my-4">
        ${[
          '1.000+ EXYU kanala (BiH, Srbija, Hrvatska, Slovenija, Makedonija, Kosovo)',
          'Međunarodni kanali iz Njemačke, Austrije, Švicarske i ostatka Europe',
          'VOD biblioteka — filmovi i serije na zahtjev',
          'HD i 4K stream na podržanim kanalima',
          'EPG — elektronski programski vodič',
          'Podrška za Smart TV, Android Box, Fire TV Stick, iOS, Android, PC',
        ].map(item => `<li class="flex items-start gap-3"><span class="mt-1 w-5 h-5 flex-shrink-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center"><svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg></span><span>${item}</span></li>`).join('')}
      </ul>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4">Kolika je brzina interneta potrebna?</h2>
      <p>Za stabilan EXYU IPTV stream preporučujemo:</p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <div class="bg-stone-800 rounded-xl p-4 text-center border border-stone-700"><div class="text-2xl font-bold text-blue-400 mb-1">10 Mbps</div><div class="text-gray-400 text-sm">HD stream (720p/1080p)</div></div>
        <div class="bg-stone-800 rounded-xl p-4 text-center border border-stone-700"><div class="text-2xl font-bold text-purple-400 mb-1">25 Mbps</div><div class="text-gray-400 text-sm">Full HD stream (1080p)</div></div>
        <div class="bg-stone-800 rounded-xl p-4 text-center border border-stone-700"><div class="text-2xl font-bold text-amber-400 mb-1">50+ Mbps</div><div class="text-gray-400 text-sm">4K Ultra HD stream</div></div>
      </div>
      <p>Standardni DSL ili kabelski internet u Njemačkoj, Austriji i Švicarskoj je više nego dovoljan za HD streaming. Ako koristite WiFi, preporučujemo da tokom testa budete bliže routeru ili koristite LAN kabel.</p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4">Zaključak</h2>
      <p>Besplatan 24-satni test nalog je bez rizika — isprobajte EXYU IPTV na svom uređaju i uvjerite se sami. Bez kreditne kartice, bez automatskog obnavljanja, bez obaveza. Kontaktirajte nas danas i aktivirajte vaš test nalog.</p>
    `
  },

  {
    slug: 'tivimate-vs-iptv-smarters-pro-2026',
    title: 'TiviMate vs IPTV Smarters Pro 2026 - Koja aplikacija je bolja za EXYU IPTV?',
    excerpt: 'Usporedujemo dvije najpopularnije IPTV aplikacije za balkansku dijasporu: TiviMate i IPTV Smarters Pro. Koja je bolja za gledanje EXYU kanala na TV-u?',
    content: 'TiviMate i IPTV Smarters Pro su dvije najkorišćenije IPTV aplikacije. Svaka ima prednosti — izbor zavisi od uređaja i navika gledanja.',
    date: '2026-03-01',
    category: 'Savjeti',
    readTime: '6 min',
    image: '/images/blog/tivimate-vs-iptv-smarters-pro-2026.jpg',
    seoKeywords: 'tivimate einrichten, iptv smarters pro anleitung, beste iptv app balkan, tivimate exyu, iptv smarters konfigurieren, xciptv android',
    htmlContent: `
      <p class="text-xl text-gray-200 font-medium border-l-4 border-blue-500 pl-4">
        Nakon što dobijete EXYU IPTV nalog, slijedeći korak je odabir aplikacije. TiviMate i IPTV Smarters Pro dominiraju tržištem — ali koja je bolja za dijasporu koja prati balkanske kanale?
      </p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4">Kratki pregled obje aplikacije</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
        <div class="bg-stone-800 rounded-2xl p-5 border border-blue-700/40">
          <div class="text-blue-400 font-bold text-lg mb-3">📱 TiviMate</div>
          <ul class="space-y-2 text-sm text-gray-300">
            <li>✅ Najbolji UI za Android TV / Smart TV</li>
            <li>✅ Brzo prebacivanje kanala</li>
            <li>✅ Odličan EPG (programski vodič)</li>
            <li>✅ Multi-screen (plaćena verzija)</li>
            <li>⚠️ Samo za Android TV / Fire TV</li>
            <li>⚠️ Premium funkcije = plaćeno (~€5/god)</li>
          </ul>
        </div>
        <div class="bg-stone-800 rounded-2xl p-5 border border-purple-700/40">
          <div class="text-purple-400 font-bold text-lg mb-3">📱 IPTV Smarters Pro</div>
          <ul class="space-y-2 text-sm text-gray-300">
            <li>✅ Besplatna aplikacija</li>
            <li>✅ Radi na svim platformama (iOS, Android, Smart TV, PC)</li>
            <li>✅ Lako postavljanje (Xtream Codes)</li>
            <li>✅ Ugrađen video player</li>
            <li>⚠️ Sporiji UI od TiviMate-a</li>
            <li>⚠️ Reklame u besplatnoj verziji</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4">TiviMate: Postavljanje korak po korak</h2>
      <p>TiviMate je idealan za Samsung Smart TV, LG TV, Android Box ili Fire TV Stick:</p>
      <ol class="space-y-4 my-4 list-none">
        <li class="flex gap-4"><span class="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">1</span><div>Otvorite <strong class="text-white">Google Play Store</strong> (ili Amazon App Store za Fire TV) i potražite <em>TiviMate</em>. Instalirajte besplatnu verziju.</div></li>
        <li class="flex gap-4"><span class="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">2</span><div>Pokrenite TiviMate → odaberite <strong class="text-white">"Add Playlist"</strong> → zatim <strong class="text-white">"Xtream Codes API"</strong>.</div></li>
        <li class="flex gap-4"><span class="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">3</span><div>Unesite <strong class="text-white">URL servera, korisničko ime i lozinku</strong> koje ste dobili od EXYU IPTV. Kliknite "Add Playlist".</div></li>
        <li class="flex gap-4"><span class="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">4</span><div>Pričekajte da se lista kanala učita (30–60 sekundi). Gotovo! Svi EXYU kanali su dostupni u lijepom EPG sučelju.</div></li>
      </ol>
      <p><strong class="text-blue-300">Savjet:</strong> U postavkama TiviMate-a aktivirajte <em>"Auto update EPG"</em> svakodnevno u ponoć — tako uvijek imate ažuran programski raspored za sve kanale.</p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4">IPTV Smarters Pro: Postavljanje korak po korak</h2>
      <p>IPTV Smarters radi na svim uređajima — iOS, Android, Smart TV, Windows:</p>
      <ol class="space-y-4 my-4 list-none">
        <li class="flex gap-4"><span class="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">1</span><div>Preuzmite <strong class="text-white">IPTV Smarters Pro</strong> iz App Store-a, Google Play-a ili direktno s web stranice (za Smart TV).</div></li>
        <li class="flex gap-4"><span class="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">2</span><div>Na početnom ekranu odaberite <strong class="text-white">"Login with Xtream Codes API"</strong>.</div></li>
        <li class="flex gap-4"><span class="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">3</span><div>Unesite ime profila (npr. "EXYU IPTV"), server URL, korisničko ime i lozinku. Kliknite <strong class="text-white">"Add User"</strong>.</div></li>
        <li class="flex gap-4"><span class="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">4</span><div>Aplikacija se spaja i učitava sve kanale, VOD i serije. Kategorija <strong class="text-white">"Live TV"</strong> → <strong class="text-white">"EXYU"</strong> za balkanske kanale.</div></li>
      </ol>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4">Koja aplikacija je bolja — naša preporuka</h2>
      <div class="space-y-4 my-6">
        <div class="bg-blue-900/30 border border-blue-700/50 rounded-xl p-4"><strong class="text-blue-300">Koristite TiviMate ako:</strong> imate Android TV, Fire TV Stick ili Android Box i pratite TV na velikom ekranu. TiviMate ima daleko bolji EPG prikaz i osjećaj "prave televizije".</div>
        <div class="bg-purple-900/30 border border-purple-700/50 rounded-xl p-4"><strong class="text-purple-300">Koristite IPTV Smarters Pro ako:</strong> gledate na telefonu, tabletu ili iPhoneu, ili ako trebate koristiti istu aplikaciju na više različitih uređaja.</div>
        <div class="bg-amber-900/30 border border-amber-700/50 rounded-xl p-4"><strong class="text-amber-300">Bonus opcija — XCIPTV:</strong> Besplatna alternativa bez reklama, odlična brzina, preporučena za napredne korisnike koji žele čist interfejs.</div>
      </div>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4">Zaključak</h2>
      <p>Nema pogrešnog izbora — i TiviMate i IPTV Smarters Pro odlično rade s EXYU IPTV servisom. Preporučujemo TiviMate za TV gledanje i IPTV Smarters za mobilne uređaje. Uz naš 24-satni besplatni test možete isprobati obje aplikacije bez rizika.</p>
    `
  },

  {
    slug: 'iptv-osterreich-bosanski-srpski-kanali',
    title: 'IPTV Österreich 2026: Bosanski, srpski i hrvatski kanali za dijasporu u Beču i Grazu',
    excerpt: 'Živite u Austriji i tražite bosanske, srpske ili hrvatske TV kanale? Kompletni vodič za EXYU IPTV u Beču, Grazu, Linzu i Salzburgu — bez satelitske antene.',
    content: 'Austrijska dijaspora iz bivše Jugoslavije jedna je od najvećih u Europi. EXYU IPTV je najjednostavniji način da pratite domaće kanale bez skupih satelitskih paketa.',
    date: '2026-03-02',
    category: 'Dijaspora',
    readTime: '7 min',
    image: '/images/blog/iptv-osterreich-bosanski-srpski-kanali.jpg',
    seoKeywords: 'iptv österreich, iptv wien, bosanski kanali österreich, srpski kanali österreich, exyu iptv graz, balkanske kanäle austria, iptv österreich günstig',
    htmlContent: `
      <p class="text-xl text-gray-200 font-medium border-l-4 border-blue-500 pl-4">
        Austrija je dom jedne od najvećih ex-yu dijaspora u Europi — samo u Beču živi preko 300.000 ljudi porijeklom iz Bosne i Hercegovine, Srbije i Hrvatske. Ako ste jedan od njih i tražite način da pratite domaće kanale, EXYU IPTV je najjeftinija i najjednostavnija opcija u 2026.
      </p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4">Zašto IPTV, a ne satelitska antena?</h2>
      <p>Satelitska antena je dugo bila jedina opcija za balkanske kanale u Austriji. Danas to više nema smisla:</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div class="bg-stone-800 rounded-xl p-5 border border-stone-700">
          <div class="text-red-400 font-bold mb-3">📡 Satelitska antena</div>
          <ul class="space-y-2 text-sm text-gray-400">
            <li>❌ Skupo postavljanje (200–500€)</li>
            <li>❌ Dozvola stanodavca potrebna</li>
            <li>❌ Ne radi u stanovima/zgradama</li>
            <li>❌ Ograničen broj kanala</li>
            <li>❌ Bez VOD-a i filmova na zahtjev</li>
          </ul>
        </div>
        <div class="bg-stone-800 rounded-xl p-5 border border-blue-700/40">
          <div class="text-blue-400 font-bold mb-3">📺 EXYU IPTV</div>
          <ul class="space-y-2 text-sm text-gray-300">
            <li>✅ Od 15€/mjesec — bez instalacije</li>
            <li>✅ Radi u svakom stanu i kući</li>
            <li>✅ 1.000+ EXYU kanala + Europa</li>
            <li>✅ Filmovi i serije na zahtjev</li>
            <li>✅ Radi na Smart TV, telefonu, tabletu</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4">Koji kanali su dostupni za Austriju?</h2>
      <p>EXYU IPTV pokriva sve važne kanale koje pratite kod kuće:</p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <div class="bg-stone-800 rounded-xl p-4 border border-stone-700">
          <div class="text-amber-400 font-semibold mb-2">🇧🇦 BiH kanali</div>
          <ul class="text-sm text-gray-400 space-y-1"><li>FTV</li><li>OBN</li><li>Nova BH</li><li>Hayat TV</li><li>N1 BiH</li><li>Al Jazeera Balkans</li></ul>
        </div>
        <div class="bg-stone-800 rounded-xl p-4 border border-stone-700">
          <div class="text-blue-400 font-semibold mb-2">🇷🇸 Srpski kanali</div>
          <ul class="text-sm text-gray-400 space-y-1"><li>RTS 1 &amp; 2</li><li>Pink</li><li>Happy TV</li><li>TV Prva</li><li>N1 Srbija</li><li>Arena Sport</li></ul>
        </div>
        <div class="bg-stone-800 rounded-xl p-4 border border-stone-700">
          <div class="text-red-400 font-semibold mb-2">🇭🇷 Hrvatski kanali</div>
          <ul class="text-sm text-gray-400 space-y-1"><li>HRT 1 &amp; 2</li><li>RTL Hrvatska</li><li>Nova TV</li><li>Doma TV</li><li>N1 Hrvatska</li><li>CMC</li></ul>
        </div>
      </div>
      <p>Uz to dolaze i austrijski kanali (ORF 1, ORF 2, ATV, Puls 4), njemački (ARD, ZDF, RTL, Sat.1, ProSieben) i mnogi drugi europski programi.</p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4">Internet u Austriji — Da li je dovoljan za IPTV?</h2>
      <p>Austrija ima jednu od najrazvijenijih internet infrastruktura u Europi. Prosječna brzina kućnog interneta u Beču iznosi oko 120 Mbps — daleko više nego što je potrebno za 4K IPTV streaming. Čak i standardni A1 ili Magenta kablovskim internet (50 Mbps) savršeno radi za gledanje više kanala istovremeno na različitim uređajima.</p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4">Postavljanje u 3 koraka — od narudžbe do gledanja</h2>
      <ol class="space-y-4 my-4 list-none">
        <li class="flex gap-4"><span class="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">1</span><div><strong class="text-white">Odaberite paket</strong> — Naš osnovni paket počinje od 15€/mjesec i uključuje sve EXYU kanale plus europske programe. Plaćanje je jednostavno — možete platiti i PayPal-om.</div></li>
        <li class="flex gap-4"><span class="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">2</span><div><strong class="text-white">Primite pristupne podatke</strong> — Unutar par sati dobijete pristupne podatke na e-mail ili WhatsApp.</div></li>
        <li class="flex gap-4"><span class="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">3</span><div><strong class="text-white">Podesite na TV-u</strong> — Otvorite TiviMate ili IPTV Smarters, unesite podatke i odmah počnite gledati. Podešavanje traje 5 minuta.</div></li>
      </ol>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4">Koliko to košta? Usporedba sa satelitom</h2>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-sm border-collapse">
          <thead><tr class="bg-stone-700 text-gray-200"><th class="p-3 text-left rounded-tl-lg">Opcija</th><th class="p-3 text-center">Cijena/god</th><th class="p-3 text-center">Instalacija</th><th class="p-3 text-center rounded-tr-lg">Kanali</th></tr></thead>
          <tbody class="text-gray-300">
            <tr class="border-b border-stone-700 bg-stone-800/50"><td class="p-3">EXYU IPTV (12 mj.)</td><td class="p-3 text-center text-green-400 font-bold">84€/god</td><td class="p-3 text-center text-green-400">0€</td><td class="p-3 text-center">1.000+ EXYU + Europa</td></tr>
            <tr class="border-b border-stone-700"><td class="p-3">Satelitska antena + paket</td><td class="p-3 text-center text-red-400 font-bold">350–600€/god</td><td class="p-3 text-center text-red-400">200–500€</td><td class="p-3 text-center">~50–100 EXYU</td></tr>
            <tr class="border-b border-stone-700 bg-stone-800/50"><td class="p-3">A1 TV / Magenta (AT)</td><td class="p-3 text-center">240–360€/god</td><td class="p-3 text-center">0€</td><td class="p-3 text-center">Bez EXYU kanala</td></tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4">Zaključak za austrijsku dijasporu</h2>
      <p>Ako živite u Beču, Grazu, Linzu, Salzburgu ili bilo gdje drugdje u Austriji — EXYU IPTV je 2026. godine daleko najpametniji izbor za praćenje domaćih kanala. Nema antena, nema složene instalacije, nema skupih godišnjih ugovora. Testirajte besplatno 24 sata i uvjerite se sami.</p>
    `
  }
];
