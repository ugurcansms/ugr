# Karar Kaydı (ADR)

Her giriş: **Karar → Gerekçe → Alternatif(ler) → Tarih.** Non-obvious, geri alınması zor kararları buraya yaz. Rutin seçimler gerekmez.

---

### 1. Tek sayfadan çok sayfalı App Router'a geçildi
- **Karar:** Site çok sayfalı (7 rota) yapıda; `SiteNav`/`SiteFooter` root layout'ta.
- **Gerekçe:** Özet (vitrin) bölümler + detay sayfaları modeli; kullanıcı "her hizmete/blog'a detay" istedi.
- **Alternatif:** Tek sayfa scroll (başta böyleydi) — kapsam büyüyünce sürdürülemez oldu.

### 2. Hizmet detayı "3 ana kategori" düzeyinde
- **Karar:** `/hizmetler/[slug]` yalnızca `montaj`/`bakim`/`tamir` — 9 alt hizmet değil.
- **Gerekçe:** Kategoriler geniş içerik barındırır; 9 ayrı sayfa aşırı parçalanma. Navbar dropdown da 3 kategoriyi gösterir.
- **Alternatif:** 9 alt hizmet sayfası (reddedildi — kullanıcı kategori düzeyini seçti).

### 3. shadcn dropDown-menu ve accordion base-nova'dan, Radix değil
- **Karar:** `npx shadcn add dropdown-menu accordion`. Her ikisi `@base-ui/react` (menu / accordion) tabanlı.
- **Gerekçe:** Repo zaten base-ui; registry tutarlı. Accordion **RSC-safe** ("use client" yok), Root'a `type` geçme (Radix API'si değil) — `value`/`defaultValue`/`openMultiple` kullan.
- **Alternatif:** El yazımı accordion/dropdown — daha çok kod, daha az erişilebilirlik garantisi.

### 4. Link-butonlar `render=<Link/>` ile (asChild değil)
- **Karar:** Tüm `Button`/`SheetTrigger`/`DropdownMenuItem`'lerde `render={<Link/>}` kullanılır. `asChild` YOK.
- **Gerekçe:** Base-ui bu repo'nun "base-nova" registry'sinde `asChild` yerine `render` prop'u kullanır. `asChild` verilirse TS hatası.
- **Not:** `tel:`/`mailto:` için düz `<a>`; iç rota `next/link`.

### 5. Navbar "Hizmetler" trigger gezinmeyen <button>, item'lar Link
- **Karar:** Dropdown trigger bir `<button>` (href gezinme yok); "Tüm Hizmetler → /hizmetler" ilk item; a11y için tek öğe tek eylem. Mobil sheet'te yuvalama yok, düz liste.
- **Gerekçe:** Tek öğede hem link hem menü (aria-haspopup) ekran okuyucu için bulanık. `/hizmetler` zaten dropdown'ın ilk item'ı ve footer'dan erişilebilir.

### 6. Form el yazımı native input (shadcn form eklenmedi)
- **Karar:** `form-field.tsx` — el yazımı `Input/Textarea/Select/Field`. Submit → client state "Talebiniz alındı." Hiç API çağrısı yok.
- **Gerekçe:** Backend sonra gelecek; 4 kontrol için shadcn `form`/`input` eklemek pound ve sistem saflığını bozar. DESIGN.md input reçetesi birebir uygulandı.
- **Alternatif:** `npx shadcn add input textarea select label` — gerekirse yapılabilir.

### 7. Marka rename tek noktadan: `src/lib/brand.ts`
- **Karar:** `name` (tam) / `shortName` / `monogram:"U"` / `tagline`. Nav/footer lockup `shortName`, alt bar ve meta `name`'i kullanır.
- **Gerekçe:** Marka adı her yerde manuel tutulamaz; tek düzenleme noktası.

### 8. Blog "en son 3" için `publishedAt` (ISO) alanı
- **Karar:** `BlogPost`'a `publishedAt` (ISO) eklendi; görünen Türkçe `date` metni korunur. `getLatestPosts()` `publishedAt`'e göre azalan sıralar.
- **Gerekçe:** Dizi tanım sırası ile yayın tarihi sırası uyuşmuyordu; `slice(-n)` yanlış sonuç verirdi. Makinece sıralanabilir alan gerekiyordu.

