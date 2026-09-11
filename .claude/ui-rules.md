# UI Kuralları (DESIGN.md → kod)

**Kaynak:** kök `DESIGN.md` ("Steep"). Bu dosya onun uygulanabilir özetidir — token'lar ve yapışkan kurallar. Tam spesifikasyon (tip skala, spacing, shadow, yüzen artefakt) gerektiğinde `DESIGN.md`'yi aç. Token'lar `src/app/globals.css` `@theme` içinde tanımlı — Tailwind utility'leri otomatik üretir.

## Renkler (token)
| Token | Hex | Kullanım |
|-------|-----|----------|
| `ink-black` | `#17191c` | Metin, filled buton, logo. Sistemdeki tek koyu yüzey. |
| `paper-white` | `#ffffff` | Sayfa zemini, indirilmiş yüzeyler. |
| `mist-gray` | `#f2f2f3` | Kartlar, ikincil zemin. |
| `fog-white` | `#fafafb` | Alternatif bölüm bandı. |
| `slate-gray` | `#777b86` | Muted metin, yardımcı text. |
| `ash-gray` | `#979799` | Kategori etiketi (uppercase ghost). |
| `smoke-gray` | `#a3a6af` | Placeholder, disabled. |
| `blush-peach` | `#fbe1d1` | **TÜM SİTEDE EN FAZLA 1 YÜZEY.** |
| `sienna-brown` | `#5d2a1a` | Sadece şeftali üstünde metin + grafik çizgisi. |
| `whatsapp` / `whatsapp-dark` | `#25d366` / `#1ebe5d` | Marka aksanı — **yalnız** `/iletisim` WhatsApp kutusunda (ikon çemberi + CTA) ve mobil menü CTA'sında. Paletin dışındaki tek renk. |

## Tipografi
- **Serif (Signifier → Source Serif 4)** yalnızca H1/H2, weight **400**. İtalik ifade cümle içinde `<em className="italic">`.
  - Display ~88px / hero clamp; H2 ~44–56px. letter-spacing sıkı (`tracking-[-0.015em]` → `-0.03em` büyüklerde).
- **Sans (Sohne → Inter)** body/UI. Yan-adım ağırlıklar `font-[430]`/`font-[450]`/`font-[480]` (500'e zıplamadan hiyerarşi).
- Görüntü başlık için `font-signifier`, body için `font-sohne` (layout'ta var).

## Şekil & boşluk
- Butonlar `rounded-full` (9999px), pointer. Her filled pill'in yanında bir **ghost** eşi aynı satırda.
- Kart yüzeyleri `rounded-[24px]`, `bg-mist-gray`, **shadow yok** (yüzen artefaktlar hariç).
- Yüzen artefakt: `bg-paper-white rounded-[20px] shadow-pop` (veya `shadow-artifact`) — gölge yalnız bunlarda.
- Temel birim 4px; bölüm vertikal boşluk `py-24 md:py-32`; max-width `max-w-[1200px]`.

## Yapışkan kurallar
- **Şeftali kartı sayfada en fazla 1**; sadece paper/mist üstünde, metin sienna. (Anasayfa `fgas.tsx`'te.)
- **Gölge yalnız yüzen artefaktlarda** — nötr/şeftali kartlara shadow yok.
- İnline link altı çizili değil; ok `→` (veya `→` span) affordance'ı sağlar; hover'da underline.
- shadcn default `popover`/`focus` renkleri Steep'e uymaz — `dropdown-menu`, `sheet`, `accordion` gibi yüzeylerde override et (`bg-paper-white`, `focus:bg-mist-gray`, `shadow-pop`).
- Fotoğraf az ve öz: bölüm başına tek rafine figür (`MediaFigure`: 24px radius + hairline ring + sessiz caption).

## İçerik / dil
- Metin Türkçe; marka "UGR Ölçüm ve İklimlendirme". Tagline "F-Gaz Emisyon" yalnızca `brand.ts` veri sabiti olarak durur — artık nav/footer'da render **edilmez** (2026-09'dan beri kaldırıldı); footer açıklaması zenginleştirildi.
- Dizgi boşlukları cömert — kalabalık yok; müşteri metinleri (hizmetler) **birebir** korunur (`src/lib/services.ts`).
