# Güvenlik

## Durum
Bu bir server-rendered statik içerik sitesi. Şu an gerçek backend, form işleme, oturum, kullanıcı verisi deposu yok; bu yüzden geleneksel web uygulaması tehdit yüzeyi (SQLi, auth bypass, SSRF vb.) geçerli değil. Yine de aşağıdakiler güvenlik disiplinidir.

## Aktif konular
- **XSS / injection** — Tüm içerik statik TSX içinde, `dangerouslySetInnerHTML` **kullanılmadı**. `next/image` URL'leri sabit (kendi `public`). Kullanıcı girdisi render'a aktarılmıyor.
- **Form (gerçek gönderim — 2026-09)** — `contact-form.tsx` tarayıcıdan doğrudan `api.web3forms.com`'a POST eder. Müşterinin adı, telefonu, e-postası ve serbest mesajı **üçüncü taraf bir işleyiciye** çıkar. Kendi sunucumuz olmadığı için **sunucu tarafı doğrulama yoktur**; tek savunma bizim honeypot'umuz (atlatılabilir) + Web3Forms'un tüm gönderimlerde çalışan sunucu taraflı spam filtresi. Client `required` bir doğrulama değildir.
- **Header injection** — `subject` alanı kullanıcı girdisi taşımaz (`hizmetTuru` bir `<select>`'ten gelir, serbest metin değil) ve `from_name` sabittir; kullanıcı metni e-posta başlığına hiç girmez.
- **Bağımlılıklar** — önceki `npm audit` “0 vulnerabilities”. Bağımlılık kümesi küçük (Next, React, base-ui, shadcn, lucide, tailwind). Güncel tutulur.
- **Dış servisler** — Google Fonts (`next/font` self-host eder, external fetch yok) ve build sırasında registry (shadcn). **2026-09'dan beri çalışma zamanında bir dış çağrı var:** Vercel Analytics (`@vercel/analytics/next`, root `layout.tsx`'e monte) ziyaret verisini Vercel'e gönderir. Üçüncü taraf script; ilk parti değil.
- **Analytics / gizlilik** — Vercel Analytics çerez kullanmaz ve kişisel veri toplamaz (ürün iddiası), ancak yine de dışarıya giden bir veri akışıdır. KVKK/GDPR kapsamında çerez/consent banner'ı gerekirse Analytics kararı yeniden değerlendirilmeli. Panelde etkinleştirilmezse script çalışsa da veri toplanmaz.

## İşlem güvenliği (bu projede)
- `next dev` / `next start` localhost'ta çalışır; üretim deploy'da `next start` + HTTPS ters-proxy beklenir.
- `.env.local` artık var (yalnız `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`); git'e girmez (`.gitignore`: `.env*` + `!.env.example` istisnası).
- **Kural: `NEXT_PUBLIC_` öneki "sır" değil "yapılandırma" demektir.** Bu değerler build anında istemci bundle'ına gömülür ve oradan okunabilir; yani env değişkenine taşımak anahtarı gizlemez, sadece repodan/git geçmişinden uzak tutar. **Gizli kalması gereken bir değer asla `NEXT_PUBLIC_` ile tutulmaz** — bu değişiklik o tuzağın örneği olacak, o yüzden açıkça yazıldı.
- Access key'in açıkta olması Web3Forms'un tasarım gereği kabul edilir ("safe to expose publicly"). Kalan risk: anahtarı ele geçiren biri firmaya spam gönderebilir. Azaltma: Web3Forms panelinden anahtarı **domain'e kilitle** + gerektiğinde rotate et.
- **KVKK / veri işleyici** — form verisi artık yurt dışındaki bir üçüncü taraf işleyiciye (Web3Forms) gidiyor ve onların panelinde saklanıyor. Sitede **aydınlatma metni / gizlilik sayfası yok**; bu **açık bir uyum maddesidir** ve formun yayına alınmasından önce değerlendirilmelidir (bkz. known-limitations.md, roadmap-todo.md). Vercel Analytics için yazılan nottan daha büyük bir veri akışıdır.

## Deploy/servis notları (üretim için)
- Statik SSG çıktısı `.next/server/app/*.html` — CDN'de önbelleklenebilir.
- `Cache-Control` başlıkları `next.config.ts` ile eklenebilir (performans + içerik doğruluğu).
- HTTPS zorunlu (ters-proxy veya hosting platformu).

## Backend entegrasyonu = yeniden güvenlik değerlendirmesi
İletişim formu gerçek POST'a geçtiğinde / CMS eklendiğinde:
- Sunucu doğrulaması, rate-limit, spam koruması.
- İstemciye sızmayan tek kullanımlık token (CSRF).
- Yedek parça / görsel upload varsa MIME + boyut doğrulama.
Bu dosyayı o zaman güncelle.

## Yapılacaklar
- [ ] `robots.txt`, `sitemap.xml` ekle (SEO + tarama kontrolü).
- [ ] Backend gelince form endpoint güvenlik kontrolü listesi ekle.
