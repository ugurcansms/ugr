export type ServiceItem = {
  title: string;
  desc: string;
};

export type ServiceHighlight = {
  title: string;
  desc: string;
};

export type ServiceCategory = {
  id: string; // aynı zamanda [slug]
  index: string;
  title: string;
  summary: string;
  intro: string;
  image: string;
  imageAlt: string;
  description: string[];
  highlights: ServiceHighlight[];
  items: ServiceItem[];
};

// Müşterinin ilettiği hizmet metinleri — birebir korundu.
export const serviceCategories: ServiceCategory[] = [
  {
    id: "montaj-ve-kurulum",
    index: "01",
    title: "Montaj ve Kurulum",
    summary:
      "İç ve dış ünite montajı, bakır boru tesisatı, vakumlama ve demontajı kapsayan anahtar teslim kurulum.",
    intro:
      "Profesyonel montajla sisteminizin güvenli, verimli ve uzun ömürlü çalışmasını sağlayın.",
    image: "/images/EKOFAR-2.webp",
    imageAlt:
      "Dış ünite bağlantıları üzerinde çalışan iki teknisyen — montaj ve kurulum sahnesi",
    description: [
      "Montaj öncesinde iç ve dış ünitelerin konumlandırılacağı alanı değerlendiriyor, cihazın kapasitesi, hava akışı, servis erişimi ve çalışma koşullarına uygun montaj noktalarını belirliyoruz.",
      "Bakır boru tesisatı, drenaj hattı ve elektrik bağlantıları cihazın teknik özelliklerine uygun şekilde uygulanır. Boru hatlarında gerekli izolasyon sağlanarak bağlantı noktaları kontrol edilir.",
      "Montaj sonrasında soğutucu devredeki hava ve nemin uzaklaştırılması için vakumlama işlemi gerçekleştirilir. Sistem devreye alınarak bağlantılar, çalışma koşulları ve genel performans kontrol edilir.",
      "Taşınma, yenileme veya cihaz değişimi durumlarında mevcut klima ve soğutma sistemlerinin demontajı da kontrollü şekilde gerçekleştirilir.",
    ],
    highlights: [
      {
        title: "İç & Dış Ünite Montajı",
        desc: "İç ve dış ünitelerin cihaz performansını, hava akışını ve servis erişimini destekleyecek uygun noktalara güvenli şekilde montajı yapılır.",
      },
      {
        title: "Bakır Boru & Kablo Tesisatı",
        desc: "Bakır boru, drenaj ve elektrik bağlantıları uygun güzergâhtan uygulanır. Boru tesisatında gerekli izolasyon işlemleri gerçekleştirilir.",
      },
      {
        title: "Vakumlama",
        desc: "Soğutucu devredeki hava ve nemin uzaklaştırılması için uygun vakumlama işlemi gerçekleştirilir. Sistem devreye alma öncesinde kontrol edilir.",
      },
      {
        title: "Test & Devreye Alma",
        desc: "Montaj tamamlandıktan sonra bağlantılar, sistemin çalışma durumu ve temel performans değerleri kontrol edilerek cihaz güvenli şekilde devreye alınır.",
      },
    ],
    items: [
      {
        title: "Keşif & Konumlandırma",
        desc: "Montaj öncesinde cihaz kapasitesi, hava akışı ve servis erişimi gözetilerek en uygun kurulum noktası belirlenir.",
      },
      {
        title: "Demontaj (Söküm)",
        desc: "Taşınma, yenileme veya cihaz değişiminde mevcut sistemler kontrollü şekilde sökülür ve yeniden kuruluma hazırlanır.",
      },
      {
        title: "Belgeli Devreye Alma",
        desc: "Montaj tamamlandıktan sonra sistem, yapılan işlemlerin kaydı ve garantiyle birlikte güvenli şekilde teslim edilir.",
      },
    ],
  },
  {
    id: "periyodik-bakim-ve-sistem-kontrolu",
    index: "02",
    title: "Periyodik Bakım ve Sistem Kontrolü",
    summary:
      "Filtre temizliği, evaporatör-kondanser kontrolü, drenaj ve soğutucu akışkan işlemleriyle cihaz ömrünü ve verimliliğini koruyan bakım.",
    intro:
      "Periyodik bakımla cihaz ömrünü destekleyin, enerji verimliliğini koruyun ve olası arızaları büyümeden tespit edin.",
    image: "/images/WhatsApp Image 2026-09-07 at 14.46.44.jpeg",
    imageAlt:
      "HVAC sisteminin boru hatları üzerinde bakım yapan turuncu baretli teknisyen — periyodik bakım ve sistem kontrolü",
    description: [
      "Düzenli bakım; filtrelerin temizlenmesi, evaporatör ve kondanser yüzeylerinin kontrolü, drenaj sisteminin incelenmesi ve cihazın genel çalışma durumunun değerlendirilmesini kapsar.",
      "İç ve dış ünitelerde zaman içerisinde oluşan toz ve kir birikintileri hava akışını ve ısı transferini olumsuz etkileyebilir. Yapılan temizlik ve kontrollerle sistemin verimli çalışması desteklenir.",
      "Bakım sırasında elektriksel bağlantılar, fanlar, drenaj hattı ve cihazın genel performansı da kontrol edilir. Tespit edilen performans kayıpları veya olası arıza belirtileri değerlendirilerek gerekli teknik müdahale planlanır.",
      "Soğutucu akışkan eksikliği veya kaçak şüphesi bulunması halinde öncelikle sistemin durumu ve olası sızıntılar kontrol edilir. Gerekli teknik işlemler tamamlandıktan sonra, cihazın özelliklerine uygun soğutucu akışkan işlemleri gerçekleştirilir.",
    ],
    highlights: [
      {
        title: "Filtre Temizliği",
        desc: "Toz ve kir birikintilerinin filtrelerden arındırılmasıyla hava akışının ve cihazın hijyenik çalışma koşullarının korunmasına yardımcı olunur.",
      },
      {
        title: "Evaporatör & Kondanser",
        desc: "İç ve dış ünitelerdeki ısı transfer yüzeyleri kontrol edilerek gerekli temizlik işlemleri gerçekleştirilir ve cihazın çalışma verimliliği desteklenir.",
      },
      {
        title: "Drenaj Kontrolü",
        desc: "Drenaj hattı ve tavası kontrol edilerek tıkanıklık, su akıtma ve koku gibi problemlerin önüne geçilmesi hedeflenir.",
      },
      {
        title: "Performans Kontrolü",
        desc: "Cihazın çalışma durumu, elektriksel aksamı, hava akışı ve genel performansı kontrol edilerek olası sorunlar erken aşamada belirlenir.",
      },
    ],
    items: [
      {
        title: "Soğutucu Akışkan Kontrolü",
        desc: "Akışkan eksikliği veya kaçak şüphesinde sızıntılar kontrol edilir; gerekli işlemler sonrası cihazın özelliklerine uygun akışkan işlemleri gerçekleştirilir.",
      },
      {
        title: "Elektrik & Fan Kontrolü",
        desc: "Bakım sırasında elektriksel bağlantılar ve fanlar kontrol edilerek olası sorunlar erken aşamada belirlenir.",
      },
      {
        title: "Arıza Tespiti & Müdahale",
        desc: "Tespit edilen performans kayıpları veya olası arıza belirtileri değerlendirilerek gerekli teknik müdahale planlanır.",
      },
    ],
  },
  {
    id: "onarim-ve-teknik-servis",
    index: "03",
    title: "Onarım ve Teknik Servis",
    summary:
      "Arıza tespiti, yedek parça değişimi ve onarımla cihazın güvenli çalışmasını sağlayan hızlı teknik servis.",
    intro:
      "Arızanın kaynağını doğru tespit edin, gerekli müdahaleyi zamanında gerçekleştirin ve klima ve soğutma sisteminizin güvenli şekilde çalışmasını sağlayın.",
    image: "/images/arkom-bn-2.jpg",
    imageAlt:
      "Eldivenli bir teknisyenin kablo bağlantısı üzerinde tornavida ile çalışması — arıza tespiti",
    description: [
      "Klima ve soğutma sistemlerinde meydana gelen çalışmama, yetersiz soğutma, su akıtma, anormal ses ve performans kaybı gibi durumlarda öncelikle cihazın ve sistemin genel çalışma durumu kontrol edilir.",
      "Arızanın kaynağını belirlemek amacıyla kompresör, fan motoru, sensör, kapasitör, drenaj sistemi, soğutucu devre ve ilgili mekanik bileşenler incelenir.",
      "Tespit edilen arızaya göre gerekli teknik müdahale, onarım veya parça değişimi gerçekleştirilir. İşlem sonrasında sistem yeniden çalıştırılarak cihazın çalışma durumu kontrol edilir.",
      "Soğutucu akışkanla ilgili bir problem veya kaçak şüphesi bulunması halinde sistem ayrıca değerlendirilir ve gerekli durumlarda sızıntı kontrolü gerçekleştirilir.",
    ],
    highlights: [
      {
        title: "Arıza Tespiti",
        desc: "Çalışmama, yetersiz soğutma, su akıtma, anormal ses ve performans kaybı gibi problemlerin kaynağı belirlenir.",
      },
      {
        title: "Yedek Parça Değişimi",
        desc: "Arızalı veya kullanım ömrünü tamamlamış parçalar tespit edilerek cihazın teknik özelliklerine uygun yedek parçalarla değişimi gerçekleştirilir.",
      },
      {
        title: "Hızlı Müdahale",
        desc: "Arıza bildiriminden sonra uygun planlama yapılarak teknik ekibimizle mümkün olan en kısa sürede müdahale gerçekleştirilir.",
      },
      {
        title: "Onarım",
        desc: "Tespit edilen arızaya yönelik gerekli onarım ve teknik müdahaleler gerçekleştirilerek sistemin yeniden güvenli şekilde çalışması sağlanır.",
      },
    ],
    items: [
      {
        title: "Mekanik & Elektronik Onarım",
        desc: "Kompresör, fan motoru, sensör, kapasitör ve elektronik kart gibi bileşenlerdeki arızalar giderilir.",
      },
      {
        title: "Soğutucu Devre & Kaçak Kontrolü",
        desc: "Soğutucu akışkanla ilgili problem veya kaçak şüphesinde sistem ek olarak değerlendirilir ve sızıntı kontrolü yapılır.",
      },
      {
        title: "Test & Devreye Alma",
        desc: "Onarım sonrası sistem yeniden çalıştırılarak cihazın çalışma durumu ve performansı kontrol edilir.",
      },
    ],
  },
  {
    id: "f-gaz-sizinti-kontrolu-ve-ekomvet",
    index: "04",
    title: "F-Gaz Sızıntı Kontrolü ve EKOMVET",
    summary:
      "Florlu sera gazı içeren soğutma ve iklimlendirme ekipmanlarında sızıntı kontrolleri, teknik işlemler ve EKOMVET kapsamındaki kayıt süreçleri profesyonel şekilde yürütülür.",
    intro:
      "MYK belgeli teknik personelimizle mevzuat kapsamındaki F-Gaz süreçlerinde güvenilir ve kontrollü hizmet sunuyoruz.",
    image: "/images/WhatsApp Image 2026-09-07 at 14.46.43 (5).jpeg",
    imageAlt:
      "Gaz kaçağı dedektör probuyla AC ünitesi yanında sızıntı kontrolü yapan teknisyenin eli — F-Gaz ölçümü ve tespit",
    description: [
      "Florlu sera gazı içeren veya çalışması bu gazlara dayanan soğutma ve iklimlendirme ekipmanlarında sızıntıların kontrol edilmesi; çevresel etkilerin azaltılması, sistem performansının korunması ve ilgili mevzuat kapsamındaki yükümlülüklerin yerine getirilmesi açısından önemlidir.",
      "Sızıntı kontrolünde soğutucu devre, boru hatları, bağlantı noktaları, vanalar ve ilgili ekipmanlar incelenerek olası soğutucu akışkan kaçakları araştırılır.",
      "Sızıntı tespit edilmesi halinde kaçağın kaynağı belirlenir ve gerekli onarım gerçekleştirilir. Onarım sonrasında, mevzuatta öngörülen durumlarda sızıntının giderildiğini doğrulamaya yönelik takip kontrolü yapılır.",
      "EKOMVET kapsamında bulunan ekipmanlarda; kurulum, bakım veya servis, onarım ve sızıntı kontrolü gibi faaliyetlere ilişkin kayıtların sistem üzerinden takip edilmesine yönelik teknik süreçler yürütülür.",
    ],
    highlights: [
      {
        title: "F-Gaz Sızıntı Kontrolü",
        desc: "Mevzuat kapsamında sızıntı kontrolüne tabi ekipmanlarda soğutucu devre, boru hatları, bağlantı noktaları ve ilgili bileşenler kontrol edilerek olası kaçaklar araştırılır.",
      },
      {
        title: "Kaçak Tespiti & Onarım",
        desc: "Sızıntı tespit edilmesi halinde kaçak noktası belirlenir ve gerekli teknik onarım gerçekleştirilir. Onarım sonrasında gerekli takip kontrolü yapılır.",
      },
      {
        title: "EKOMVET Kayıt & Faaliyet Takibi",
        desc: "EKOMVET kapsamındaki ekipmanlara ilişkin kurulum, bakım veya servis, onarım ve sızıntı kontrolü gibi faaliyetlerin kayıt ve takip süreçleri yürütülür.",
      },
      {
        title: "Raporlama & Belgelendirme",
        desc: "Gerçekleştirilen sızıntı kontrolleri ve teknik işlemler raporlanarak müşteriye sunulur. İlgili süreçlere ait kayıt ve belgeler düzenli şekilde takip edilir.",
      },
    ],
    items: [
      {
        title: "Sızıntı Arama & Tespit",
        desc: "Soğutucu devre, boru hatları, bağlantı noktaları ve vanalar incelenerek olası soğutucu akışkan kaçakları araştırılır.",
      },
      {
        title: "Onarım & Takip Kontrolü",
        desc: "Tespit edilen kaçağın kaynağı giderilir; mevzuatta öngörülen durumlarda sızıntının giderildiğini doğrulayan takip kontrolü yapılır.",
      },
      {
        title: "Mevzuat Uyumu & Kayıtlar",
        desc: "EKOMVET kapsamındaki faaliyetlere ilişkin kayıt ve belgeler sistem üzerinden düzenli şekilde takip edilerek mevzuata uyum desteklenir.",
      },
    ],
  },
];

export function getServiceCategory(slug: string) {
  return serviceCategories.find((cat) => cat.id === slug);
}

export const processSteps = [
  {
    index: "01",
    title: "Bildirim",
    desc: "Telefon veya iletişim formu üzerinden talep alınır, ihtiyaç değerlendirilerek randevu oluşturulur.",
  },
  {
    index: "02",
    title: "Tespit",
    desc: "Arıza, bakım veya F-Gaz kapsamında gerekli kontroller yerinde gerçekleştirilerek ihtiyaç belirlenir.",
  },
  {
    index: "03",
    title: "Müdahale",
    desc: "Montaj, bakım, onarım ve gerekli teknik işlemler yetkin teknisyenler tarafından gerçekleştirilir.",
  },
  {
    index: "04",
    title: "Raporlama",
    desc: "Gerçekleştirilen işlemler ve ölçüm sonuçları kayıt altına alınarak müşteriye sunulur.",
  },
];

