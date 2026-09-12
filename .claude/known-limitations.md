# Bilinen Sınırlamalar

## Veri (planlı)
- **Kendi backend'imiz yok.** İçerik statik (`src/lib/*` + sayfa içi sabitler). Form artık gerçekten gönderiyor ama **bizim sunucumuzdan geçmiyor**: tarayıcı → Web3Forms. Sonuç: gönderim arşivimiz, dışa aktarımımız ve uyarı mekanizmamız yok. Web3Forms çökerse ya da kota dolarsa talep **bizim tarafımızda hiçbir iz bırakmadan** kaybolur.
- **Görseller placeholder** — `public/images/` içindeki 7 görsel örnek/stock. Gerçek firma fotoğrafı, teknisyen, marka logolu görsel yok.
- **Hakkımızda metinleri kurgu** — hikâye, değerler, sertifikalar örnek. Müşteri onayı sonrası düzenlenmeli.

## İşlevsel / UI
- **F-Gaz/EKOMVET hizmet sayfası var** → `/hizmetler/f-gaz-sizinti-kontrolu-ve-ekomvet` (index 04). Eski not: yoktu, footer "F-Gaz Ölçüm" → bakim idi; 2026-09'da kategori eklendi. `hizmetTuru`'nda hem "F-Gaz Sızıntı Kontrolü ve EKOMVET" hem "F-Gaz Ölçüm" seçenekleri durur.
- **Form validation** — yalnızca native `required` (e-posta 2026-09'da zorunlu yapıldı). Alan bazlı hata mesajı, e-posta format/telefon doğrulaması, `aria-describedby` bağlantısı hâlâ yok. **Form düzeyinde** hata durumu var (mesaj + `role="alert"` + odak taşıma). Sunucu tarafı doğrulama yok, olmayacak (sunucumuz yok).
- **Aylık 250 gönderim kotası** — Web3Forms ücretsiz planı. Kota dolduğunda gönderim `429` ile başarısız olur ve **sahibine uygulama içi uyarı çıkmaz**; panelin elle izlenmesi gerekir. Aksi halde ayın ortasında talepler sessizce kaybolmaya başlar.
- **Honeypot sessiz yanlış-pozitif üretebilir** — `website` alanı otomatik doldurma (tarayıcı profili / parola yöneticisi) tarafından doldurulursa gönderim sessizce yutulur: ziyaretçi "Talebiniz alındı." görür, talep hiçbir yere düşmez. `display:none` + `autocomplete=off` + `data-lpignore`/`data-1p-ignore` ile büyük ölçüde engellendi ama **sıfırlanmadı**. Açıklanamayan eksik taleplerde ilk şüpheli budur.
- **Env değişkeni build zamanında gömülür** — deploy, `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` tanımlı olmadan build edilirse site **kalıcı olarak ölü bir formla** yayınlanır: ziyaretçi her gönderimde hata görür, istek hiç atılmaz. Build zamanı kontrolü bilinçli olarak yok (temiz klonda `npm run build`'i kırmamak için); Vercel'de değişkenin tanımlı olduğu ayrıca doğrulanmalı.
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
