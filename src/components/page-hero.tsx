import Image from "next/image";

import { SectionTag } from "@/components/section-tag";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  background,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  children?: React.ReactNode;
  /** İsteğe bağlı mutlak konumlu arka plan katman(lar)ı. */
  background?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-fog-white">
      {/* Soluk görsel doku — atmosfer için, okunurluğu korumak adına yoğun ak örtü.
          Background prop'u verilirse bu varsayılan yerine kullanılır. */}
      {background ?? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image
            src="/images/EKOFAR-2.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.60]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-fog-white via-fog-white/60 to-fog-white" />
        </div>
      )}
      <div className="relative mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        <SectionTag>{eyebrow}</SectionTag>
        <h1 className="mt-4 max-w-[24ch] font-signifier text-[clamp(38px,5.2vw,64px)] font-[400] leading-[1.18] tracking-[-0.015em] text-ink-black">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-[60ch] text-[17px] font-[400] leading-[1.6] text-slate-gray">
            {intro}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
