import type { Metadata } from "next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBanner } from "@/components/cta-banner";
import { MediaFigure } from "@/components/media-figure";
import { PageHero } from "@/components/page-hero";
import { SectionTag } from "@/components/section-tag";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "UGR Ölçüm ve İklimlendirme — klima montaj, bakım, onarım ve F-Gaz emisyon ölçümünü aynı çatı altında, belgeli teknisyenlerle yürüten firma.",
};

const values = [
  {
    title: "Sertifikalı Uzmanlık",
    desc: "Tüm teknik kadromuz F-Gaz belgelidir; her operasyon kayıt altına alınır.",
  },
  {
    title: "Ölçüme Dayalı Hizmet",
    desc: "Hizmet süreçleri, tahmin yerine ölçüm cihazları ve resmî raporlar doğrultusunda yürütülür.",
  },
  {
    title: "Kesintisiz Destek",
    desc: "Acil durumlarda kurumsal ve bireysel sistemlere 7/24 teknik müdahale sağlanır.",
  },
  {
    title: "Şeffaf Raporlama",
    desc: "Gerçekleştirilen her işlem; dolum, ölçüm ve belge numarası bilgileriyle raporlanır.",
  },
];

const certifications = [
  {
    title: "F-Gaz Yetki Belgesi",
    desc: "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından verilen F-Gaz yetki belgesine sahiptir.",
  },
  {
    title: "TSE Hizmet Yeterlilik",
    desc: "Türk Standartları Enstitüsü tarafından belgelendirilmiş hizmet yeterlilik belgesine sahiptir.",
  },
  {
    title: "Teknisyen Sertifikaları",
    desc: "Tüm teknik personel, gaz ve elektrik güvenliği alanlarında gerekli sertifikalara sahiptir.",
  },
];

const missionVision = {
  mission:
    "Ölçüme dayalı çalışan iklimlendirme ekibimiz ile; montajdan bakıma, onarımdan F-Gaz emisyon ölçümüne kadar tüm süreçleri kayıt altına alarak, müşterilerimize şeffaf ve güvenilir hizmet sunmak.",
  vision:
    "F-Gaz emisyon ölçümünü standart hizmet haline getirerek; soğutma sistemlerinin çevresel etkisini azaltan, ölçüm disiplini ve teknik güvenilirliğiyle öncü bir servis olmak.",
};

