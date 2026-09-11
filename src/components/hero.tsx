import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soluk saha dokusu — atmosfer için, okunurluğu korumak adına yoğun beyaz örtü */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/sogutma-tesisati2.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.50]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper-white via-paper-white/60 to-paper-white" />
      </div>

      {/* Whisper of warmth behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-[560px] max-w-[1100px] bg-[radial-gradient(55%_60%_at_50%_42%,rgba(251,225,209,0.5),transparent_72%)]"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 pb-24 pt-14 md:pb-32 md:pt-24">
        {/* Center copy */}
        <div className="relative z-10 mx-auto flex max-w-[820px] flex-col items-center text-center">
          <p className="animate-rise text-[13px] font-[480] uppercase tracking-[0.18em] text-slate-gray">
            {brand.shortName}
          </p>

          <h1 className="animate-rise mt-6 font-signifier text-[clamp(48px,7.2vw,72px)] font-[400] leading-[1.12] tracking-[-0.03em] text-ink-black [animation-delay:0.08s]">
            F-Gaz ve Klima Servisi
          </h1>

          <p className="animate-rise mt-7 max-w-[600px] text-[17px] font-[400] leading-[1.5] text-slate-gray [animation-delay:0.16s] md:text-[18px]">
            Montajdan periyodik bakıma, gaz şarjından F-Gaz ölçüm ve
            belgelendirmeye kadar soğutma sisteminizin tüm ihtiyaçları tek
            elden, 7/24.
          </p>

          <div className="animate-rise mt-9 flex flex-col items-center gap-3 [animation-delay:0.24s] sm:flex-row">
            <Button
              render={<Link href="/iletisim" />}
              className="h-12 rounded-full bg-ink-black px-8 text-[16px] font-[430] text-paper-white hover:bg-ink-black/85"
            >
              Servis Talep Et <span aria-hidden="true">→</span>
            </Button>
            <Button
              render={<Link href="/hizmetler" />}
              variant="outline"
              className="h-12 rounded-full border-ink-black bg-transparent px-8 text-[16px] font-[430] text-ink-black hover:bg-mist-gray hover:text-ink-black"
            >
              Hizmetleri İncele
            </Button>
          </div>

          <p className="animate-rise mt-6 text-[14px] font-[430] text-ash-gray [animation-delay:0.32s]">
            Aynı gün müdahale · Montaj-Bakım · F-Gaz Ölçümü
          </p>
        </div>
      </div>
    </section>
  );
}
