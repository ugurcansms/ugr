import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { MediaFigure } from "@/components/media-figure";
import { serviceCategories } from "@/lib/services";

/**
 * Hizmet detay içeriği — /hizmetler sayfasında kullanılır.
 * Başlık/intro bölümü sayfanın PageHero bileşeni tarafından sağlanır.
 */
export function Services() {
  return (
    <section className="bg-paper-white py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <MediaFigure
          src="/images/EKOFAR-2.webp"
          alt="Dış ünite bağlantısı üzerinde çalışan iki teknisyen — montaj ve kurulum sahnesi"
          aspect="21 / 8"
          priority
          className="mb-16"
          caption="Montaj ekibimiz sahadan — dış ünite bağlantıları"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {serviceCategories.map((category) => (
            <article
              key={category.id}
              className="group flex flex-col rounded-[24px] bg-mist-gray p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-[480] uppercase tracking-[0.1em] text-ash-gray">
                  {category.index} · {category.title}
                </span>
                <span className="grid size-9 place-items-center rounded-full border border-ink-black/[0.14] text-ink-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>

              <ul className="mt-8 space-y-6">
                {category.items.map((item, i) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-paper-white text-[12px] font-[500] text-slate-gray">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-[17px] font-[480] leading-snug text-ink-black">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[14.5px] font-[400] leading-[1.55] text-slate-gray">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Link
                  href={`/hizmetler/${category.id}`}
                  className="inline-block text-[15px] font-[430] text-ink-black decoration-ink-black/30 underline-offset-4 hover:underline"
                >
                  Detaylı bilgi <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
