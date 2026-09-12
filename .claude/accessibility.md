# Erişilebilirlik

## Yaklaşım
Design sistem "Steep" üzerine kurulu. Erişilebilirlik, bileşen yazarken uygulanan pratik kurallarla sağlanır; ayrı bir erişilebilirlik bileşeni/middleware yok. SSR'dan dönen statik HTML büyük ölçüde erişilebilirdir.

## Uygulananlar
- **Semantik iskelet** — `header`/`nav`/`main`/`section`/`article`/`footer`, başlık hiyerarşisi (tek H1 + H2/H3) her sayfada.
- **Linkler** — iç rotalar `next/link` (`<a>` üretir); sadece kart tamamı tıklanabilir durumda anlamlı label.
- **Buton** — gerçek `<button>` veya `render={<a/>}`; ikon butonlar `aria-label` taşır (Sheet trigger, acil arama).
- **Klavye** — Dropdown (base-ui Menu) ve Accordion (base-ui) klavye/halka navigasyonu destekler. Trigger `type="button"`.
- **`prefers-reduced-motion`** — giriş animasyonları (`animate-rise`/`animate-fade`) bu medya sorgusunda kapanır (`globals.css`).
- **Renk kontrastı** — neredeyse tamamı achromatic; sienna `#5d2a1a` şeftali üstüne (koyu-açık okunur), slate `#777b86` muted okunabilir. Placeholder `smoke-gray` bilinçli recede.
- **Focus** — `focus-visible` ring (`focus:ring-2 ring-ink-black/15`) form kontrol/input'larda; nav link underline hover.
- **Form asenkron durumu (2026-09)** — üç ayrı mekanizma, üçü de bilinçli:
  - **Bekleme:** DOM'da kalıcı `role="status"` + `sr-only` bölge. Gerekli çünkü buton `disabled` olunca odak `body`'ye düşer ve buton metni okunmaz; canlı bölgeler içerik değişmeden önce var olmalı, yoksa NVDA/JAWS okumaz.
  - **Hata:** `role="alert"` + `tabIndex={-1}` + **odak taşıma**. `role="alert"` dinamik eklenen düğümde güvenilir duyurulur; odak taşıma da klavye kullanıcısını sayfa başından tekrar sekmekten kurtarır.
  - **Başarı:** form tamamen kalktığı için odak sonuç kartına taşınır (`tabIndex={-1}`) — bu hem duyuru hem konum sağlar. Karta ayrıca `role="status"` **konmadı**: canlı rol + odak birlikte çift duyuruya yol açar.
- **Honeypot erişilebilirliği** — `website` alanı `tabIndex={-1}` + `aria-hidden` + `display:none`; klavye sırasına hiç girmez, ekran okuyucuya duyurulmaz.

## Dikkat / bilinen noktalar
- **Şeftali vurgusu** renk kontrastı açısından `sienna-brown` ile kullanılır; şeftali üstünde siyah metin kullanma.
- **`<a>` vs `<button>`** — ikisi de gezinme/eylem ayrımında doğru; "tek öğe tek eylem" terkibi (navbar dropdown trigger buton, item'lar link).
- **Sheet (mobil)** — base-ui Dialog tabanlı, `aria-label` trigger üzerinde; açıkken arka plan focus trap. Kapanma `onClick` link'lerde.

## Kontroller (değişiklikte)
- Klavye ile dropdown/accordion/sheet gezinme: Tab, Enter/Space, oklar, Escape.
- Ekran okuyucu (VoiceOver/NVDA) ile başlık hiyerarşisi + link/buton etiketleri.
- `prefers-reduced-motion` simülasyonu (devtools) ile animasyon kapanışı.
- Renk kontrastı ölçümü kritik metinlerde (ezberrenk olmadan, token kullan).

## Yapılacaklar
- [ ] `lang="tr"` + html doğru (var, layout'ta).
- [x] Form **form-düzeyi** hata mesajı (`role="alert"` + odak taşıma) ve bekleme/başarı duyuruları — 2026-09.
- [ ] Form **alan bazlı** doğrulama hata mesajları & alan başına `aria-describedby` — hâlâ açık, alan bazlı doğrulama gelince.
- [ ] `aria-current="page"` nav aktifleri (var) doğrulaması.
