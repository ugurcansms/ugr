# Yol Haritası & Yapılacaklar

Kategorize edilmiş. `[ ]` = açık, `[x]` = tamamlandı. İş bitince işaretle ve bu dosyayı güncelle.

## Backend / veri (en büyük)
- [ ] İletişim formu gerçek endpoint'e bağla (şu an client state). Şema: `data-contracts.md` "Form POST /iletisim".
- [ ] Blog, hizmetler, SSS, marka verisi CMS/API'den çekilebilir hale getir (şu an `src/lib/*` statik).
- [ ] Görseller gerçek firma fotoğraflarıyla değiştir (`public/images`).

## İçerik / onay
- [ ] Hakkımızda hikâye, değerler, sertifikalar — müşteri onayı sonrası gerçek metinlerle doldur.
- [ ] İletişim bilgileri (telefon, e-posta, adres) gerçek değerlerle güncelle (`src/lib/brand.ts`).
- [x] F-Gaz'a özel hizmet sayfası eklendi → `/hizmetler/f-gaz-sizinti-kontrolu-ve-ekomvet` (index 04; nav dropdown + footer). Slug'lar tam başlık: `montaj-ve-kurulum` / `periyodik-bakim-ve-sistem-kontrolu` / `onarim-ve-teknik-servis`.

## SEO / başlıklar
- [ ] `sitemap.xml` + `robots.txt` ekle.
- [ ] `og:image` / Open Graph metası + `opengraph-image` ekle.
- [ ] JSON-LD (LocalBusiness + Service) ekle.

## UI / erişilebilirlik
- [ ] Form: e-posta/telefon doğrulama + `aria-describedby` hata mesajları (native required ötesi).
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
