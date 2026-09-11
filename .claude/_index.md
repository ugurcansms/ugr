# Proje Belge Indeksi (Ana Giriş)

Bu dosya UGR klima servis sitesinin proje belleğidir. `CLAUDE.md` tarafından otomatik yüklenir; her oturumda buradan başlayın, ilgili dokümanı açın ve proje değişikliklerine göre **güncelleyin**.

> **Kural:** Kod veya yapı değişiyorsa ilgili belgeyi aynı oturumda güncelle. Bir dosyayı zaten güncel tutmak, sıfırdan okumaktan daha ucuzdur.

> **Not:** Kök `DESIGN.md` ("Steep") tasarım sisteminin **kaynağıdır** — hacimli olduğu için buraya import edilmez; tasarım işi yaparken açılmalıdır. Damıtılmış kuralları [ui-rules.md](ui-rules.md)'de.

## Belgeler

| Dosya | Ne anlatır | Ne zaman güncelle |
|-------|-----------|-------------------|
| [project-summary.md](project-summary.md) | Projenin tek cümlelik tarifi, marka, hedef | Marka/konum değişince |
| [project-structure.md](project-structure.md) | Dizin ağacı ve her dosyanın görevi | Dosya ekle/sil/taşı | 
| [architecture.md](architecture.md) | Rotalar, layout, bileşen katmanı, veri akışı | Route/sistem değişince |
| [decisions.md](decisions.md) | Non-obvious mimari kararlar + gerekçe + alternatif | Yeni karar alınca |
| [engineering-rules.md](engineering-rules.md) | Next 16 / shadcn / genel kod disiplini | Kural değişince |
| [ui-rules.md](ui-rules.md) | DESIGN.md token'ları + UI pratikleri | Tasarım değişince |
| [DESIGN.md](../DESIGN.md) | Steep tasarım sisteminin **kaynağı** (import edilmez, açılır) | Tasarım değişince ui-rules.md'yi de güncelle |
| [data-contracts.md](data-contracts.md) | Mock veri şemaları (backend'in birebir takip edeceği) | Veri şeması değişince |
| [known-limitations.md](known-limitations.md) | Bilinen eksikler ve geçici çözümler | Eksik kapandıkça |
| [performance.md](performance.md) | Ölçümler, riskler, optimize fırsatları | Performans ölçülünce |
| [security.md](security.md) | Güvenlik konuları, form/veri, bağımlılık | Yeni yüzey eklenince |
| [accessibility.md](accessibility.md) | Erişilebilirlik yaklaşımı ve kontroller | UI bileşeni değişince |
| [testing.md](testing.md) | Doğrulama araçları, komutlar, el ile kontrol | Test/komut değişince |
| [roadmap-todo.md](roadmap-todo.md) | Yapılacaklar ve öneriler | Görev bitince/yeni çıkınca |
| [glossary.md](glossary.md) | Brand ve sektör terimleri | Yeni terim girince |

## Oturum başlangıç disiplini
1. Bu indeksi oku (otomatik gelir).
2. Yapılacak iş ilgili belgeleri aç: düzenleyeceğin alanın docs'unu oku.
3. Değişiklik yaparken ilgili belgeyi **aynı oturumda** güncelle.
4. Kalıcı, kod dışı öğrenmeyi buraya yaz (repo'ya girer) ve gerekirse `AGENTS.md`/`CLAUDE.md`'ye kısa bir satır ekle.

> Not: `AGENTS.md` içindeki Next.js "breaking changes" bloğu `next dev` tarafından yeniden yazılır — ona dokunma.
