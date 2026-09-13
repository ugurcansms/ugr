# Proje Yapısı

```
ugr/
├── CLAUDE.md                  # @AGENTS.md + bu docs dizinine yönlendirir
├── AGENTS.md                  # next dev tarafından yazılır (dokunma)
├── DESIGN.md                  # Steep tasarım sistemi (kaynak, düzenleme: ui-rules.md)
├── components.json            # shadcn yapılandırması (base-nova, lucide)
├── next.config.ts             # boş (değişiklik yok)
├── .env.example               # NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY şablonu — commit edilir
├── .env.local                 # gerçek key — git'e GİRMEZ (.gitignore: `.env*` + `!.env.example`)
├── tsconfig.json              # "@/*" → "./src/*" (typescript path alias)
├── public/images/             # 7 örnek görsel (gerçek ile değiştirilecek)
└── src/
    ├── app/
    │   ├── layout.tsx         # Root layout: fontlar, metadata, SiteNav + main + SiteFooter
    │   ├── globals.css        # @theme token'lar (Steep paleti) + animasyonlar
    │   ├── page.tsx           # Anasayfa bölüm sırası
    │   ├── favicon.ico
    │   ├── hakkimizda/page.tsx        # Hikaye + Misyon/Vizyon + Değerler + Sertifikalar + SSS + CtaBanner
    │   ├── hizmetler/page.tsx         # Hizmet genel bakış + CtaBanner
    │   ├── hizmetler/[slug]/page.tsx  # 4 kategori detayı (montaj-ve-kurulum/periyodik-bakim-ve-sistem-kontrolu/onarim-ve-teknik-servis/f-gaz-sizinti-kontrolu-ve-ekomvet) SSG + CtaBanner
    │   ├── blog/page.tsx              # Blog listesi (searchParams tabanlı sayfalama) + CtaBanner
    │   ├── blog/[slug]/page.tsx       # Makale + ilgili yazılar SSG + CtaBanner
    │   └── iletisim/page.tsx          # Form + iletişim bilgileri
    ├── components/
    │   ├── hero.tsx           # Anasayfa hero (odaklı başlık; yüzen artefakt kaldırıldı)
    │   ├── marquee-strip.tsx  # Anasayfa hero-altı kayan yazı şeridi (RSC, marquee)
    │   ├── about-summary.tsx  # Anasayfa Hakkımızda özeti (→ /hakkimizda)
    │   ├── services-summary.tsx # Anasayfa Hizmet özeti (kart→detay)
    │   ├── services.tsx       # Hizmet tam liste (detay sayfasında kullanılır)
    │   ├── fgas.tsx           # F-Gaz bölümü (metin + tek şeftali kartı solda, hesaplayıcı sağda)
    │   ├── fgas-calculator.tsx # Ton CO₂e hesaplayıcı (client, anlık — gönderim yok)
    │   ├── process.tsx        # 4 adım süreç
    │   ├── blog-section.tsx   # Anasayfa Güncel (son 3 yazı)
    │   ├── blog-card.tsx      # Yeniden kullanılabilir blog kartı
    │   ├── blog-pagination.tsx # Blog liste sayfalama (Önceki/Sonraki pill + Sayfa X/Y)
    │   ├── contact-form.tsx   # Servis formu — Web3Forms POST (client, honeypot + durum makinesi)
    │   ├── scroll-top-button.tsx # Sağ altta yüzen "sayfa başına dön" (client, tüm rotalar)
    │   ├── form-field.tsx     # El yazımı Input/Textarea/Select/Field
    │   ├── cta.tsx            # Anasayfa İletişim özeti (iki sütunlu, fotoğraflı)
    │   ├── cta-banner.tsx     # Ortalanmış CTA bandı (CtaBanner) — hakkimizda + blog/hizmetler/hizmet-detay; title/description prop; PageHero gibi soluk arka plan görseli (opacity-60)
    │   ├── wash.tsx           # Gradyan yıkaması (yedek/bekli ilkel — PageHero `background` prop'u veya istenirse) tek kaynak
    │   ├── page-hero.tsx      # Alt sayfa başlığı (SectionTag + H1 + intro + varsayılan görsel doku EKOFAR-2 opacity-60)
    │   ├── section-tag.tsx    # Ghost kategori etiketi
    │   ├── media-figure.tsx   # next/image sarmalayıcı (24px radius)
    │   ├── site-nav.tsx       # Sticky nav + services dropdown (client)
    │   ├── site-footer.tsx    # Footer (link sütunları)
    │   ├── whatsapp-icon.tsx  # Resmî WhatsApp logosu (el yazımı SVG, lucide'da brand ikonu yok)
    │   └── ui/                # shadcn base-nova bileşenleri
    └── lib/
        ├── brand.ts           # Marka sabitleri
        ├── nav.ts             # navLinks (+ hizmet children)
        ├── services.ts        # hizmet kategorileri + processSteps + getServiceCategory
        ├── blog.ts            # blogPosts + getBlogPost/getRelatedPosts/getLatestPosts
        ├── fgas.ts            # KIP tablosu (REFRIGERANTS) + CO₂e bantları + formül/ayrıştırma
        └── utils.ts           # cn() (clsx + tailwind-merge)
```