### 9. Footer "F-Gaz Ölçüm" → `/hizmetler/bakim`
- **Karar:** Footer'daki "F-Gaz Ölçüm" linki en yakın kategori (`bakim`, Gaz Şarjı alt hizmeti) detayına gider.
- **Gerekçe:** F-Gaz'a özel ayrı `/hizmetler/fgaz` sayfası yok. İhtiyaç doğarsa yeni kategori eklenebilir (bkz. roadmap-todo.md).

### 10. İletişim'de WhatsApp yönlendirme kutusu (tek marka aksanı)
- **Karar:** `/iletisim` sol sütununda `MediaFigure` yerine WhatsApp kutusu. Nötr `fog-white` kart (24px radius, gölgesiz); WhatsApp yeşili (`--color-whatsapp: #25d366`) **yalnız** ikon çemberinde ve CTA'da. Buton `rounded-full`, `h-11`, full-width; `href={brand.whatsappUrl}` (`https://wa.me/...`), `target="_blank"`.
- **Gerekçe:** Kullanıcı eski projedeki yeşil gradyan kutuyu istedi; Steep'e uydurulmuş sürüm seçildi — palete yabancı tek yüzey çıkmasın. Yeşil, paletin dışındaki tek renk olduğu için token olarak ayrıldı ve yalnız bu bileşende kullanımı kural.
- **Alternatif:** Yeşil gradyan kart (eski proje birebir) — reddedildi; gölge + gradyan Steep kurallarını ihlal ediyordu. `WHATSAPP_URL` dosya içi sabiti yerine `brand.ts`'e `whatsappUrl` eklendi (tek düzenleme noktası, karar #7).
- **İkon:** lucide'da marka (brand) ikonları yok (bilinçli kaldırılmış). `whatsapp-icon.tsx` — resmî WhatsApp logosu tek SVG path (fill="currentColor"), lucide API'siyle uyumlu. Alternatif `react-icons` bağımlılığı tek ikon için ağır geldi.

