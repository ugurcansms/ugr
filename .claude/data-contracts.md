# Veri Kontratları (Mock → Backend)

Şu an tüm veri `src/lib/*` içinde statik. Backend entegre edilirken bu şemalar **birebir** API yanıtlarına dönüşecek. Aşağıdaki tipler "sözleşme"dir — UI bunlara bağlı.

## Marka — `src/lib/brand.ts`
```ts
type Brand = {
  name: string;          // tam ad
  shortName: string;     // logoda
  monogram: string;      // "U"
  tagline: string;         // "F-Gaz Emisyon" — yalnızca sabit veri, UI'da render edilmez (2026-09)
  phone: string;
  phoneHref: string;     // tel:+...
  email: string;
  emailHref: string;     // mailto:...
  address: string;
  workingHours: string;
}
```

## Hizmet kategorileri — `src/lib/services.ts`
```ts
type ServiceCategory = {
  id: string;                          // = [slug] (montaj-ve-kurulum|periyodik-bakim-ve-sistem-kontrolu|onarim-ve-teknik-servis|f-gaz-sizinti-kontrolu-ve-ekomvet)
  index: string;                       // "01"..
  title: string;
  summary: string;                     // anasayfa özet
  intro: string;                       // detay PageHero
  image: string;                       // detay görseli
  imageAlt: string;
  description: string[];               // 2-3 paragraf
  highlights: { title: string; desc: string }[]; // "Neler dahil"
  items: { title: string; desc: string }[];      // 3 alt hizmet
}
```
Helper: `getServiceCategory(slug)`.

## Blog — `src/lib/blog.ts`
```ts
type BlogPost = {
  slug: string;
  title: string;
  category: string;      // Bakım / F-Gaz / Montaj
  excerpt: string;
  date: string;          // görünen Türkçe
  publishedAt: string;   // ISO — sıralama anahtarı
  readingTime: string;   // "4 dk okuma"
  image: string;
  imageAlt: string;
  body: string[];        // paragraflar
}
```
Helpers: `getBlogPost(slug)`, `getRelatedPosts(slug, count)`, `getLatestPosts(count)` (publishedAt'e göre azalan).

## Navigasyon — `src/lib/nav.ts`
```ts
type NavLink = { href: string; label: string; children?: { href: string; label: string }[] }
```
`navLinks` (5 ana rota; hizmetler'de children), `serviceChildren` (mobil 3 alt).

## Diğer sabitler
- `processSteps` — 4 adım süreç.
- `stats` — 4 istatistik (15+, 1.240, %98, 7/24).
- Hakkımızda sayfası içindeki `values`, `certifications`, `missionVision`, `faqs` — **sayfa dosyasının içinde** (henüz `lib`'e taşınmadı; ihtiyaç doğarsa `lib`'e çıkar).

## Form `POST /iletisim` (gelecekteki backend beklentisi)
Form alanları: `adsoyad`, `telefon`, `email`, `hizmetTuru` (select: Montaj ve Kurulum / Periyodik Bakım ve Sistem Kontrolü / Onarım ve Teknik Servis / F-Gaz Sızıntı Kontrolü ve EKOMVET / F-Gaz Ölçüm / Diğer), `mesaj`. Şu an submit görsel (client); backend entegrasyonunda bu veri POST edilecek, başarı/hatalı durum ayrımı eklenebilir.
