# Mimari

## Rotalar (App Router)
| Rota | Tür | Açıklama |
|------|-----|----------|
| `/` | statik | Anasayfa: Hero → Kayan şerit → Hakkımızda Özet → Hizmet Özet → F-Gaz → Süreç → Güncel (Blog) → CTA |
| `/hakkimizda` | statik | Kurumsal Kimlik, Misyon/Vizyon, Değerler, Sertifikalar, SSS, CTA |
| `/hizmetler` | statik | Hizmet genel bakış (4 kategori kartı tam liste) |
| `/hizmetler/[slug]` | **SSG** | 4 kategori detayı — slug: `montaj-ve-kurulum`, `periyodik-bakim-ve-sistem-kontrolu`, `onarim-ve-teknik-servis`, `f-gaz-sizinti-kontrolu-ve-ekomvet` |
| `/blog` | statik | 9 yazının listesi |
| `/blog/[slug]` | **SSG** | Makale + ilgili yazılar — 9 slug |
| `/iletisim` | statik | Mock form + iletişim bilgileri |

SSG rotaları `generateStaticParams` + `dynamicParams = false` + `notFound()` kullanır. Blog ve hizmet `[slug]` kalıpları birebir aynı; `params` **Promise** (await edilir).

## Katmanlar

**Layout katmanı** — `src/app/layout.tsx`: tüm sayfaları saran iskelet. Fontlar (Inter→Sohne, Source Serif 4→Signifier), `metadata` (title.default + title.template), `SiteNav` + `<main className="flex-1">` + `SiteFooter`.

**Sayfa katmanı** — `src/app/*/page.tsx`: Server Component. Tip/SSG üretimi, `generateMetadata`. Genellikle `PageHero` + bölüm bileşenlerini düzer.

**Bölüm bileşenleri** — `src/components/*`: büyük ölçüde Server (istisnalar `"use client"`). `CtaBanner` (`cta-banner.tsx`) ortak, ortalanmış CTA bandıdır (`title`/`description` prop) — hakkimizda + blog/hizmetler/hizmet-detay uçlarında paylaşılır; ana sayfa `Cta` (iki sütun, fotoğraflı) ayrıdır. CtaBanner, PageHero gibi soluk bir arka plan görseli kullanır (`EKOFAR-2.webp`, `opacity-60` + `fog-white` gradyan örtü) — bkz. "Animasyon & görsel". `Wash` artık yedek/bekli bir ilkel: PageHero varsayılanı ve CtaBanner görsel arka planı kullanır (PageHero `background` prop'u ile yine enjekte edilebilir).

**UI primitifleri** — `src/components/ui/*`: shadcn base-nova. Tasarım token'ları `globals.css` @theme'den.

**Veri katmanı** — `src/lib/*`: marka, nav, hizmet, blog, utils. Statik sabitler (mock). Backend entegrasyonu bu katmanı besleyecek.

## Veri akışı
- Tüm sayfalar Server Component olduğundan veri doğrudan `import` edilir (API yok, client fetch yok).
- Yalnızca `site-nav` (scroll + dropdown + sheet), `contact-form` (mock submit), `cta` / `hero` içindeki interaktif parçalar client. Bunlar `"use client"` ile ayrılmıştır.
- `cn()` (`lib/utils.ts`) sınıf birleştirme için her yerde kullanılır.

## Animasyon & görsel
- Giriş animasyonları `globals.css`'teki `rise`/`fade` keyframe'leri («animate-rise» / «animate-fade»), `prefers-reduced-motion`'da kapanır.
- Görseller `MediaFigure` (yuvarlatılmış, hairline ring) veya içerik kartlarında `next/image` `fill` + `sizes`.

## Bağımlılık notları
- `@base-ui/react@^1.7.0` — shadcn primitifleri bunun üstüne kurulu.
- `lucide-react` ikonlar; `tw-animate-css` + `shadcn/tailwind.css` Tailwind v4'te import edilir.
- `playwright` devDependency — ekran görüntüsü / doğrulama script'leri için (tarayıcı: /usr/local/bin/google-chrome).
