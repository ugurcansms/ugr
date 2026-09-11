# Performans

## Ölçüm / gözlem durumu
Şu an sistemli bir performans benchmark'ı yok (Lighthouse / WebPageTest çalıştırılmadı). True sorunlar bilinmiyor — aşağıdakiler yapı ve gözlemlere dayalı olası riskler.

## Yapısal olarak iyi olanlar
- **Tüm sayfalar statik / SSG.** Anasayfa ve 4 detay sayfası build'de üretilir; çalışma zamanında render yok. Dinamik yok → yüksek TTFB potansiyeli.
- **Görseller `next/image`** — `fill`+`sizes`, lazy (default), otomatik WebP/AVIF, doğru boyutlandırma. Hero `priority` (LCP).
- **Fontlar `next/font/google`** — self-hosted (Google'a giden yok), `display:swap`, değişken font, `preload` otomatik. `font-[430]` gibi yarı-adım ağırlıklar değişken fonttan gelir (ekstra dosya yüklemez).
- **Küçük client JS** — yalnız `site-nav`, `contact-form`, `cta`, `hero` client. Geri kalan Server. Client sınırı az.
- **Turbopack** build; Tailwind v4 (CSS küçük, üretilmeyen utility paketlenmez).

## Risk / izlenecek alanlar
1. **`next/image` `sizes`** — doğru değilse görseller aşırı büyür. `MediaFigure` 46vw / blog kartı 33vw; blog detay `760px`. Kontrol et.
2. **Client parlama** — `site-nav` scroll state → sticky header'da küçük geçiş. Kabul edilebilir.
3. **Çok sayıda yüzen artefakt** (hero'da 4) + giriş animasyonları — düşük captan telefonlarda `prefers-reduced-motion` kontrolü zaten var.
4. **Görsel boyutları** — `public/images` bazıları 1920×1080 / 1599×1066. `next/image` kırpıyor ama kaynak büyükse transform maliyeti + indirme. Gerçek görseller eklenirken boyut/optimizasyon düşün.

## İyileştirme mekanizmaları (hazır ama tetiklenmedi)
- **`next/image` config** — `next.config.ts` boş; gerekirse `images.remotePatterns`, `formats`, `deviceSizes`, `qualities` ayarlanabilir.
- **Cache** — statik sayfalar CDN'ce önbelleklenebilir. `next.config.ts` headers başlıkları (Cache-Control) eklenebilir.
- **Bundle analizi** — `npx @next/bundle-analyzer` (kurulu değil) ile client tarafı görselleştirilebilir.

## Mevcut ölçüm komutu (görsel doğrulama)
```bash
# production build + start sonrası
curl -s -o /dev/null -w "%{http_code} %{time_total}s\n" http://localhost:3000/
```
## Yapılacaklar (performans odaklı)
- [ ] Lighthouse / WebPageTest koş, LCP + CLS + bundle rakamlarını buraya kaydet.
- [ ] Gerçek görseller geldiğinde boyut/yükseklik genişlik (width/height) belirt.
- [ ] `og:image`/OG meta eklendiğinde indirme boyutu kontrol.
