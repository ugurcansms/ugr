# Test & Doğrulama

## Mevcut araçlar
- **Build / lint:** `npm run build` (tip + statik üretim), `npm run lint` (eslint). Proje sonrası doğrulamada ikisi de temiz olmalı.
- **Playwright** (devDependency) — ekran görüntüsü ve davranış kontrolü için. Tarayıcı: `/usr/local/bin/google-chrome`, `args: ['--no-sandbox']`. **Not:** bu yol gerçek Chrome değil, `/usr/bin/brave-browser`'a symlink; `mob-shot.mjs` doğrudan `/opt/brave.com/brave/brave` kullanır. İkisi de Brave'e çıkar, ama "Chrome kurulu" sanıp aramayın.
- **curl** — rota/görsel kod kontrolü.

## Komutlar
```bash
npm run dev      # geliştirme (localhost:3000)
npm run build
npm run start    # production + port 3000
npm run lint
```

## Doğrulama adımları (değişiklik sonrası kalıp)
1. `npm run build` — TypeScript + SSG üretim hatasız.
2. Sunucu restart (eski süreç sıkıntısına dikkat): `fuser -k 3000/tcp → npm run start`.
3. Rota kontrolü:
   ```bash
   for p in / /hakkimizda /hizmetler /hizmetler/montaj-ve-kurulum /hizmetler/periyodik-bakim-ve-sistem-kontrolu /hizmetler/onarim-ve-teknik-servis /hizmetler/f-gaz-sizinti-kontrolu-ve-ekomvet /blog /blog/klima-bakimi-neden-ihmal-edilmemeli /iletisim; do \
     curl -s -o /dev/null -w "%{http_code} $p\n" http://localhost:3000$p; done
   ```
   Beklenen: hepsi `200`; bilinmeyen slug `404`.
4. Overflow kontrolü: desktop (1440) + mobil (390) viewport'ta `document.documentElement.scrollWidth - window.innerWidth == 0`.
5. Playwright ekran görüntüsü + kritik davranış (dropdown açılır, accordion açılır). **Form submit'i burada ÇALIŞTIRMA** — aşağıya bak.

## Form testi — dikkat: gerçek e-posta gönderir

Form artık Web3Forms'a gerçekten POST ediyor. **Başarılı bir gönderim firmanın gelen kutusuna gerçek e-posta düşürür ve aylık 250'lik ücretsiz kotadan 1 harcar.** Bu yüzden:

1. **Ağ katmanını taklit et** (`page.route` ile `**/api.web3forms.com/**`) ve senaryoları öyle gez: `200 {success:true}` → başarı; `200 {success:false}` → hata (naive `res.ok` kontrolünün kaçırdığı durum); `400`/`429`/JSON olmayan gövde/`abort` → hata + yazılan verinin korunması. E-posta gitmez, kota harcanmaz.
2. **Preflight'ı ayrı karşıla** — istek `application/json` olduğu için `OPTIONS` gelir; `route.fulfill` ile buna `access-control-allow-*` başlıkları dönmezsen Chromium POST'u hiç göndermez.
3. **Honeypot'u doğrula** — `input[name=website]`'i programatik doldur (tıklanamaz), gönder: **hiç istek gitmemeli** (`page.on('request')` ile say) ve başarı ekranı görünmeli.

> **Tuzak (2026-09'da yaşandı): gerçek uç noktaya headless tarayıcıdan istek atarsan `TypeError: Failed to fetch` alırsın.** Web3Forms, `HeadlessChrome` içeren User-Agent'ı sunucu taraflı çağrı sayıp **403** döner ve yanıta CORS başlığı koymaz — tarayıcı da yanıtı okumaz. Çözüm: gerçek bir Chrome UA'sı ver (`browser.newContext({ userAgent: 'Mozilla/5.0 ... Chrome/141.0.0.0 Safari/537.36' })`) ya da `headless: false`. `curl` de aynı sebeple 403 alır; curl'ün 403'ü API'nin bozuk olduğunu **göstermez**.

## Örnek Playwright script kalıbı
```js
import { chromium } from 'playwright';
const browser = await chromium.launch({ executablePath: '/usr/local/bin/google-chrome', args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/shot.png', fullPage: true });
await browser.close();
```
Not: Script, proje kökünden `node <file>.mjs` ile çalıştırılır (playwright modülü çözülmesi için). `/tmp`'den çalıştırılırsa `ERR_MODULE_NOT_FOUND`.

## Yapılacaklar / test boşlukları
- [ ] Kalıcı test dosyası yok (yalnız geçici script'ler). İhtiyaç halinde `vitest`/`@testing-library` eklenebilir; şu an eklenmedi (backend sonrası).
- [ ] E2E (Playwright test runner) kurulabilir — şu an yok, script tabanlı manuel doğrulama.
