import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

interface CtaBannerProps {
  title: ReactNode;
  description?: ReactNode;
}

export function CtaBanner({ title, description }: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden border-t border-ink-black/[0.06] bg-fog-white py-20 md:py-24">
      {/* Soluk görsel doku — PageHero ile aynı desen, burada daha hafif (0.30).
          Yoğun ak örtü okunurluğu korur; metin katmanı üsttedir. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/WhatsApp Image 2026-09-07 at 14.46.44 (1).jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-fog-white via-fog-white/60 to-fog-white" />
      </div>
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-6 text-center">
        <h2 className="max-w-[22ch] font-signifier text-[clamp(30px,4vw,44px)] font-[400] leading-[1.2] tracking-[-0.015em] text-ink-black">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-[48ch] text-[16px] font-[400] leading-[1.6] text-slate-gray">
            {description}
          </p>
        )}
        <Button
          render={<Link href="/iletisim" />}
          className="mt-8 h-12 rounded-full bg-ink-black px-8 text-[16px] font-[430] text-paper-white hover:bg-ink-black/85"
        >
          Bize Ulaşın <span aria-hidden="true">→</span>
        </Button>
      </div>
    </section>
  );
}
