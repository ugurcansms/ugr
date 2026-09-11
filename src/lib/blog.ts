export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  /** Makinece sıralanabilir yayın tarihi (ISO) — "date" görünen metindir. */
  publishedAt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  body: string[];
};

// Müşteri içerikleri (blog.md) — birebir korundu; yalnızca kurumsal marka adı
// "Arkom Teknik" → "UGR Ölçüm ve İklimlendirme" olarak düzeltildi (tutarlılık).
export const blogPosts: BlogPost[] = [
  {
    slug: "klima-bakimi-neden-ihmal-edilmemeli",
    title: "Klima Bakımı Neden İhmal Edilmemeli?",
    category: "Bakım",
    excerpt:
      "Filtreler, evaporatör ve kondanser yüzeyleri zamanla toz ve kirle dolar; bu birikinti performansı düşürür. Bakımın neden arıza sonrasına bırakılmaması gerektiğini anlatıyoruz.",
    date: "02 Eylül 2026",
    publishedAt: "2026-09-02",
    readingTime: "5 dk okuma",
    image: "/images/closeup-manual-worker.jpg",
    imageAlt:
      "Gözlüklü bir teknisyenin hava üfleyiciyle klima filtresini temizlemesi — düzenli bakım",
    body: [
      "Klima sistemleri düzenli kullanıldığında zaman içerisinde filtrelerde, evaporatör ve kondanser yüzeylerinde toz ve kir birikintileri oluşabilir. Bu birikintiler hava akışını ve ısı transferini olumsuz etkileyerek cihazın çalışma performansını etkileyebilir.",
      "Periyodik bakım sırasında filtreler temizlenir, iç ve dış ünitelerin genel durumu kontrol edilir, evaporatör ve kondanser yüzeyleri incelenir. Drenaj hattı ve drenaj tavası kontrol edilerek tıkanıklık, su akıtma ve benzeri sorunların oluşma riski değerlendirilir.",
      "Bakım yalnızca temizlikten ibaret değildir. Fanlar, elektriksel bağlantılar ve cihazın genel çalışma durumu da kontrol edilerek normal çalışma koşullarından sapmalar veya olası arıza belirtileri tespit edilmeye çalışılır. Böylece fark edilen problemlerin daha büyük bir arızaya dönüşmeden önce değerlendirilmesi mümkün olabilir.",
      "Bakım periyodu her cihaz için aynı değildir. Kullanım yoğunluğu, çalışma ortamı, cihazın özellikleri ve üreticinin bakım önerileri dikkate alınarak uygun bakım aralığı belirlenmelidir. Özellikle yoğun kullanılan veya tozlu ortamlarda çalışan sistemlerde daha sık kontrol gerekebilir.",
      "Soğutucu akışkanla ilgili bir eksiklik veya kaçak şüphesi bulunması halinde ise öncelikle sistemin durumu değerlendirilmelidir. F-Gaz kapsamındaki ekipmanlarda gerekli sızıntı kontrolleri ve soğutucu akışkanla ilgili işlemler, ekipmanın tabi olduğu mevzuat ve teknik gereklilikler doğrultusunda gerçekleştirilmelidir.",
      "Düzenli bakım; cihazın çalışma koşullarının korunmasına, performans kayıplarının erken fark edilmesine ve olası teknik sorunların zamanında değerlendirilmesine yardımcı olur. Bu nedenle klima bakımının yalnızca arıza sonrasında değil, cihazın kullanım koşullarına uygun şekilde planlanan periyodik kontrollerin bir parçası olarak ele alınması önemlidir.",
    ],
  },
  {
    slug: "klima-gaz-kacagi-nasil-tespit-edilir",
    title: "Klima Gaz Kaçağı Nasıl Tespit Edilir?",
    category: "F-Gaz",
    excerpt:
      "Gaz eksikliği her zaman kaçak anlamına gelmez; her performans kaybı farklı bir nedeni işaret edebilir. Doğru tespitin neden belgeli yapılması gerektiğini açıklıyoruz.",
    date: "28 Ağustos 2026",
    publishedAt: "2026-08-28",
    readingTime: "5 dk okuma",
    image: "/images/WhatsApp Image 2026-09-07 at 14.46.43 (4).jpeg",
    imageAlt:
      "Sarı soğutucu akışkan kaçak dedektörüyle evaporatör serpantini üzerinde sızıntı kontrolü yapan teknisyen",
    body: [
      "Klima sistemlerinde soğutucu akışkan eksikliği, cihazın yeterli soğutma veya ısıtma performansı gösterememesinin nedenlerinden biri olabilir. Ancak her performans kaybı doğrudan gaz kaçağı anlamına gelmez. Bu nedenle gaz eksikliği veya kaçak şüphesi bulunan sistemlerde öncelikle teknik kontrol yapılması gerekir.",
      "Kaçak kontrolünde soğutucu devre, bakır boru hatları, bağlantı noktaları, vanalar ve diğer ilgili bileşenler incelenir. Sistemin çalışma durumu değerlendirilerek kaçak ihtimali araştırılır ve gerekli görülen noktalarda uygun kaçak tespit yöntemleri kullanılır.",
      "Sızıntı tespit edildiğinde yalnızca sisteme yeniden soğutucu akışkan eklemek kalıcı bir çözüm değildir. Öncelikle kaçağın kaynağının belirlenmesi ve uygun teknik onarımın yapılması gerekir. Onarım sonrasında sistem tekrar kontrol edilerek sızıntının giderildiği doğrulanır ve gerekli durumlarda soğutucu akışkan işlemi gerçekleştirilir.",
      "Özellikle F-Gaz kapsamındaki ekipmanlarda sızıntı kontrolü, kullanılan soğutucu akışkanın özellikleri ve ekipmanın tabi olduğu mevzuat dikkate alınarak gerçekleştirilmelidir. Gerekli kontrollerin ve teknik işlemlerin kayıt altına alınması, sistemin bakım ve servis geçmişinin takip edilmesine de yardımcı olur.",
      "Klima gazı eksikliğinden şüphelenildiğinde doğrudan gaz dolumu yaptırmak yerine öncelikle sistemin kontrol edilmesi önemlidir. Kaçağın kaynağının belirlenmesi ve gerekli onarımın yapılması, sistemin çalışma koşullarının korunması açısından daha doğru bir yaklaşımdır.",
    ],
  },
  {
    slug: "f-gaz-sizinti-kontrolu-yasal-yukumlulukler",
    title: "F-Gaz Sızıntı Kontrolünün Önemi ve Yasal Yükümlülükler",
    category: "F-Gaz",
    excerpt:
      "Florlu Sera Gazları Yönetmeliği, ticari sistemlerde sızıntı kontrolü ve kayıt yükümlülükleri getiriyor. Kapsamı ve doğru uygulamayı özetliyoruz.",
    date: "20 Ağustos 2026",
    publishedAt: "2026-08-20",
    readingTime: "7 dk okuma",
    image: "/images/WhatsApp Image 2026-09-07 at 14.46.43 (1).jpeg",
    imageAlt:
      "Soğutucu akışkan tüpü ve regülatörü — F-Gaz sızıntı kontrolü ve teknik işlemler",
    body: [
      "Soğutma ve iklimlendirme sistemlerinde kullanılan florlu sera gazlarının kontrolü, hem sistemin sağlıklı çalışması hem de çevreye olan etkilerin azaltılması açısından önem taşıyor. Türkiye'de bu alandaki uygulamalar, Florlu Sera Gazlarına İlişkin Yönetmelik kapsamında düzenleniyor.",
      "Yönetmelik kapsamında belirli soğutma ve iklimlendirme ekipmanları için sızıntı kontrolleri, kayıt ve teknik uygulamalara ilişkin yükümlülükler bulunuyor. Bu nedenle özellikle ticari ve kurumsal işletmelerde kullanılan sistemlerin hangi kapsamda olduğunun ve hangi yükümlülüklere tabi olduğunun bilinmesi önem taşıyor.",
      "Sızıntı kontrolü sırasında soğutucu devre, bakır boru hatları, bağlantı noktaları, vanalar ve ilgili bileşenler incelenerek olası kaçaklar araştırılır. Sızıntı tespit edilmesi halinde öncelikle kaçağın kaynağı belirlenir ve gerekli teknik onarım gerçekleştirilir.",
      "Sistemde gaz eksikliği tespit edildiğinde yalnızca yeniden gaz doldurmak doğru bir yaklaşım değildir. Eksikliğin nedeni araştırılmalı, kaçak varsa giderilmeli ve ardından sistemin çalışma durumu yeniden değerlendirilmelidir.",
      "Yönetmelikte sızıntı kontrolü yükümlülükleri ekipmanın türü, içerdiği florlu sera gazının miktarı ve CO₂ eşdeğeri gibi kriterlere göre belirleniyor. Bu nedenle her klima veya soğutma sistemi için aynı kontrol sıklığının geçerli olduğu söylenemez.",
      "Kapsama giren ekipmanlarda gerçekleştirilen sızıntı kontrolü, bakım, servis ve onarım gibi faaliyetlerin kayıtlarının tutulması da sürecin önemli bir parçası. Bu kayıtların elektronik ortamda takip edilmesinde EKOMVET sistemi kullanılıyor.",
      "F-Gaz kapsamındaki teknik işlemlerin, ilgili mesleki yeterlilik ve belgelendirme şartlarını sağlayan teknik personel tarafından gerçekleştirilmesi gerekiyor. UGR Ölçüm ve İklimlendirme olarak MYK belgeli teknik personelimizle F-Gaz kapsamındaki sızıntı kontrollerini ve ilgili teknik işlemleri gerçekleştiriyor, yapılan işlemleri raporlayarak müşterilerimize sunuyoruz.",
      "F-Gaz uygulamalarında amaç yalnızca cihazın gazını tamamlamak değil; sistemin kontrol edilmesi, olası sızıntıların tespit edilmesi, gerekli onarımın yapılması ve ilgili işlemlerin mevzuata uygun şekilde kayıt altına alınmasıdır. Bu yaklaşım hem sistemin çalışma koşullarının korunmasına hem de F-Gaz yükümlülüklerinin doğru şekilde yerine getirilmesine yardımcı olur.",
    ],
  },
  {
    slug: "ekomvet-nedir-kapsama-giren-ekipmanlar",
    title: "EKOMVET Nedir? Hangi Ekipmanlar Kapsama Girer?",
    category: "F-Gaz",
    excerpt:
      "EKOMVET, florlu sera gazı içeren soğutma ve iklimlendirme ekipmanlarının kayıtlarını elektronik ortamda izleyen sistemdir. Kimlerin kapsama girdiğini anlatıyoruz.",
    date: "12 Ağustos 2026",
    publishedAt: "2026-08-12",
    readingTime: "8 dk okuma",
    image: "/images/sogutma-tesisati2.jpg",
    imageAlt:
      "Pek çok soğutma kulesinin ve boru tesisatının yer aldığı ticari soğutma sistemi — EKOMVET kapsamındaki ekipmanlar",
    body: [
      "EKOMVET, florlu sera gazı içeren belirli soğutma, iklimlendirme ve ısı pompası ekipmanlarının kayıtlarının ve bu ekipmanlarda gerçekleştirilen işlemlerin elektronik ortamda takip edilmesini sağlayan sistemdir. EKOMVET süreçleri, güncel olarak UÇBS (Ulusal Çevre Bilgi Sistemi) üzerinden yürütülmektedir.",
      "Özellikle ticari işletmelerde kullanılan soğutma ve iklimlendirme sistemleri açısından EKOMVET kapsamının bilinmesi önemlidir. Ancak her klima veya soğutma cihazı aynı yükümlülüklere tabi değildir. Ekipmanın türü, kullanılan soğutucu akışkanın miktarı ve CO₂ eşdeğeri gibi kriterler birlikte değerlendirilir.",
      "Florlu Sera Gazlarına İlişkin Yönetmelik kapsamında, belirli sabit soğutma, iklimlendirme ve ısı pompası ekipmanlarında 5 ton CO₂ eşdeğeri veya daha fazla florlu sera gazı bulunması halinde sızıntı kontrolü ve kayıtla ilgili yükümlülükler devreye girer.",
      "Burada kullanılan CO₂ eşdeğeri değeri, yalnızca gazın kilogram olarak miktarına göre belirlenmez. Hesaplamada kullanılan soğutucu akışkanın Küresel Isınma Potansiyeli (KIP) değeri de dikkate alınır. KIP, bir gazın küresel ısınma etkisinin CO₂'ye kıyasla ne kadar olduğunu ifade eder. Bu nedenle aynı miktarda farklı soğutucu akışkan, farklı CO₂ eşdeğeri değerlerine karşılık gelebilir.",
      "Sızıntı kontrolünün ne sıklıkta yapılacağı da ekipmandaki CO₂ eşdeğeri miktarına göre değişir. 5 ile 50 ton CO₂ eşdeğeri arasındaki ekipmanlarda, sabit sızıntı tespit sistemi bulunmuyorsa kontrolün en az yılda bir kez yapılması gerekir. 50 ile 500 ton CO₂ eşdeğeri arasındaki ekipmanlarda ise bu kontrol en az altı ayda bir gerçekleştirilir. 500 ton CO₂ eşdeğeri ve üzerindeki ekipmanlarda da en az altı ayda bir sızıntı kontrolü yapılması ve sabit sızıntı tespit sistemi bulundurulması gerekir.",
      "Sadece eksilen gazı yeniden doldurmak, devam eden bir kaçağı çözmez. Sızıntı kontrolünde soğutucu devre, boru hatları, bağlantı noktaları, vanalar ve ilgili bileşenler incelenerek olası kaçaklar araştırılır. Kaçak tespit edilmesi halinde öncelikle kaynağı belirlenir ve gerekli teknik onarım gerçekleştirilir.",
      "Yapılan sızıntı kontrollerinin ve ilgili teknik faaliyetlerin EKOMVET üzerinden kayıt altına alınması, ekipmanın geçmişinin takip edilmesini sağlar. Özellikle çok sayıda soğutma veya iklimlendirme cihazının bulunduğu ticari ve kurumsal işletmelerde bu kayıtların düzenli tutulması önem taşır.",
      "F-Gaz kapsamındaki sızıntı kontrollerinin ilgili mesleki yeterlilik şartlarını sağlayan teknik personel tarafından gerçekleştirilmesi gerekir. UGR Ölçüm ve İklimlendirme olarak, MYK belgeli teknik personelimizle F-Gaz kapsamındaki sızıntı kontrolü ve ilgili teknik işlemleri gerçekleştiriyor, yapılan işlemleri raporlayarak müşterilerimize sunuyoruz.",
      "EKOMVET sürecinin doğru yürütülmesi; ekipmanın kapsamının belirlenmesi, kullanılan soğutucu akışkanın KIP değerinin dikkate alınması, CO₂ eşdeğerinin doğru hesaplanması, gerekli sızıntı kontrollerinin zamanında yapılması ve gerçekleştirilen işlemlerin kayıt altına alınmasıyla birlikte değerlendirilmelidir.",
    ],
  },
  {
    slug: "klima-montajinda-sik-yapilan-hatalar",
    title: "Klima Montajında En Sık Yapılan Hatalar",
    category: "Montaj",
    excerpt:
      "Doğru montaj, cihazı duvara asmaktan ibaret değildir. Konumlandırma, boru tesisatı, vakumlama ve drenaj hatalarının sonuçlarını özetliyoruz.",
    date: "05 Ağustos 2026",
    publishedAt: "2026-08-05",
    readingTime: "7 dk okuma",
    image: "/images/WhatsApp Image 2026-09-07 at 14.46.43.jpeg",
    imageAlt:
      "Bir binanın çatısında merdivenle dış ünite grubuna müdahale eden teknisyen — montaj süreci",
    body: [
      "Klima montajı, cihazın yalnızca duvara veya uygun görülen bir noktaya yerleştirilmesinden ibaret değildir. İç ve dış ünitelerin doğru konumlandırılması, bakır boru tesisatının uygun şekilde yapılması, drenaj hattının doğru uygulanması ve montaj sonrasında sistemin kontrol edilmesi, klimanın sağlıklı ve verimli çalışması açısından önem taşır.",
      "Montaj sırasında yapılan en yaygın hatalardan biri, iç ve dış ünitelerin yanlış konumlandırılmasıdır. İç ünitenin hava akışını engelleyecek veya ortamın yeterince iklimlendirilmesini zorlaştıracak bir noktaya monte edilmesi cihazın performansını etkileyebilir. Dış ünitenin ise hava sirkülasyonunun yetersiz olduğu veya bakım ve servis erişiminin zor olduğu bir noktaya yerleştirilmesi ilerleyen dönemde sorun oluşturabilir. Bu nedenle montaj öncesinde cihazın konumu, hava akışı ve servis için gerekli alan birlikte değerlendirilmelidir.",
      "Bakır boru tesisatındaki hatalar da klima performansını doğrudan etkileyebilir. Boruların cihazın teknik özelliklerine uygun çapta seçilmesi, doğru şekilde bükülmesi ve bağlantıların uygun yöntemlerle yapılması gerekir. Boruların yeterli şekilde izole edilmemesi ise yoğuşma ve ısı kayıplarına neden olabilir. Hatalı veya özensiz yapılan bağlantılar zaman içerisinde soğutucu akışkan sızıntısı gibi problemlere de yol açabilir.",
      "Montaj sonrasında soğutucu devrenin vakumlanması da önemli aşamalardan biridir. Vakumlama işlemi, sistem içerisindeki hava ve nemin uzaklaştırılmasına yardımcı olur. Bu işlemin gerektiği şekilde yapılmaması, soğutma sisteminin çalışma koşullarını ve uzun vadeli performansını olumsuz etkileyebilir.",
      "Drenaj hattının yanlış uygulanması ise özellikle iç üniteden su akıtma şikâyetlerinin nedenlerinden biri olabilir. Klima çalışırken oluşan yoğuşma suyunun uygun şekilde tahliye edilmesi gerekir. Drenaj hattının uygun eğimde olmaması, tıkanması veya yanlış yönlendirilmesi suyun tahliye edilememesine ve iç üniteden taşmasına neden olabilir.",
      "Montajın tamamlanmasının ardından sistemin kontrol edilmeden teslim edilmesi de sık karşılaşılan hatalardandır. İç ve dış ünitelerin çalışması, boru bağlantıları, drenaj hattı ve cihazın genel çalışma durumu kontrol edilmelidir. Gerekli kontrollerin yapılması, montajdan kaynaklanabilecek sorunların daha kullanımın ilk aşamasında fark edilmesine yardımcı olur.",
      "Doğru klima montajı yalnızca cihazın çalışmasını sağlamakla kalmaz; cihazın uygun çalışma koşullarında kullanılmasına, performansının korunmasına ve ileride oluşabilecek bazı problemlerin önlenmesine de yardımcı olur.",
      "UGR Ölçüm ve İklimlendirme olarak klima montaj ve kurulum işlemlerinde iç ve dış ünite konumlandırmasından bakır boru tesisatına, drenaj uygulamasından montaj sonrası kontrollere kadar süreci bir bütün olarak değerlendiriyoruz. Uygulamaları cihazın teknik özellikleri ve üretici gereklilikleri doğrultusunda gerçekleştiriyoruz.",
    ],
  },
  {
    slug: "sogutma-sistemlerinde-periyodik-bakim",
    title: "Soğutma Sistemlerinde Periyodik Bakım Neden Önemlidir?",
    category: "Bakım",
    excerpt:
      "Market, otel ve üretim tesislerinde soğutma sistemleri kesintisiz ve yoğun çalışır. Plansız duruşların önüne geçmek için düzenli bakım neden önemlidir.",
    date: "28 Temmuz 2026",
    publishedAt: "2026-07-28",
    readingTime: "6 dk okuma",
    image: "/images/WhatsApp Image 2026-09-07 at 14.46.44.jpeg",
    imageAlt:
      "Ticari soğutma ünitelerinin bulunduğu bir çatıda kontrolleri yapan turuncu yelekli teknisyen — periyodik bakım",
    body: [
      "Soğutma sistemleri; market, restoran, otel, depo, üretim tesisi ve benzeri işletmelerde ürünlerin ve proseslerin uygun sıcaklık koşullarında tutulması için uzun süre ve yoğun şekilde çalışır. Bu sistemlerin düzenli bakımı, performansın korunması ve olası arızaların erken fark edilmesi açısından önemlidir.",
      "Zaman içerisinde evaporatör, kondenser ve fan yüzeylerinde toz ve kir birikmesi hava akışını ve ısı transferini olumsuz etkileyebilir. Özellikle kondenserin kirlenmesi, sistemin ısıyı dış ortama aktarmasını zorlaştırarak soğutma sisteminin daha ağır çalışma koşullarında çalışmasına neden olabilir. Düzenli temizlik ve kontroller, sistemin uygun çalışma koşullarının korunmasına yardımcı olur.",
      "Periyodik bakım sırasında soğutma devresinin genel durumu, boru ve bağlantı noktaları, evaporatör ve kondenser yüzeyleri, fanlar, drenaj sistemi ve cihazın çalışma durumu kontrol edilir. Soğutucu akışkanla ilgili bir eksiklik veya kaçak şüphesi bulunması halinde gerekli kontroller yapılarak durum değerlendirilir.",
      "Soğutucu akışkan eksikliği, sistemin yeterli soğutma kapasitesine ulaşmasını zorlaştırabilir. Ancak gaz eksikliği tespit edildiğinde doğrudan gaz eklemek yerine öncelikle olası sızıntının değerlendirilmesi önemlidir. Kaçak tespit edilirse gerekli onarım yapılmalı ve ardından sistem yeniden kontrol edilmelidir.",
      "Drenaj sisteminin kontrolü de bakımın önemli parçalarından biridir. Tıkalı veya düzgün çalışmayan drenaj hatları su birikmesine ve işletme içerisinde istenmeyen problemlere neden olabilir. Bu nedenle drenaj hattı ve tahliye noktalarının düzenli olarak kontrol edilmesi gerekir.",
      "Periyodik bakım yalnızca arıza meydana geldiğinde yapılan bir işlem değildir. Düzenli kontroller sayesinde kirlenme, yıpranma, performans kaybı veya arıza belirtileri daha erken fark edilebilir. Böylece plansız duruşların ve işletme faaliyetlerini etkileyebilecek beklenmedik sorunların önlenmesine yardımcı olunur.",
      "Soğutma sistemlerinde bakım sıklığı; sistemin türüne, kullanım yoğunluğuna, çalışma ortamına ve üretici tavsiyelerine göre değişebilir. Özellikle sürekli çalışan ticari soğutma sistemlerinde düzenli ve ihtiyaca uygun bir bakım planı oluşturulması, sistemin çalışma sürekliliğinin korunması açısından önem taşır.",
    ],
  },
  {
    slug: "klima-secerken-dikkat-edilmesi-gerekenler",
    title: "Klima Seçerken Dikkat Edilmesi Gerekenler",
    category: "Montaj",
    excerpt:
      "Kapasite (BTU), enerji verimliliği, inverter teknolojisi, kurulum yeri ve servis desteği — doğru klimayı seçmenin ölçütleri.",
    date: "20 Temmuz 2026",
    publishedAt: "2026-07-20",
    readingTime: "7 dk okuma",
    image: "/images/iletisim-home-img.jpg",
    imageAlt:
      "Modern bir oturma odasında duvara monte split klima — doğru cihaz seçimi için performans kriterleri",
    body: [
      "Klima seçerken yalnızca cihazın fiyatına veya görünüşüne bakmak doğru bir seçim yapmak için yeterli değildir. Kullanılacak alanın büyüklüğü, yalıtım durumu, güneş alma miktarı, kullanım amacı ve bölgenin iklim koşulları gibi birçok unsur cihaz seçiminde dikkate alınmalıdır.",
      "Klima seçiminde ilk dikkat edilmesi gereken konulardan biri kapasitedir. Klimanın kapasitesi BTU/h değeriyle ifade edilir ve kullanılacak alanın ihtiyaçlarına uygun olması gerekir. Gereğinden düşük veya yüksek kapasiteli bir cihaz tercih edilmesi, cihazın çalışma verimliliğini ve ortam konforunu olumsuz etkileyebilir. Bu nedenle kapasite belirlenirken yalnızca metrekareye değil, mekânın yalıtımı, pencere alanı, katı, güneş alma durumu ve kullanım şekli gibi faktörlere de bakılmalıdır.",
      "Enerji verimliliği, özellikle klimayı uzun süre kullanacak kişiler için önemli bir seçim kriteridir. Enerji etiketi üzerindeki SEER değeri cihazın mevsimsel soğutma verimliliği, SCOP değeri ise ısıtma verimliliği hakkında bilgi verir. A++ ve A+++ gibi enerji sınıflarının yanı sıra bu değerlerin de karşılaştırılması, farklı cihazların enerji performansını değerlendirmeye yardımcı olur.",
      "İnverter teknolojisi de seçim sırasında değerlendirilmesi gereken özelliklerden biridir. İnverter klimalarda kompresörün çalışma hızı, ortamın ihtiyacına göre ayarlanabilir. Böylece cihaz kapasitesini ihtiyaca göre değiştirebilir. Uygun kapasite ve doğru kullanım koşullarında inverter teknolojisi enerji verimliliğine katkı sağlayabilir.",
      "Klimanın kurulacağı yer de cihaz seçimi kadar önemlidir. İç ünitenin hava akışını engellemeyecek ve ortamı dengeli şekilde iklimlendirebilecek bir noktaya yerleştirilmesi gerekir. Dış ünitenin ise yeterli hava sirkülasyonuna sahip ve bakım ile servis işlemlerine erişimin mümkün olduğu bir konumda bulunması önem taşır. Bu nedenle montaj koşullarının cihaz satın alınmadan önce değerlendirilmesi faydalıdır.",
      "Klimanın kullanım amacı ve ortamın özellikleri de göz önünde bulundurulmalıdır. Ev, ofis, mağaza veya restoran gibi farklı alanların ihtiyaçları aynı değildir. Ortamdaki kişi yoğunluğu, elektronik cihazlardan kaynaklanan ısı yükü, kullanım süresi ve cihazın yalnızca soğutma mı yoksa ısıtma amacıyla da mı kullanılacağı seçim sürecini etkiler.",
      "Son olarak cihazın bakım ve servis ihtiyaçları da göz ardı edilmemelidir. Klima satın alırken yalnızca ilk maliyete değil, cihazın uzun vadeli bakım ihtiyacına, yedek parça ve teknik servis imkânlarına da dikkat edilmesi gerekir. Kolay erişilebilir teknik destek, cihazın kullanım ömrü boyunca karşılaşılabilecek bakım ve onarım ihtiyaçlarının daha sağlıklı şekilde yönetilmesine yardımcı olur.",
      "Doğru klima seçimi; kapasite, enerji verimliliği, teknoloji, kullanım alanı, montaj koşulları ve satış sonrası teknik desteğin birlikte değerlendirilmesini gerektirir. Bu kriterler dikkate alınarak yapılan bir seçim, uzun vadede daha konforlu ve verimli bir kullanım sağlayabilir.",
    ],
  },
  {
    slug: "r32-r410a-farklari",
    title: "Klimada Soğutucu Akışkan Türleri: R32 ve R410A Arasındaki Farklar",
    category: "F-Gaz",
    excerpt:
      "Her iki gaz da farklı çevresel etki ve güvenlik sınıfına sahip. R32 ile R410A arasındaki farkları ve neden birbirinin yerine kullanılmaması gerektiğini açıklıyoruz.",
    date: "12 Temmuz 2026",
    publishedAt: "2026-07-12",
    readingTime: "8 dk okuma",
    image: "/images/WhatsApp Image 2026-09-07 at 14.46.42.jpeg",
    imageAlt:
      "İki gösterge manometreden oluşan manifold seti — R32 ve R410A gibi soğutucu akışkan işlemleri",
    body: [
      "Klima ve soğutma sistemlerinde kullanılan soğutucu akışkanlar, cihazın çalışma prensibinin önemli bir parçasıdır. Günümüzde split klimalarda özellikle R32 ve R410A gibi soğutucu akışkanlarla çalışan sistemlere rastlanır. Bu iki akışkanın özellikleri birbirinden farklı olduğu için klima bakımında veya gaz işlemlerinde cihazın kullandığı akışkanın doğru şekilde belirlenmesi gerekir.",
      "R410A, uzun yıllar boyunca birçok klima sisteminde yaygın olarak kullanılan bir soğutucu akışkandır. İki farklı hidroflorokarbonun (HFC) karışımından oluşur ve ozon tabakasını inceltme potansiyeli bulunmaz. Bununla birlikte R410A'nın Küresel Isınma Potansiyeli (KIP) R32'ye göre daha yüksektir.",
      "R32 ise günümüzde birçok yeni nesil split klimada kullanılan bir soğutucu akışkandır. R410A'dan farklı olarak tek bileşenli bir gazdır ve daha düşük KIP değerine sahiptir. Bu nedenle yeni nesil klima sistemlerinde R32 kullanımının yaygınlaşmasında çevresel etkilerin azaltılması da önemli bir etkendir.",
      "R32 ve R410A arasındaki en önemli farklardan biri KIP değeridir. R32'nin KIP değeri yaklaşık 675, R410A'nın ise yaklaşık 2.088'dir. Bu değerler, gazların küresel ısınma etkilerinin CO₂'ye kıyasla ne seviyede olduğunu ifade eder. Dolayısıyla aynı miktarda gaz için R410A'nın CO₂ eşdeğeri daha yüksek olur.",
      "İki akışkanın güvenlik sınıfları da farklıdır. R32, A2L sınıfında, yani düşük yanıcılık özelliğine sahip bir soğutucu akışkandır. R410A ise A1 güvenlik sınıfındadır ve pratikte yanıcı olarak sınıflandırılmaz. Bu nedenle R32 ile çalışan sistemlerde servis ve montaj işlemlerinin cihaz üreticisinin talimatlarına ve ilgili güvenlik kurallarına uygun şekilde yapılması önemlidir.",
      "R32 ve R410A birbirinin yerine gelişigüzel kullanılabilecek gazlar değildir. Bir klimanın hangi soğutucu akışkanla çalıştığı cihazın teknik özelliklerine göre belirlenmelidir. Bu nedenle gaz eksikliği tespit edildiğinde farklı bir akışkanla tamamlamak veya cihazın sistemine uygun olmayan gaz eklemek doğru değildir.",
      "Ayrıca soğutucu akışkan eksikliği her zaman gazın kendiliğinden azalması anlamına gelmez. Sistemde eksiklik tespit edildiğinde öncelikle kaçak ihtimali değerlendirilmelidir. Sızıntı varsa gerekli onarım yapılmadan yalnızca gaz ilavesi gerçekleştirmek sorunun tekrar ortaya çıkmasına neden olabilir.",
      "Soğutucu akışkan işlemlerinde doğru gazın kullanılması, uygun miktarda şarj yapılması ve sistemin çalışma koşullarının kontrol edilmesi önemlidir. Özellikle F-Gaz kapsamındaki ekipmanlarda sızıntı kontrolü, kayıt ve ilgili teknik işlemlerin mevzuata uygun şekilde yürütülmesi gerekir.",
      "Bu nedenle klima üzerinde gaz işlemi yapılmadan önce cihazın etiketindeki soğutucu akışkan türünün kontrol edilmesi, sistemin teknik özelliklerinin değerlendirilmesi ve gerekli durumlarda sızıntı kontrolünün gerçekleştirilmesi gerekir. Doğru akışkanın, doğru miktarda ve uygun teknik yöntemlerle kullanılması sistemin güvenli ve verimli çalışmasına katkı sağlar.",
    ],
  },
  {
    slug: "kip-co2-esdegeri-nedir",
    title: "KIP Nedir? CO₂ Eşdeğeri Nasıl Hesaplanır?",
    category: "F-Gaz",
    excerpt:
      "KIP, bir soğutucu akışkanın iklim etkisini CO₂'ye göre ifade eder. CO₂ eşdeğerinin nasıl hesaplandığını ve F-Gaz yükümlülüklerinde neden belirleyici olduğunu anlatıyoruz.",
    date: "05 Temmuz 2026",
    publishedAt: "2026-07-05",
    readingTime: "6 dk okuma",
    image: "/images/WhatsApp Image 2026-09-07 at 14.46.43 (6).jpeg",
    imageAlt:
      "Bakır boru hattı üzerinde okuma yapan ölçüm cihazı — KIP ve CO₂ eşdeğeri hesabında kullanılan teknik ölçüm",
    body: [
      "Soğutma ve iklimlendirme sistemlerinde kullanılan bazı soğutucu akışkanların çevresel etkileri, yalnızca cihazda bulunan gazın kilogram miktarıyla değerlendirilmez. Bu değerlendirmede KIP (Küresel Isınma Potansiyeli) ve CO₂ eşdeğeri kavramları önemli bir yer tutar.",
      "KIP, bir soğutucu akışkanın küresel ısınmaya olan etkisini karbondioksite (CO₂) göre ifade eden değerdir. CO₂'nin KIP değeri referans olarak 1 kabul edilir. Bir soğutucu akışkanın KIP değeri ne kadar yüksekse, aynı miktardaki gazın CO₂ eşdeğeri de o kadar yüksek olur.",
      "CO₂ eşdeğeri hesaplanırken temel olarak ekipmanda bulunan soğutucu akışkanın kilogram cinsinden miktarı ile ilgili gazın KIP değeri çarpılır. Basit şekilde ifade etmek gerekirse:",
      "CO₂ eşdeğeri (ton) = Soğutucu akışkan miktarı (kg) × KIP ÷ 1.000",
      "Örneğin KIP değeri 2.088 olan bir soğutucu akışkandan 5 kg bulunduğunu düşünelim. Hesaplama 5 × 2.088 şeklinde yapılır ve sonuç 10.440 kg CO₂ eşdeğerine, yani 10,44 ton CO₂ eşdeğerine karşılık gelir.",
      "Bu hesaplama, F-Gaz kapsamındaki bazı yükümlülüklerin belirlenmesinde önemlidir. Çünkü sızıntı kontrolü gibi yükümlülükler yalnızca gazın kilogram miktarına göre değil, ekipmanda bulunan florlu sera gazının CO₂ eşdeğeri miktarına göre değerlendirilir.",
      "Kullanılan gazın türü değiştiğinde KIP değeri de değişebileceği için aynı miktarda farklı soğutucu akışkan farklı CO₂ eşdeğeri oluşturabilir. Bu nedenle bir klima veya soğutma sisteminin F-Gaz kapsamındaki durumunu değerlendirirken cihaz etiketindeki soğutucu akışkan türü ve miktarının doğru şekilde belirlenmesi gerekir.",
      "KIP ve CO₂ eşdeğeri hesabının doğru yapılması; ekipmanın hangi yükümlülüklere tabi olduğunun değerlendirilmesi, sızıntı kontrol aralıklarının belirlenmesi ve ilgili kayıtların doğru şekilde tutulması açısından önem taşır.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

/** Liste görünümünde sayfa başına gösterilecek yazı sayısı (3'lü grid düzeni). */
export const blogPostsPerPage = 6;

/**
 * `page` için yazıları (yeni→eski) dilimlenmiş olarak döndürür.
 * Sayfa dışına taşan `page` değerlerini [1, totalPages] aralığına sabitler,
 * böylece `?page=999` veya `?page=0` güvenli bir sonuç üretir.
 */
export function getBlogPosts(page = 1) {
  const sorted = [...blogPosts].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
  const totalPages = Math.max(
    1,
    Math.ceil(sorted.length / blogPostsPerPage),
  );
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * blogPostsPerPage;
  return {
    posts: sorted.slice(start, start + blogPostsPerPage),
    totalPages,
    page: safePage,
  };
}

/** Mevcut yazı hariç, ilgili diğer yazıları döndürür (en fazla `count`). */
export function getRelatedPosts(slug: string, count = 3) {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, count);
}

/**
 * En son paylaşılan yazıları döndürür (varsayılan 3).
 * publishedAt ISO tarihine göre azalan sıralanır.
 */
export function getLatestPosts(count = 3) {
  return [...blogPosts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, count);
}
