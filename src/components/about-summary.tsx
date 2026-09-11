import Link from "next/link";

import { MediaFigure } from "@/components/media-figure";
import { SectionTag } from "@/components/section-tag";
import { Button } from "@/components/ui/button";

export function AboutSummary() {
  return (
    <section className="bg-paper-white py-24 md:py-32">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionTag>Hakkımızda</SectionTag>
          <h2 className="mt-4 font-signifier text-[clamp(36px,4.6vw,50px)] font-[400] leading-[1.2] tracking-[-0.015em] text-ink-black">
            Geleceği İklimlendiriyor, <em className="italic">Yüksek Standartlarda</em> Hizmet Sunuyoruz.
          </h2>
          <p className="mt-6 max-w-[52ch] text-[16px] font-[400] leading-[1.6] text-slate-gray">
            UGR Ölçüm ve İklimlendirme olarak; iklimlendirme sistemlerinizin montaj, 
            bakım, onarım ve detaylı temizlik süreçlerinin yanı sıra F-Gaz kontrolü ve 
            sızıntı testlerini tek bir profesyonel çatı altında sunuyoruz. 
            Tüm operasyonlarımızı alanında sertifikalı uzman teknik ekibimizle güvenle yürütüyoruz.
          </p>
          <Button
            render={<Link href="/hakkimizda" />}
            className="mt-8 h-12 rounded-full bg-ink-black px-8 text-[16px] font-[430] text-paper-white hover:bg-ink-black/85"
          >
            Devamını Oku <span aria-hidden="true">→</span>
          </Button>
        </div>

        <MediaFigure
          src="/images/arkom-bn-1.jpg"
          alt="Çatıda dış ünite bağlantıları üzerinde çalışan teknisyen — saha kurulum"
          aspect="4 / 3"
          caption="Sahadaki ekibimiz — kurulum ve ölçüm anları"
        />
      </div>
    </section>
  );
}
