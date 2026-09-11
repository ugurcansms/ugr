# Bilinen Sınırlamalar

## Veri (planlı)
- **Backend yok.** Tüm içerik statik mock (`src/lib/*` + sayfa içi sabitler). Form submit görsel, gerçek POST/API yok.
- **Görseller placeholder** — `public/images/` içindeki 7 görsel örnek/stock. Gerçek firma fotoğrafı, teknisyen, marka logolu görsel yok.
- **Hakkımızda metinleri kurgu** — hikâye, değerler, sertifikalar örnek. Müşteri onayı sonrası düzenlenmeli.

## İşlevsel / UI
- **F-Gaz/EKOMVET hizmet sayfası var** → `/hizmetler/f-gaz-sizinti-kontrolu-ve-ekomvet` (index 04). Eski not: yoktu, footer "F-Gaz Ölçüm" → bakim idi; 2026-09'da kategori eklendi. `hizmetTuru`'nda hem "F-Gaz Sızıntı Kontrolü ve EKOMVET" hem "F-Gaz Ölçüm" seçenekleri durur.
- **Form validation** — yalnızca native `required`. E-posta formatı, telefon doğrulama, hata mesajları yok. CSRF/rate-limit yok (backend'le gelecek).
- **Mobil çok geniş dropdown yok** — `Sheet` içinde düz liste (desktop dropdown'ı mobilde yeniden kullanılmadı).
- **`blog` / `hizmetler` sayfaları `.claude` belgelerine bağlı değil** — normal.

## Tasarım / içerik
- **Şeftali kartı tekilliği** — yalnızca anasayfa `fgas.tsx`'te. Yeni bir şeftali yüzeyi eklerken kuralı bozma.
- **Fontlar** — Signifier→Source Serif 4, Sohne→Inter (DESIGN.md önerdiği bedava yedekler). Orijinal fontlar lisanslı değil; değişirse `layout.tsx` yeterli.
- **SEO / OG** — yalnızca temel `metadata` + `generateMetadata`. `sitemap.xml`, `robots.txt`, `JSON-LD`, OG görselleri (opengraph-image) `og:image`) **yok**.

## Teknik
- **Eski sunucu süreci acemi hatası** — `next start` + eski `next` süreci port'u tutunca yeni build 404 verebiliyor. Düzeltme: `fuser -k 3000/tcp` → temiz start.
- **Playwright Chrome yolu sabit** (`/usr/local/bin/google-chrome`). Başka makinede `executablePath` değişir.
- **Accordion animasyonu** — base-ui keyframe'leri yoksa açılış/kapanma görsel animasyonu sessizce atlanır (fonksiyon sorunsuz, sadece animasyon). Gerekirse `globals.css`'e `--accordion-panel-height` / keyframe ekle.
