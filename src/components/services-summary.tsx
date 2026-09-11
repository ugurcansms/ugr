import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { MediaFigure } from "@/components/media-figure";
import { SectionTag } from "@/components/section-tag";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/lib/services";

export function ServicesSummary() {
  return (
    <section id="hizmetler" className="scroll-mt-24 bg-fog-white py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionTag>Hizmetler</SectionTag>
            <h2 className="mt-4 max-w-[18ch] font-signifier text-[clamp(38px,5vw,60px)] font-[400] leading-[1.18] tracking-[-0.015em] text-ink-black">
              Dört başlıkta kesintisiz <em className="italic">hizmet</em>.
            </h2>
          </div>
          <p className="max-w-[380px] text-[16px] font-[400] leading-[1.55] text-slate-gray md:pb-2 md:text-right">
            Montajdan bakıma, onarımdan F-Gaz ölçümüne kadar iklimlendirme sistemlerinin ihtiyaç duyduğu teknik hizmet.
          </p>
        </div>

        <MediaFigure
          src="/images/EKOFAR-2.webp"
          alt="Dış ünite bağlantısı üzerinde çalışan iki teknisyen — montaj ve kurulum sahnesi"
          aspect="21 / 8"
          priority
          className="mt-14"
          caption="Montaj ekibimiz sahadan — dış ünite bağlantıları"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((category) => (
            <Link
              key={category.id}
              href={`/hizmetler/${category.id}`}
              className="group flex flex-col rounded-[24px] bg-mist-gray p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="text-[13px] font-[480] uppercase tracking-[0.1em] text-ash-gray">
                {category.index} · {category.title}
              </span>
              <p className="mt-4 text-[15px] font-[400] leading-[1.55] text-slate-gray">
                {category.summary}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-[430] text-ink-black">
                İncele
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            render={<Link href="/hizmetler" />}
            className="h-12 rounded-full bg-ink-black px-8 text-[16px] font-[430] text-paper-white hover:bg-ink-black/85"
          >
            Tüm Hizmetlerimizi İnceleyin <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
