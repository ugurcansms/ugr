import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { notFound } from "next/navigation";

import { CtaBanner } from "@/components/cta-banner";
import { MediaFigure } from "@/components/media-figure";
import { PageHero } from "@/components/page-hero";
import { SectionTag } from "@/components/section-tag";
import { Button } from "@/components/ui/button";
import { getServiceCategory, serviceCategories } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceCategories.map((cat) => ({ slug: cat.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = getServiceCategory(slug);
  return {
    title: cat?.title ?? "Hizmetler",
    description: cat?.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = getServiceCategory(slug);
  if (!cat) notFound();

  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        title={cat.title}
        intro={cat.intro}
      />

      {/* Description + image */}
      <section className="bg-paper-white py-24 md:py-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTag>{cat.title}</SectionTag>
            <h2 className="mt-4 font-signifier text-[clamp(32px,4.2vw,48px)] font-[400] leading-[1.22] tracking-[-0.015em] text-ink-black">
              Nasıl çalışıyoruz?
            </h2>
            <div className="mt-6 space-y-4 text-[16px] font-[400] leading-[1.7] text-slate-gray">
              {cat.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
          <MediaFigure
            src={cat.image}
            alt={cat.imageAlt}
            aspect="4 / 3"
            caption={`${cat.title} — sahadan bir an`}
          />
        </div>
      </section>

      {/* Highlights — "Neler dahil" */}
      <section className="bg-fog-white py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTag>Neler dahil</SectionTag>
          <h2 className="mt-4 font-signifier text-[clamp(32px,4.2vw,48px)] font-[400] leading-[1.22] tracking-[-0.015em] text-ink-black">
            Her işlemde <em className="italic">güvenceli</em> adımlar.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {cat.highlights.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-[24px] bg-mist-gray p-6 md:p-7"
              >
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-paper-white text-[13px] font-[500] text-ink-black">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[18px] font-[480] text-ink-black">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] font-[400] leading-[1.6] text-slate-gray">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full item list */}
      <section className="bg-paper-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTag>Kapsam</SectionTag>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {cat.items.map((item) => (
              <li
                key={item.title}
                className="rounded-[24px] bg-mist-gray p-6 md:p-7"
              >
                <span className="grid size-6 place-items-center rounded-full border border-ink-black/[0.16] text-ink-black">
                  <Check className="size-3.5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-[17px] font-[480] text-ink-black">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[14.5px] font-[400] leading-[1.55] text-slate-gray">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Other services + CTA */}
      <section className="bg-fog-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionTag>Diğer hizmetler</SectionTag>
              <div className="mt-4 flex flex-wrap gap-3">
                {serviceCategories
                  .filter((c) => c.id !== cat.id)
                  .map((c) => (
                    <Button
                      key={c.id}
                      render={<Link href={`/hizmetler/${c.id}`} />}
                      variant="outline"
                      className="h-10 rounded-full border-ink-black/25 bg-transparent px-5 text-[14px] font-[430] text-ink-black hover:bg-mist-gray"
                    >
                      {c.title}
                    </Button>
                  ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                render={<Link href="/hizmetler" />}
                variant="ghost"
                className="h-12 rounded-full px-6 text-[15px] font-[430] text-ink-black hover:bg-mist-gray"
              >
                <span aria-hidden="true">←</span> Tüm Hizmetler
              </Button>
              <Button
                render={<Link href="/iletisim" />}
                className="h-12 rounded-full bg-ink-black px-8 text-[16px] font-[430] text-paper-white hover:bg-ink-black/85"
              >
                {cat.title} için Teklif Al <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Bizimle İletişime Geçin."
        description="Ücretsiz keşif ve size özel fiyat teklifi için bizimle iletişime geçin."
      />
    </>
  );
}
