# Güvenlik

## Durum
Bu bir server-rendered statik içerik sitesi. Şu an gerçek backend, form işleme, oturum, kullanıcı verisi deposu yok; bu yüzden geleneksel web uygulaması tehdit yüzeyi (SQLi, auth bypass, SSRF vb.) geçerli değil. Yine de aşağıdakiler güvenlik disiplinidir.

## Aktif konular
- **XSS / injection** — Tüm içerik statik TSX içinde, `dangerouslySetInnerHTML` **kullanılmadı**. `next/image` URL'leri sabit (kendi `public`). Kullanıcı girdisi render'a aktarılmıyor.
- **Form (mock)** — `contact-form.tsx` hiçbir şey göndermiyor (sadece `setSubmitted`). Hatta backend gelmezse güvenli. Backend entegrasyonunda: sunucu tarafı doğrulama + sanitizasyon şart, client `required` yeterli değil.
- **Bağımlılıklar** — önceki `npm audit` “0 vulnerabilities”. Bağımlılık kümesi küçük (Next, React, base-ui, shadcn, lucide, tailwind). Güncel tutulur.
- **Dış servisler** — Google Fonts (`next/font` self-host eder, external fetch yok) ve build sırasında registry (shadcn). **2026-09'dan beri çalışma zamanında bir dış çağrı var:** Vercel Analytics (`@vercel/analytics/next`, root `layout.tsx`'e monte) ziyaret verisini Vercel'e gönderir. Üçüncü taraf script; ilk parti değil.
- **Analytics / gizlilik** — Vercel Analytics çerez kullanmaz ve kişisel veri toplamaz (ürün iddiası), ancak yine de dışarıya giden bir veri akışıdır. KVKK/GDPR kapsamında çerez/consent banner'ı gerekirse Analytics kararı yeniden değerlendirilmeli. Panelde etkinleştirilmezse script çalışsa da veri toplanmaz.

## İşlem güvenliği (bu projede)
- `next dev` / `next start` localhost'ta çalışır; üretim deploy'da `next start` + HTTPS ters-proxy beklenir.
- `.env` dosyası yok; secret yok. Backend gelirse env'i repo'ya girme, `.gitignore`'a ekle.

## Deploy/servis notları (üretim için)
- Statik SSG çıktısı `.next/server/app/*.html` — CDN'de önbelleklenebilir.
- `Cache-Control` başlıkları `next.config.ts` ile eklenebilir (performans + içerik doğruluğu).
- HTTPS zorunlu (ters-proxy veya hosting platformu).

## Backend entegrasyonu = yeniden güvenlik değerlendirmesi
İletişim formu gerçek POST'a geçtiğinde / CMS eklendiğinde:
- Sunucu doğrulaması, rate-limit, spam koruması.
- İstemciye sızmayan tek kullanımlık token (CSRF).
- Yedek parça / görsel upload varsa MIME + boyut doğrulama.
Bu dosyayı o zaman güncelle.

## Yapılacaklar
- [ ] `robots.txt`, `sitemap.xml` ekle (SEO + tarama kontrolü).
- [ ] Backend gelince form endpoint güvenlik kontrolü listesi ekle.
