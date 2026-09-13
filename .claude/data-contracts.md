# Veri Kontratları (Mock → Backend)

Şu an tüm veri `src/lib/*` içinde statik. Backend entegre edilirken bu şemalar **birebir** API yanıtlarına dönüşecek. Aşağıdaki tipler "sözleşme"dir — UI bunlara bağlı.

## Marka — `src/lib/brand.ts`
```ts
type Brand = {
  name: string;          // tam ad
  shortName: string;     // logoda
  monogram: string;      // "U"
  tagline: string;         // "F-Gaz Emisyon" — yalnızca sabit veri, UI'da render edilmez (2026-09)
  phone: string;
  phoneHref: string;     // tel:+...
  email: string;
  emailHref: string;     // mailto:...
  address: string;
  workingHours: string;
}
```

## Hizmet kategorileri — `src/lib/services.ts`
```ts
type ServiceCategory = {
  id: string;                          // = [slug] (montaj-ve-kurulum|periyodik-bakim-ve-sistem-kontrolu|onarim-ve-teknik-servis|f-gaz-sizinti-kontrolu-ve-ekomvet)
  index: string;                       // "01"..
  title: string;
  summary: string;                     // anasayfa özet
  intro: string;                       // detay PageHero
  image: string;                       // detay görseli
  imageAlt: string;
  description: string[];               // 2-3 paragraf
  highlights: { title: string; desc: string }[]; // "Neler dahil"
  items: { title: string; desc: string }[];      // 3 alt hizmet
}
```
Helper: `getServiceCategory(slug)`.

## Blog — `src/lib/blog.ts`
```ts
type BlogPost = {
  slug: string;
  title: string;
  category: string;      // Bakım / F-Gaz / Montaj
  excerpt: string;
  date: string;          // görünen Türkçe
  publishedAt: string;   // ISO — sıralama anahtarı
  readingTime: string;   // "4 dk okuma"
  image: string;
  imageAlt: string;
  body: string[];        // paragraflar
}
```
Helpers: `getBlogPost(slug)`, `getRelatedPosts(slug, count)`, `getLatestPosts(count)` (publishedAt'e göre azalan).

## Navigasyon — `src/lib/nav.ts`
```ts
type NavLink = { href: string; label: string; children?: { href: string; label: string }[] }
```
`navLinks` (5 ana rota; hizmetler'de children), `serviceChildren` (mobil 3 alt).

## Diğer sabitler
- `processSteps` — 4 adım süreç.
- `stats` — 4 istatistik (15+, 1.240, %98, 7/24).
- Hakkımızda sayfası içindeki `values`, `certifications`, `missionVision`, `faqs` — **sayfa dosyasının içinde** (henüz `lib`'e taşınmadı; ihtiyaç doğarsa `lib`'e çıkar).

## Form gönderimi — Web3Forms (2026-09'dan beri gerçek)

**Bu projede `route.ts` / server action YOK** — `POST /iletisim` diye bir rotamız hiç olmadı ve olmayacak. Form, tarayıcıdan doğrudan Web3Forms'a gider (neden: karar #25).

- **Uç nokta:** `POST https://api.web3forms.com/submit`
- **Gövde:** `application/json` (`FormData` değil), `Accept: application/json`
- **Yanıt:** başarı **yalnızca** `200` + `{"success":true, ...}`. `200` + `{"success":false}` **başarısızdır** (Web3Forms sunucu taraflı spam filtresi) — sadece HTTP durumuna bakmak yetmez.
- **Hata:** `400` istemci · `429` rate limit (+ aylık 250 ücretsiz kota) · `500` sunucu

Gönderilen alanlar (form `name` nitelikleri birebir):

| Alan | Zorunlu | Not |
|---|---|---|
| `adsoyad` | ✅ | |
| `telefon` | ✅ | `type="tel"` |
| `email` | ✅ | Web3Forms bunu **reply-to** olarak kullanır (2026-09'da zorunlu yapıldı) |
| `hizmetTuru` | — | select; boşsa `"Tür belirtilmedi"` olarak gönderilir. Seçenekler: Montaj ve Kurulum / Periyodik Bakım ve Sistem Kontrolü / Onarım ve Teknik Servis / F-Gaz Sızıntı Kontrolü ve EKOMVET / F-Gaz Ölçüm / Diğer |
| `mesaj` | ✅ | |
| `access_key` | ✅ | `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`'den; Web3Forms'a göre açıkta olması güvenli |
| `subject` | — | `Servis Talebi: {hizmetTuru}` — gelen kutusunda ayırt etmek için |
| `from_name` | — | Sabit: `ugriklimlendirme.com` (kullanıcı girdisi header'a girmesin) |
| `website` | — | **Honeypot — asla gönderilmez.** Doluysa istemci isteği hiç atmaz ve bot başarı görür. `disabled`/`readOnly` eklenmemeli, yoksa `FormData`'ya girmez ve honeypot ölü koda döner. |

Alan adları Türkçe bırakıldı: Web3Forms bilinmeyen alanları olduğu gibi e-postaya aktarır, alıcı da Türkçe okur.

## F-Gaz referans verisi — `src/lib/fgas.ts`
Backend sözleşmesi **değil**: anasayfadaki ton CO₂e hesaplayıcısının referans tablosu. Yönetmelik/ekip güncellerse buradan değişir, bileşene dokunulmaz.

```ts
type Refrigerant = {
  name: string;   // etikette görünen ad, ör. "R-410A"
  gwp: number;    // KIP — ör. 2088
}

type ControlBand = {
  id: string;       // "exempt" | "annual" | "biannual" | "quarterly"
  min: number;      // bandın alt sınırı, ton CO₂e — DAHİL
  range: string;    // referans listesinde görünen etiket, ör. "5 – 50 ton"
  interval: string; // zorunlu kaçak kontrolü sıklığı
  detail: string;   // sonuç panelindeki açıklama
}
```

- **Formül:** `toCo2eTonnes(kg, gwp) = (kg × gwp) / 1000`
- **Bantlar (`CONTROL_BANDS`, artan eşik):** `min 0` → zorunluluk yok · `min 5` → yılda 1 · `min 50` → 6 ayda 1 · `min 500` → 3 ayda 1. `bandFor` sağlanan **en yüksek** eşiği seçer, yani tam 50 ton → 6 ay, tam 500 ton → 3 ay bandına düşer.
- **`parseChargeKg`** Türkçe ayraç kuralını uygular: virgül ondalık, nokta **yalnızca tam üçlü gruplamada** (`^\d{1,3}(\.\d{3})+$`) binlik. Bu kural olmadan `Number("1.500")` = 1,5 olur (bkz. karar #26).
- **KIP değerlerinin kaynağı işletme listesidir**, yönetmelik eki değil — hukuki bir dayanak gerekiyorsa değerler gözden geçirilmeli.
