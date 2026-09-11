# Mühendislik Kuralları

## Next.js 16 kritik farkları (eğitim verinden farklı)
- `params` bir **Promise**'tir → `page`, `generateMetadata`, `layout` içinde `await params`. `params.slug` senkron okunmaz.
- İç rotalar `next/link` `Link`. `Button render={<Link/>}` (Base UI merge eder). `tel:`/`mailto:` düz `<a>`.
- `title.template` kullanılan layout'ta **mutlaka yanında `title.default`** olmalı.
- `generateStaticParams` en az 1 parametre döndürmeli; `dynamicParams = false` ile bilinmeyen slug'larda 404 + `notFound()`.
- Kod yazmadan önce ilgili rehberi `node_modules/next/dist/docs/` altında oku (repo `AGENTS.md` zorunlu kılıyor).

## shadcn / Base UI
- **`asChild` YOK.** Link-buton / trigger için `render={<Link href="..."/>}`.
- Yeni bileşen eklemek için `npx shadcn add <name>` (base-nova registry, `components.json`).
- Accordion (base-ui) Root `value`/`defaultValue`/`openMultiple` kullanır — **`type` geçme**.
- Generated shadcn content (`bg-popover`, `focus:bg-accent`, `rounded-lg`) Steep paletine **override** edilmeli (bkz. ui-rules).
- Components import path: `@/components/ui/*`, yardımcı `@/lib/utils` `cn()`.

## Kod disiplini
- TypeScript `strict`; `import type` ile tip-import'ları ayrı yaz.
- Bileşenler Server default; sadece interaktif olanlara `"use client"`. Client gerekiyorsa en küçük parçada tut.
- Sınıf isimleri Tailwind utility; tekrar eden motifler için bileşen alt fonksiyon/const çıkar (ör. `form-field.tsx` `controlClasses`).
- Dosya adı kebab-case; `src/lib` veri sabitleri tip'li.
- Renkler token'dan (`bg-mist-gray`, `text-slate-gray` vb.) — ham hex'i doğrudan kullanma.

## Doğrulama discipline
- Her değişiklikte `npm run build` (tip + statik üretim) ve `npm run lint`.
- Görsel/davranış değişikliklerinde Playwright ile ekran görüntüsü al (`/usr/local/bin/google-chrome`).
- Rota/görsel kontrolü: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/<path>`.
- Taşma (overflow) kontrolü: hem desktop hem mobil viewport'ta `scrollWidth - clientWidth == 0` doğrula.
- Sunucu restart: `fuser -k 3000/tcp` → temiz port sonra `npm run start` (eski süreç build'i ezmesin).

## Git / kaynak
- `AGENTS.md` içindeki Next.js bloğu `next dev`'ce yazılır — dosyayı (bloğu) elle silme, diff'te taşıma.
- Commit isteği gelirse: default branch'ta değilse yeni branch; commit mesajı sonuna `Co-Authored-By: Claude Code <noreply@anthropic.com>`.
