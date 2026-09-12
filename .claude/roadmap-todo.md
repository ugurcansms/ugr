# Yol Haritası & Yapılacaklar

Kategorize edilmiş. `[ ]` = açık, `[x]` = tamamlandı. İş bitince işaretle ve bu dosyayı güncelle.

## Backend / veri (en büyük)
- [x] İletişim formu gerçek endpoint'e bağlandı — Web3Forms, tarayıcıdan doğrudan (2026-09). Sözleşme: `data-contracts.md` "Form gönderimi — Web3Forms". `route.ts` yok, olmayacak (karar #25).
- [ ] **KVKK aydınlatma metni / gizlilik sayfası** — form verisi artık yurt dışındaki bir üçüncü tarafa gidiyor. Formun yayına alınmasından önce değerlendirilmeli (bkz. security.md, known-limitations.md).
- [ ] Web3Forms kotasını (aylık 250) izle; aşılacaksa ücretli plana geç ya da uyarı mekanizması kur.
- [ ] Blog, hizmetler, SSS, marka verisi CMS/API'den çekilebilir hale getir (şu an `src/lib/*` statik).
- [ ] Görseller gerçek firma fotoğraflarıyla değiştir (`public/images`).

## İçerik / onay
- [ ] Hakkımızda hikâye, değerler, sertifikalar — müşteri onayı sonrası gerçek metinlerle doldur.
- [x] İletişim bilgileri (telefon, e-posta, adres) gerçek değerlerle güncellendi — `src/lib/brand.ts` (2026-09).
- [x] F-Gaz'a özel hizmet sayfası eklendi → `/hizmetler/f-gaz-sizinti-kontrolu-ve-ekomvet` (index 04; nav dropdown + footer). Slug'lar tam başlık: `montaj-ve-kurulum` / `periyodik-bakim-ve-sistem-kontrolu` / `onarim-ve-teknik-servis`.

## SEO / başlıklar
- [ ] `sitemap.xml` + `robots.txt` ekle.
- [ ] `og:image` / Open Graph metası + `opengraph-image` ekle.
- [ ] JSON-LD (LocalBusiness + Service) ekle.

## UI / erişilebilirlik
- [ ] Form: **alan bazlı** e-posta/telefon doğrulama + alan başına `aria-describedby` hata mesajları. (Form *düzeyinde* hata + `role="alert"` + odak taşıma 2026-09'da yapıldı; kalan kısım alan bazlı doğrulamadır.)
- [ ] Accordion animasyonu keyframe'lerini `globals.css`'e ekle (şu an sessizce atlanıyor) — isteğe bağlı.
- [ ] Mobil `Sheet` içinde "Hizmetler" alt listesi için ayrı görsel ayrım (istenirse).

## Performans
- [ ] Lighthouse / WebPageTest koş — LCP, CLS, bundle rakamlarını `performance.md`'ye işle.
- [ ] Gerçek görsel boyutlarında `width`/`height` belirt.

## Teknik temizlik
- [ ] Kalıcı test kurulumu (vitest / Playwright test runner) — şu an script bazlı.
- [ ] Old `scripts-*.mjs` kalıntıları repo'da var mı kontrol et (geçici script'ler genelde silindi).
- [ ] `next.config.ts` içine headers (`Cache-Control`) kararı.

## Canlıya alış / yayın
- [ ] Footer "Design by errnify" kredisi **yorum satırında** — canlıya almadan önce geri aç (`src/components/site-footer.tsx`). Blok şu an hazır: `https://errnify.com/tr`, `target="_blank"`, `font-[480] text-ink-black`; sadece yorum blokları kaldırılıp aktif edilecek.

## Kapanmış (örnek referans)
- [x] Tek sayfa → çok sayfalı mimari (7 rota).
- [x] Hakkımızda → Misyon/Vizyon + SSS; eski CTA silindi.
- [x] Blog detay → ilgili yazılar; bloga 2 yeni mock yazı.
- [x] Hizmet /hizmetler/[slug] detay; navbar dropdown.
- [x] Anasayfa hizmet kartları → detay; blog bölümü → son 3; footer linkleri gerçek rotalar.