const faqs = [
  {
    q: "Klima bakımı ne sıklıkla yapılmalı?",
    a: "Klima sistemlerinin yılda en az bir kez profesyonel bakımının yapılması önerilmektedir. Cihazın kullanım yoğunluğu ve bulunduğu ortamın koşullarına bağlı olarak bakım sıklığının artırılması gerekebilir. Düzenli bakım, cihazın verimli çalışmasına, kullanım ömrünün korunmasına ve enerji tüketiminin azaltılmasına katkı sağlar.",
  },
  {
    q: "F-Gaz ölçümü ve dolumu neden yetkili serviste yapılmalı?",
    a: "F-Gaz ölçüm, dolum ve geri kazanım işlemleri, ilgili mevzuata ve teknik gerekliliklere uygun olarak yetkin ve belgeli teknik personel tarafından gerçekleştirilmelidir. Yetkisiz müdahaleler, cihazın çalışma performansını ve güvenliğini olumsuz etkileyebileceği gibi mevzuat kapsamında hukuki sorumluluklar da doğurabilir.",
  },
  {
    q: "Sistemimde gaz kaçağı var mı, nasıl anlarım?",
    a: "Klimanın yeterli soğutma performansı göstermemesi veya kapasitesinde belirgin düşüş yaşanması, soğutucu akışkan eksikliği ya da kaçak ihtimalini gösterebilir. Kesin tespit için sistemin uygun teknik ekipmanlarla kontrol edilmesi ve kaçak noktalarının profesyonel yöntemlerle belirlenmesi gerekir.",
  },
  {
    q: "Yapılan işlemler garanti kapsamında mı?",
    a: "Gerçekleştirilen servis işlemleri ve kullanılan yedek parçalar, belirlenen garanti koşulları kapsamında güvence altına alınmaktadır. Yapılan servis işlemleri, işlem detaylarını içeren servis raporu ile kayıt altına alınmaktadır.",
  },
  {
    q: "Müdahale süresi ve varış ne kadar?",
    a: "İstanbul genelinde ortalama servis varış süresi 2 saattir. Acil durumlarda 7/24 servis hattı üzerinden talepler alınmakta ve uygun ekiplerin en kısa sürede yönlendirilmesi sağlanmaktadır.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title={
          <>
            Ölçümden <em className="italic">garantiye</em> uzanan hizmet.
          </>
        }
        intro="Klima bakım ve onarımını F-Gaz emisyon ölçümüyle aynı çatı altında topluyor; her müdahaleyi belgeli ve raporlu yürütüyoruz."
      />

      {/* Story */}
      <section className="bg-paper-white py-24 md:py-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTag>Kurumsal Kimlik</SectionTag>
            <h2 className="mt-4 font-signifier text-[clamp(32px,4.2vw,48px)] font-[400] leading-[1.22] tracking-[-0.015em] text-ink-black">
              Teknik bilgiyi, ölçüm <em className="italic">disipliniyle</em>{" "}
              buluşturuyoruz.
            </h2>
            <div className="mt-6 space-y-4 text-[16px] font-[400] leading-[1.7] text-slate-gray">
              <p>
                UGR Ölçüm ve İklimlendirme; klima montaj, bakım ve onarım
                hizmetlerini F-Gaz emisyon ölçümüyle aynı çatı altında
                birleştirmek amacıyla kurulmuştur.
              </p>
              <p>
                Temel hedef; her işlemi somut verilere dayandırmak, her
                müdahaleyi belgelendirmek ve süreçlerde herhangi bir
                belirsizliğe yer vermemektir. Bireysel konutlardan otel ve ofis
                binalarına uzanan geniş bir sahada, belgeli teknisyen kadrosu ile
                profesyonel hizmet sağlanmaktadır.
              </p>
            </div>
          </div>
          <MediaFigure
            src="/images/closeup-manual-worker.jpg"
            alt="Gözlüklü bir teknisyenin hava üfleyiciyle klima filtresini temizlemesi — ölçüme dayalı bakım"
            aspect="4 / 3"
            caption="Ölçüme dayalı bakım — filtre temizliğinden doğrulamaya"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-fog-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTag>Misyon & Vizyon</SectionTag>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[24px] bg-paper-white p-7 md:p-9">
              <span className="text-[13px] font-[480] uppercase tracking-[0.12em] text-ash-gray">
                Misyon
              </span>
              <p className="mt-4 text-[20px] font-[480] leading-[1.5] tracking-[-0.01em] text-ink-black">
                {missionVision.mission}
              </p>
            </div>
            <div className="rounded-[24px] bg-mist-gray p-7 md:p-9">
              <span className="text-[13px] font-[480] uppercase tracking-[0.12em] text-ash-gray">
                Vizyon
              </span>
              <p className="mt-4 text-[20px] font-[480] leading-[1.5] tracking-[-0.01em] text-ink-black">
                {missionVision.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTag>Değerlerimiz</SectionTag>
          <h2 className="mt-4 font-signifier text-[clamp(32px,4.2vw,48px)] font-[400] leading-[1.22] tracking-[-0.015em] text-ink-black">
            Bizi biz yapan <em className="italic">dört</em> ilke.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <div key={value.title} className="rounded-[24px] bg-mist-gray p-6 md:p-7">
                <span className="text-[13px] font-[480] text-ash-gray">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[18px] font-[480] text-ink-black">
                  {value.title}
                </h3>
                <p className="mt-2 text-[14px] font-[400] leading-[1.6] text-slate-gray">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-paper-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionTag>Sertifikalar</SectionTag>
              <h2 className="mt-4 font-signifier text-[clamp(32px,4.2vw,48px)] font-[400] leading-[1.22] tracking-[-0.015em] text-ink-black">
                Yetki ve belgelerimiz.
              </h2>
            </div>
            <p className="max-w-[380px] text-[15px] font-[400] leading-[1.55] text-slate-gray md:pb-2 md:text-right">
              Tüm hizmet süreçleri, yasal mevzuata uygun ve denetime hazır belgelerle yürütülmektedir.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.title} className="rounded-[24px] bg-mist-gray p-7">
                <h3 className="text-[18px] font-[480] text-ink-black">
                  {cert.title}
                </h3>
                <p className="mt-2 text-[14.5px] font-[400] leading-[1.6] text-slate-gray">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-fog-white py-24 md:py-32">
        <div className="mx-auto max-w-[820px] px-6">
          <div className="text-center">
            <SectionTag>Sık Sorulan Sorular</SectionTag>
            <h2 className="mt-4 font-signifier text-[clamp(32px,4.2vw,48px)] font-[400] leading-[1.22] tracking-[-0.015em] text-ink-black">
              Merak edilenler.
            </h2>
          </div>
          <Accordion className="mt-12 divide-y divide-ink-black/[0.06]">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-left text-[17px] font-[480] text-ink-black">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-[1.65] text-slate-gray">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBanner
        title="Bizimle İletişime Geçin."
        description="Ücretsiz keşif ve size özel fiyat teklifi için bizimle iletişime geçin."
      />
    </>
  );
}