### 11. Alt sayfa hero'larında varsayılan gradyan yıkama
- **Karar:** `PageHero` artık varsayılan olarak sol üstten yayılan hafif `ash-gray` (#979799) radial gradyan render eder. Tüm alt sayfalar (blog, iletisim, hakkimizda, hizmetler, hizmet detayları) otomatik alır. `background` prop'u verilirse **varsayılanı ezer** (özelleştirme/ek katman için).
- **Gerekçe:** Kullanıcı gradyanı beğendi ve tüm alt sayfalara yaymak istedi. 5 sayfa da PageHero kullandığı için bileşene gömmek — her sayfada aynı kodu tekrarlamaktan tutarlı ve bakımı ucuz. Koyu `mist-gray` (#f2f2f3) vs `fog-white` (#fafafb) farkı 8/255 → gözle görünmezdi; `ash-gray` %45 opaklık tepe ~250→205 (~45 puan) verir, yumuşak ama net.
- **Alternatif:** Her sayfaya `background` prop'u kopyalamak — daha fazla tekrar, kopyala-yapıştır riski. Gradyanı ayrı bileşene çıkarmak — tek tüketici olduğu için gereksiz soyutlama.
- **Not:** İletişim'deki sabit görsel + zoom denemesi reddedildi; `background` prop'u ileride o tarz özel katman için korunuyor. Gradyan gri/nötr olduğu için şeftali aksanının "tek renk" kuralına dokunmuyor.

### 12. Blog sayfalama altyapısı (searchParams tabanlı)
- **Karar:** `/blog` liste sayfası `searchParams.page` üzerinden sayfalanır (RSC). `lib/blog.ts`'e `blogPostsPerPage = 6` ve `getBlogPosts(page)` eklendi — yeni→eski (`publishedAt`) sıralar, `page`'i `[1, totalPages]`'e sabitler (kötü URL'ler güvenli). `BlogPagination` bileşeni Önceki/Sonraki pill + "Sayfa X / Y" gösterir; `totalPages <= 1` iken hiç render edilmez.
- **Gerekçe:** Şu an 5 yazı → tek sayfa → görünür UI yok, yalnızca altyapı. 3'lü grid için 6/sayfa temiz 2 satır verir; 7. yazıda anlamlı sayfalama doğar. Next 16'da `searchParams` Promise — page `async` + `await` yapar (pagination'ın doğası, dynamic rendering). Anasayfa `getLatestPosts` ile aynı yeni→eski sıralama → liste de tutarlı.
- **Alternatif:** Client-side sayfalama (hepsini yükle, JS ile kes) — statik veride RSC'nin avantajı + gerçek backend hazırlığı kaybolur. `Button render=<Link/>` yerine `asChild` → base-nova'da hata (bkz. karar #4).

### 13. Gradyan yıkaması `Wash` bileşenine çıkarıldı
- **Karar:** PageHero'daki varsayılan radial gradyan `src/components/wash.tsx` `Wash` bileşenine taşındı. PageHero `background ?? <Wash />`, blog detayındaki "Konunun uzmanına danışın" CTA'sı `<Wash />` kullanır. `aria-hidden` + `className` kabul eder; kapsayıcı `relative overflow-hidden` ister.
- **Gerekçe:** Artık 2 tüketici (hero + CTA bandı); aynı arbitrary değeri kopyalamak tekrar ve kopyala-yapıştır riski. Tek kaynak → tutarlılık ve ileride tek yerden değiştirme.
- **Alternatif:** Arbitrary değeri inline kopyalamak — çalışır ama DRY değil. `@utility` CSS sınıfı da olurdu; bileşen aynı işi yapıp daha tip-güvenli.

### 14. Sağ altta yüzen "sayfa başına dön" butonu
- **Karar:** `src/components/scroll-top-button.tsx` (client, `"use client"`). `layout.tsx`'e monte → tüm rotalarda görünür. `window.scrollY > 400`'de belirir, tepede gizli (`opacity-0` + `pointer-events-none` + `tabIndex: -1`). `window.scrollTo({ top: 0, behavior: "smooth" })` — global `html { scroll-smooth }` zaten yumuşak kaydırır, explicit davranış sağlama.
- **Gerekçe:** Yüzen bir artefakt olduğu için Steep'in "yalnızca yüzen öğeler gölge kazanır" kuralı gereği `shadow-artifact` taşır. Renk birincil CTA'ların dolgun `ink-black`, ikon ise sitenin ok diliyle uyumlu lucide `ArrowUp`. Sağ altta başka yüzen öğe yok (WhatsApp kutusu yalnız `/iletisim` içeriğinde, yüzen değil) → üst üste binme yok. Mustard/peach değil ink: en yüksek kontrast, "aksiyon" okuması.
- **Alternatif:** Her zaman görünür (tepede de) — içeriği kapatıp gereksiz. `ChevronUp` vs `ArrowUp` — ArrowUp sitenin ArrowRight/ArrowUpRight ok geçişine daha yakın. `Button render=<Link/>` yeniden kullanımı — bu bir kontrol (link değil), düz nüve `<button>` daha sade.

### 15. Hakkımızda içerik zenginleştirmesi (hikaye güçlendirme)
- **Karar:** `/hakkimizda`'ya 3 bölüm eklendi. **Yolculuğumuz** (Story sonrası, `bg-paper-white`): yıl + hairline + nokta zaman çizgisi (2016/2019/2022/2026). **Sahadan** (Stats sonrası, `bg-fog-white`): 4 karelik fotoğraf şeridi (`MediaFigure` grid'de, `aspect 4/3`, aynı 24px radius + hairline ring) — `arkom-bn-1`, `EKOFAR-2`, `arkom-bn-2`, `iletisim-home-img`. **CTA** (FAQ sonrası, `bg-fog-white` + `border-t` + `Wash`): "Bizimle çalışmayı düşünüyor musunuz?" → `/iletisim`.
- **Gerekçe:** Sayfa dönüşüm açısından CTA ile bitmiyordu ve metin-yoğundu; güven = insan + zaman + saha kanıtı. `border-t` FAQ'nın fog bandından CTA'yı ayırır (iki fog bandı üst üste binmesin). `Wash` gradyanı sitedeki CTA deseniyle tutarlı.
- **Not (görseller):** Sahadan şeridindeki görseller şu an **yer tutucu** — `public/images/` içindekilerin çoğu başka marka (`ekofar.net`, `arkom`) örnekleri. `isitma-ve-sogutma-sistemleri.webp` üzerine gömülü büyük başlık/marka metni olduğu için bilinçli olarak alınmadı. Gerçek UGR saha fotoğrafları gelince `fieldShots` src'leri değişecek; sahada teknisyen içeren gerçek kareler tercih edilecek.

### 16. Hakkımızda ikinci tur — Stats kaldırma, Sahadan carousel, Story görseli
- **Karar:** (1) `Stats` hakkımızda'dan kaldırıldı (ana sayfada kalır). (2) `Sahadan` şeridi `SahadanGallery` client bileşenine taşındı — yatay `scroll-snap` carousel: ok butonları tek kart kadar kaydırır, satır oluşmaz. Desktop 4, tablet (md) 3, mobil 2 kart görünür (responsive `w-[calc(...)]`). (3) Story görseli `erdinc-klima-slides-1.webp` (beyaz şema) → `closeup-manual-worker.jpg` (teknisyen filtre temizliği); tekrarı önlemek için bu kare galeriden çıkarıldı (galeri 6).
- **Gerekçe:** Kullanıcı "Stats kaldır", "galeri çoğalınca satır oluşmasın, ok ile yana kaydır", "Story beyaz" dedi. Scroll-snap tabanlı flex carousel — shadcn/embla yok, bağımlılık eklemeden hafif ve yeterli. Ok durumu `scrollLeft`'ten `canLeft`/`canRight` ile izlenir; başta/ sonda ilgili ok soluklaşır.
- **Önemli trap:** Kart genişliği `min-w-[calc(...)]` değil **kesin `w-[calc(...)]` + `shrink-0`** verildi. `min-w` yalnızca taban — caption metni mobilde hedefi aşıp kartı büyütüyordu (görünür: 1). `w-` genişliği içerikten bağımsız sabitler; desktop `(1152-48)/4=276`, mobil 2'de `(342-16)/2=163`. Ok adımı = card.offsetWidth + 16 (gap-4).
- **Görsel filtreleme:** 5 yeni görselden gerçek foto alınanlar: `closeup-manual-worker`, `klima-ve-iklimlendirme`, `sogutma-tesisati2`. Alınmayanlar (hep üçüncü taraf): `1000_F_*.jpg` Adobe Stock filigranı, `3d-rendering-ventilation-system.jpg` 3D render, `ekofar.net-wall.webp` FM200 fiyat etiketi, `isitma-ve-sogutma-sistemleri.webp` gömülü başlık, `iletisim.webp` = EKOFAR-2 kopyası.

### 17. Anasayfa ikinci geçiş — Stats→marquee, AboutSummary görseli, koyu F-Gas kartı
- **Karar:** (1) Statik `Stats` bandı anasayfadan kaldırıldı; yerine ince kayan yazı şeridi `MarqueeStrip` (`marquee-strip.tsx`, RSC). Sayı yok — yalnızca bölge/hizmet vurguları. (2) `about-summary.tsx` görseli `erdinc-klima-slides-1.webp` (beyaz şema) → `arkom-bn-1.jpg` (çatıda teknisyen). (3) `fgas.tsx` sağ rapor artefaktı `bg-paper-white` → `bg-ink-black` koyu kart; %82 göstergesi + metrik kutuları koyu zemine uyar (beyaz track + şeftali fill), "Onaylandı" pilli ters çevrildi.
- **Gerekçe:** Stats bandı, hero artefaktlarının zaten gösterdiği sayıları (`1.240+`, `7/24`) tekrarlıyordu → kaldırılıp sayılar hero'ya özgü bırakıldı. Şerit, tekrarsız hareket katıyor ve `prefers-reduced-motion`'a saygılı (globals.css `animate-marquee`). AboutSummary görseli aynı "beyaz/kişisiz" sorunu taşıyordu; `arkom-bn-1` gerçek teknisyen karesi seçildi ve hakkımızda Story'nin `closeup-manual-worker`'ıyla büyük tekrar oluşmaması için bilinçli olarak farklı. Koyu kart, raporun "belge" kimliğini netleştirdi; beyaz-üstü-beyaz flata son verdi.
- **Alternatif:** Şerit sayılı (kullanıcı **"sayılar olmasın"** dedi). AboutSummary'de `closeup-manual-worker` (hakkımızda ile büyük tekrar — red). F-Gas'ta hafif transparan foto (kullanıcı **koyu kartı** seçti) ve `mist-gray` kart (red).
- **Ölü kod temizliği:** `Stats` (`stats.tsx`) ve `lib/services.ts` içindeki `stats` dizisi artık hiçbir yerde kullanılmadığı için silindi. Hero'daki `4.9/5 puan` iddiasını destekleyecek tek müşteri referansı ve TSE/F-Gaz yetki şeridi isteğe bağlı olarak açık bırakıldı (onaylanmadı).

### 18. Müşteri geri dönüşü — hero artefaktları, Yolculuğumuz ve Sahadan galerisi kaldırıldı
- **Karar:** (1) Anasayfa `hero.tsx`'teki iki yüzen artefakt kartı (`F-Gaz · R32 şarj` + `7/24 Acil hat`) ve yalnız onlarda kullanılan `Artifact`/`Sparkline` bileşenleri silindi → hero yalnız odaklı başlık. (2) `/hakkimizda`'dan **Yolculuğumuz** (zaman çizgisi, `journey` verisi) bölümü kaldırıldı. (3) `/hakkimizda`'dan **Sahadan** galeri bölümü kaldırıldı; `fieldShots` verisi, import ve artık tek tüketicisi kalmayan `sahadan-gallery.tsx` bileşen dosyası silindi.
- **Gerekçe:** Müşteri bu projede bunları kullanmayacağını belirtti (hero artefaktları, yolculuk, saha galerisi). Karar #15/#16'yı kısmen geri alır.
- **Not (sonraki adım):** Kullanıcı `/hakkimizda`'nın kalan bölüm içeriklerini müşteri metinleriyle değiştirecek. Şu an Values (`bg-paper-white`) ile Certifications (`bg-paper-white`) art arda — galeri (fog) aradan çıkınca ritim düştü; içerik düzenlemesi sırasında gözden geçirilecek. `decisions.md` #15/#16 tarihsel kayıttır — bölümler kaldırıldığı için güncel yapı için `project-structure.md`/`architecture.md`'ye bakın.

### 19. Blog yeniden yazımı — müşteri içeriği (9 yazı)
- **Karar:** `src/lib/blog.ts`'teki 5 mock yazı silindi; yerine `blog.md`'deki müşteri metinleriyle 9 yazı kondu (birebir). Eski yazıların gövde paragrafları duplike/tekrarlı mock'du — temizlendi. Slug'lar değişti (örn. `klima-bakimi` → `klima-bakimi-neden-ihmal-edilmemeli`).
- **Kategoriler:** Bakım (2), F-Gaz (5), Montaj (2). Eski `Enerji` kategorisi ve `enerji-tasarrufu` yazısı kaldırıldı; `data-contracts.md` kategori yorumu güncellendi.
- **Marka düzeltmesi:** `blog.md` #3 yazısındaki müşteri metni "Arkom Teknik" (eski marka) içeriyordu → tutarlılık için "UGR Ölçüm ve İklimlendirme" yapıldı. Kullanıcı birebir isterse geri alınabilir.
- **Görseller:** İlgili/gerçek saha kareleri seçildi (Adobe Stock filigranlı `1000_F_*`, gömülü başlıklı `isitma-ve-sogutma-sistemleri`, 3D render, `ekofar.net-wall` FM200 etiketi ve `iletisim.webp`=EKOFAR-2 kopyası **bilinçli alınmadı**).
- **Tarih:** Yayın tarihleri 2026-07-05 → 2026-09-02 aralığına yayıldı; `getLatestPosts`/`getBlogPosts` `publishedAt` ile yeni→eski sıralar, anasayfa ilk 3 = Klima Bakımı / Gaz Kaçağı / F-Gaz Sızıntı.
- **Etki:** `/blog` artık 2 sayfa (9 yazı → 6+3). `testing.md` smoke URL yeni şluga güncellendi (eski 404 verirdi). `architecture.md` 9 yazı olarak güncellendi.

### 20. Yeni servis eklendi — F-Gaz Sızıntı Kontrolü ve EKOMVET
- **Karar:** `src/lib/services.ts`'e 4. hizmet kategorisi `fgaz` (index `04`) eklendi — müşteri metniyle "F-Gaz Sızıntı Kontrolü ve EKOMVET" (sızıntı kontrolü, kaçak tespiti, EKOMVET kayıt takibi, raporlama). `summary`/`intro` müşterinin iki giriş cümlesinden: `intro` = "MYK belgeli..." (PageHero), `summary` = "Florlu sera gazı içeren..." (ana sayfa kartı + metadata).
- **Taşımalar:** nav dropdown + mobil `serviceChildren`, footer Hizmetler, contact-form `hizmetTuru` seçeneğine eklendi. **Slug'lar tam başlık:** id'ler `montaj-ve-kurulum` / `periyodik-bakim-ve-sistem-kontrolu` / `onarim-ve-teknik-servis` / `f-gaz-sizinti-kontrolu-ve-ekomvet` (2026-09'da `montaj`/`bakim`/`tamir`/`fgaz`'dan değiştirildi; Türkçe→ASCII). `data-contracts.md` slug listesi ve form seçenekleri güncellendi.
- **Yerleşim:** 3→4 kart olduğu için `services-summary` (ana sayfa) `md:grid-cols-2 lg:grid-cols-4`; `services` (/hizmetler) `md:grid-cols-2` (satır başına 2, 2x2) yapıldı. "Üç başlıkta" başlıkları (ana sayfa `service-summary` + `/hizmetler` PageHero) "Dört başlıkta"ya çevrildi.
- **Görsel:** `/images/WhatsApp Image 2026-09-07 at 14.46.43 (5).jpeg` (gaz kaçağı dedektörüyle sızıntı kontrolü) — kullanılmamış, filigran/marka yok.
- **Etki:** Ana sayfa hizmet özeti tek satırda 4 kart, `/hizmetler` özeti 2x2. `architecture.md`/`machine.md` 4 kategori, `testing.md` smoke rotaları tam slug'lar olarak güncellendi.

### 21. Ortak CTA bandı — `CtaBanner`
- **Karar:** Hakkımızda ve blog-detay uçlarındaki birebir aynı ortalanmış CTA section'ı (`bg-fog-white` + `border-t` + h2 + alt metin + `Bize Ulaşın` → `/iletisim`) tek bileşene `src/components/cta-banner.tsx` `CtaBanner`'a çıkarıldı. `title` (`ReactNode`, `<em>` varsayımına açık) ve isteğe bağlı `description` prop alır; buton sabit `/iletisim`.
- **Kurulum:** Mevcut satır-içi kopyalar değiştirildi (hakkimizda, blog/[slug], hizmetler) ve **yeni** eklendi (/blog listesi + /hizmetler/[slug]). Toplam 5 tüketici. Kopya tek tip yapıldı — `title="Bizimle İletişime Geçin."`, `description="Ücretsiz keşif ve size özel fiyat teklifi için bizimle iletişime geçin."`.
- **Arka plan görseli:** Kullanıcı "pageherodaki gibi bir resmi arkaplan olarak ver, 030 olsun" dedi. CtaBanner artık PageHero'nun soluk doku desenini kullanır — `EKOFAR-2.webp` `next/image` `fill` + `from-fog-white via-fog-white/60 to-fog-white` gradyan örtü, metin katmanı üstte. Başlangıçta `opacity-30` (kullanıcının "030" isteği) kondu; kullanıcı 30→60'a çekti (hero ile aynı). `Wash` artık CtaBanner'da kullanılmıyor → **yedek/bekli ilkel** (PageHero `background` prop'u ile enjekte edilebilir; karar #13'ü kısmen geçersiz kılar).
- **Gerekçe:** Dört özdeş section kopyala-yapıştır tekrarı; h2 boyutu (`clamp(30px,4vw,44px)`) ve `[48ch]` alt metin tutarlılığı tek kaynaktan. Ana sayfa `Cta` (`cta.tsx`) farklı — iki sütunlu fotoğraflı — olduğu için **dokunulmadı**; isimler (`Cta` vs `CtaBanner`) karışmayı önler. `border-t` hakkimizda'da iki fog bandını ayırmak için vardı; bileşene sabitlendi → /hizmetler/[slug]'ta fog-after-fog'dan da ayırır. Görsel arka plan, üstteki hero ile alttaki CTA bandı arasında görsel dirsek (bookend) yaratır.
- **Alternatif:** Tek `Cta`'yı merkeze alıp prop'la iki varyant — iki sütunlu tasarım çok farklı (red). Her sayfada inline bırakmak — tekrar/DRY. Görseli/opaklığı prop'la sayfa başına değiştirmek — tek tip marka görseli (EKOFAR-2) yeterli, ekstra API gereksiz (red).

### 22. Vercel Analytics eklendi — ilk çalışma-zamanı dış çağrı
- **Karar:** `@vercel/analytics` (^2.0.1) bağımlılığı eklendi. Root `layout.tsx`'te `import { Analytics } from "@vercel/analytics/next"` + `<body>` içinde `<Analytics />` (2026-09).
- **Gerekçe:** Kullanıcı ziyaret ölçümü istedi. `next` entry'si App Router için doğru sürüm (düz `@vercel/analytics` React sürümü değil). Root layout'a bir kez monte edilir → tüm rotalarda tek noktadan, sayfa başına tekrar yok. Vercel Analytics çerez kullanmaz, dolayısıyla çerez banner'ı gerektirmez.
- **Etki:** `security.md`'de yazılı **"çalışma zamanında dış çağrı yok"** özelliği sona erdi — o belge ve `performance.md` aynı oturumda güncellendi. Vercel panelinde Analytics etkinleştirilmezse veri toplanmaz (ama script yine yüklenir); deploy ortamı Vercel değilse panelde etkinleştirme adımı gerekir.
- **Alternatif:** Google Analytics — daha ağır, çerez + consent yükümlülüğü getirir. Plausible — ayrı hesap abonelik. Hiç analytics yok — kullanıcı ölçüm istedi.

### 23. İletişim bilgileri gerçek değerlere geçti + e-posta sarma tuzağı
- **Karar:** `src/lib/brand.ts` placeholder'dan gerçek değerlere geçti — telefon `0546 906 85 70`, e-posta `info@ugriklimlendirme.com`, adres "Atatürk Mahallesi, Darılmaz Sokak No: 14-16B, Sancaktepe/İstanbul" (2026-09).
- **Düzeltilen tutarsızlıklar (bunlar mevcut hatalardı, kullanıcı istemeden bulundu):** `whatsappUrl` hâlâ eski placeholder numarayı (`wa.me/908501234567`) gösteriyordu, `phone` ile çelişiyordu → `wa.me/905469068570`. `emailHref` hem `email` alanından farklıydı hem harf hatası içeriyordu (`info@ugrikliml**nedirme**.com`) → `email` ile birebir aynı yapıldı. Yani footer'da görünen e-posta ile tıklanan e-posta farklı adreslere gidiyordu.
- **Trap (öğrenilen):** Yeni e-posta 26 karakterlik **bölünemez tek kelime**; `/iletisim` sayfası 320px viewport'ta 43px yatay taşmaya başladı (eski 18 karakterlik adres kıl payı sığıyordu). Sebep: flex öğesinin varsayılan `min-width: auto`'su, içeriğinden daralmasını engelliyor. **`overflow-wrap: break-word` (Tailwind `break-words`) bu sorunu ÇÖZMEZ** — metni satırda kırar ama elementin *min-content* genişliğini küçültmez, dolayısıyla intrinsic boyut hesabı değişmez ve taşma sürer. Doğru çözüm **`overflow-wrap: anywhere`** (Tailwind v4 `wrap-anywhere`) — min-content'i etkiler. Kapsayıcıya ayrıca `min-w-0` eklendi.
- **Doğrulama:** `scrollWidth - clientWidth == 0` 4 viewport (1440/1024/390/320) × 5 rotada doğrulandı; taşma ancak `wrap-anywhere` ile kapandı (önce/sonra ölçümü stash ile karşılaştırıldı).
- **Etki:** `project-summary.md` güncellendi; `known-limitations.md`'deki "iletişim bilgileri placeholder" sınırlaması kapandığı için silindi; `roadmap-todo.md` maddesi `[x]` işaretlendi.

### 24. F-Gaz yetki numarası siteden kaldırıldı
- **Karar:** `brand.ts`'ten `fgasNo` alanı silindi (değeri `"F-Gaz Yetki No: FY-2026-0841"`). `/iletisim`'deki güven satırı artık yalnız **"TSE Hizmet Yeterlilik Belgesi"** gösterir. `site-footer.tsx`'teki kopya — ki **zaten yorum içindeydi, render edilmiyordu** — silindi. (2026-09)
- **Gerekçe:** Firmanın F-Gaz yetki belgesi **henüz yok**; sitede sahte bir belge numarası göstermek yanıltıcı beyan olurdu. Belge alınınca alan geri eklenebilir — `brand.ts`'e bunu söyleyen bir yorum bırakıldı.
- **Kullanıcı kararı (kapsam sınırı):** Kaldırma **yalnızca numarayla sınırlı tutuldu**. `/hakkimizda`'daki "F-Gaz Yetki Belgesi" sertifika kartı ("...Bakanlığı tarafından verilen F-Gaz yetki belgesine sahiptir") kullanıcı tercihiyle **bırakıldı** — sayfa hâlâ belgeye sahip olunduğunu beyan ediyor. Aynı şekilde marquee'deki "F-Gaz yetkili servis" ifadesi ve footer'daki "TSE Hizmet Yeterlilik Belgesi" iddiası bırakıldı. **Belge alınmazsa bu beyanlar gözden geçirilmeli.**
- **Etki:** `project-summary.md`'den "F-Gaz yetki no" satırı, `data-contracts.md` Brand tipinden `fgasNo: string` alanı çıkarıldı.

### 25. İletişim formu Web3Forms'a bağlandı — istemci taraflı, sunucu proxy'siz
- **Karar:** Form, tarayıcıdan doğrudan `POST https://api.web3forms.com/submit` adresine gider (`application/json`). `route.ts` / server action **yok**. Access key `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` ile `.env.local`'dan gelir. Bot koruması: `website` adlı honeypot (istemci kısa devresi).
- **Gerekçe (neden sunucu proxy'si değil):** Web3Forms docs'u sunucu taraflı kullanım için **"paid plan + server IP whitelisting"** şartı koyuyor ve tarayıcı tarafını öneriyor. Vercel serverless fonksiyonlarının çıkış IP'leri sabit olmadığı için whitelist pratikte uygulanamaz. Ek fayda: proje **tamamen statik/SSG kalır** — bugün repoda tek bir `route.ts`, `"use server"` ya da sunucu taraflı `fetch` yok.
- **Neden `NEXT_PUBLIC_` (yani key istemci bundle'ında):** Anahtar zaten tarayıcıya inmek üzere tasarlanmış; Web3Forms "safe to expose publicly" diyor. `.env.local` kullanmak anahtarı **gizlemez** (build anında bundle'a gömülür), sadece git geçmişinden uzak tutar. **Bu bir yapılandırma aracıdır, sır deposu değildir** — `security.md`'ye bu kural açıkça yazıldı ki gelecekte biri gerçek bir sırrı `NEXT_PUBLIC_` ile koymasın.
- **Neden JSON (FormData değil):** Honeypot alanının payload'a sızması yapısal olarak imkânsız hale gelir; boş `hizmetTuru` `"Tür belirtilmedi"` diye normalize edilebilir. Bedeli: `application/json` CORS-safelisted olmadığı için bir `OPTIONS` preflight (gönderim başına bir ekstra gidiş-dönüş, önbelleklenir).
- **Neden `botcheck` değil:** Web3Forms kendi honeypot alanını **"deprecated" ve "NOT RECOMMENDED"** olarak işaretlemiş; hCaptcha öneriyor. hCaptcha ise üçüncü taraf script + KVKK yüzeyi + kullanıcı sürtünmesi getirir; spam artarsa **escalation sırası**: (1) honeypot'u ekran dışı konuma al, (2) doldurma süresi kontrolü, (3) hCaptcha. 3'ten başlanmaz.
- **Honeypot neden `display:none` (ekran dışı konum değil):** Ekran dışı alan "görünür" sayıldığı için tarayıcı profili / parola yöneticisi otomatik doldurmasına açıktır ve `website` tam da o doldurmanın hedeflediği isimdir. Doldurulursa gönderim **sessizce yutulur** — ziyaretçi başarı görür, gerçek talep hiçbir yerde iz bırakmadan kaybolur. `display:none` alanlarını otomatik doldurma atlar; `data-lpignore`/`data-1p-ignore` ek sigortadır. Web3Forms zaten tüm gönderimlerde sunucu taraflı filtre çalıştırdığı için honeypot ikincil katmandır — kaybedilen talep, kaçan spam'den daha pahalıdır.
- **Uygulanan koruma:** `disabled`/`readOnly` honeypot'a **eklenmemeli** (disabled alanlar `FormData`'ya girmez → honeypot sessizce ölü koda döner). `200` + `{"success":false}` **hata** sayılır (Web3Forms spam filtresi); yalnız `res.ok`'a bakmak gerçek talebi kaybettirir. `AbortSignal.timeout(15s)` eklendi — yoksa asılı istek butonu kalıcı "Gönderiliyor…" bırakır. `subject` kullanıcı serbest metni taşımaz (select değeri) ve `from_name` sabittir → header injection yüzeyi yok.
- **Trap (2026-09'da yaşandı — `testing.md`'ye de yazıldı):** Gerçek uç noktaya **headless** tarayıcıdan ya da `curl`'den istek atınca `TypeError: Failed to fetch` / `403` alınır. Sebep API'nin bozuk olması değil: Web3Forms `HeadlessChrome` UA'sını (ve tarayıcı olmayan istemcileri) sunucu taraflı çağrı sayıp reddediyor ve yanıta CORS başlığı koymuyor. Gerçek Chrome UA'sı verilince aynı istek çalışır. **Bu yüzden mock'lu testler yeşilken bile gerçek uç nokta ayrıca sınanmalıdır** — 38 mock testi geçen bir form, bu adım atlanırsa canlıda kırık çıkabilirdi.
- **Açık kalan (bilinçli):** KVKK aydınlatma metni / gizlilik sayfası yok — form verisi yurt dışındaki üçüncü tarafa gidiyor. Teknik işi engellemez ama **formun yayına alınmasını engellemelidir**. Ayrıca aylık 250 kota için uyarı mekanizması yok. İkisi de `roadmap-todo.md` / `known-limitations.md`'de açık madde.
