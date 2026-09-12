# Proje Özeti

## Ne
Bir klima bakım, onarım ve F-Gaz ölçüm firması için modern, çok sayfalı kurumsal web sitesi. Next.js 16 (App Router) + Tailwind CSS v4 + shadcn UI (base-nova / Base UI).

## Marka
- **Tam ad:** UGR Ölçüm ve İklimlendirme
- **Kısa ad / logoda:** UGR Ölçüm ve İklimlendirme  ·  **Monogram:** "U"
- **Tagline:** F-Gaz Emisyon (yalnızca `brand.ts` veri sabiti; nav/footer altında artık render edilmez — 2026-09) · **Footer açıklama:** klima montaj/bakım/onarım + F-Gaz ölçüm + 7/24 acil destek
- **İletişim:** 0546 906 85 70 · info@ugriklimlendirme.com · Atatürk Mahallesi, Darılmaz Sokak No: 14-16B, Sancaktepe/İstanbul (2026-09'da placeholder'dan gerçek değerlere geçildi)

Tek düzenleme noktası: `src/lib/brand.ts`. Marka adı/yöntemi değişirse yalnızca bu dosya değişir.

## Tasarım dili
Kök `DESIGN.md` "Steep" — editoryal serif başlıklar, neredeyse tek renkli beyaz kanvas, tek vurgu şeftali `#fbe1d1` (+ onun üzerinde sienna `#5d2a1a`), pill butonlar, 24px kartlar, yüzen gölgeli artefaktlar. Ayrıntı: [ui-rules.md](ui-rules.md).

## Hedef kullanıcı / amaç
Bireysel konutlar + kurumsal (otel, ofis). Amaç: güven vermek ("belgeli, ölçüme dayalı, 7/24") ve servis talebi / F-Gaz belgelendirme dönüşümü sağlamak.

## Mevcut durum
- **Kendi backend'imiz yok.** İçerik verisi statik (blog, hizmetler, SSS). İletişim formu **gerçekten gönderiyor** ama bizim sunucumuzdan geçmiyor: tarayıcı → Web3Forms (2026-09). Şemalar: [data-contracts.md](data-contracts.md).
- Tasarım tamamlandı ve onaylandı; 16 sayfa statik/SSG üretiliyor.

## Çalıştırma
```bash
npm run dev      # geliştirme
npm run build    # prod build
npm run start    # prod sunucu
npm run lint     # eslint
```
