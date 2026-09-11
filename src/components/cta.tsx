import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

import { MediaFigure } from "@/components/media-figure";
import { Button } from "@/components/ui/button";
import { SectionTag } from "@/components/section-tag";
import { brand } from "@/lib/brand";

export function Cta() {
  return (
    <section id="iletisim" className="scroll-mt-24 bg-paper-white py-24 md:py-32">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
        {/* Copy */}
        <div className="flex min-w-0 flex-col">
          <SectionTag>Servis Talep Et</SectionTag>
          <h2 className="mt-4 max-w-[18ch] font-signifier text-[clamp(36px,4.8vw,58px)] font-[400] leading-[1.18] tracking-[-0.015em] text-ink-black">
           <em className="italic">Doğru Müdahale</em>
          </h2>
          <p className="mt-6 max-w-[52ch] text-[17px] font-[400] leading-[1.6] text-slate-gray">
            Klima montajı, bakım, onarım veya F-Gaz ölçümü için talebinizi iletin; servis sürecinizi hızlıca planlayalım.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <Button
              render={<a href={brand.phoneHref} />}
              className="h-12 rounded-full bg-ink-black px-8 text-[16px] font-[430] text-paper-white hover:bg-ink-black/85"
            >
              <Phone className="size-4" /> {brand.phone}
            </Button>
            <Button
              render={<Link href="/iletisim" />}
              variant="outline"
              className="h-12 rounded-full border-ink-black bg-transparent px-8 text-[16px] font-[430] text-ink-black hover:bg-mist-gray hover:text-ink-black"
            >
              Bize Ulaşın <span aria-hidden="true">→</span>
            </Button>
          </div>

          {/* Emergency composer — the design's "input + dark circular button" motif */}
          <div className="mt-10 flex w-full max-w-[520px] items-center gap-3 rounded-[16px] border border-ink-black/[0.08] bg-paper-white p-3 shadow-artifact">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-mist-gray text-slate-gray">
              <Phone className="size-5" />
            </span>
            <span className="min-w-0 flex-1 truncate text-left text-[15px] font-[430] text-smoke-gray">
              Klimanız mı arızalandı? 7/24 hattımız açık.
            </span>
            <a
              href={brand.phoneHref}
              aria-label="Hemen ara"
              className="grid size-11 shrink-0 place-items-center rounded-full bg-ink-black text-paper-white transition-transform duration-300 hover:scale-105"
            >
              <ArrowRight className="size-5" />
            </a>
          </div>

          <p className="mt-5 text-[13px] font-[430] text-ash-gray">
            Servis talepleriniz için 7/24 iletişim hattımızdan bize ulaşabilirsiniz.
          </p>
        </div>

        {/* Photo — wall AC blowing cool air, matching the "serinlik" promise */}
        <MediaFigure
          src="/images/iletisim-home-img.jpg"
          alt="Soğuk hava üfleyen beyaz duvar kliması — serin kalmak bir garanti"
          aspect="16 / 10"
          priority
          className="order-first min-w-0 lg:order-last"
          caption="Duvar tipi split klima — çalışma anı"
        />
      </div>
    </section>
  );
}
