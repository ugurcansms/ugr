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
- [ ] Form hata mesajları & `${aria-describedby}` pattern (backend gelince).
- [ ] `aria-current="page"` nav aktifleri (var) doğrulaması.
