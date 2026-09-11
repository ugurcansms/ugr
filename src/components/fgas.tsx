import { Check, Snowflake } from "lucide-react";

import { SectionTag } from "@/components/section-tag";

const checks = [
  "Sızıntı ölçüm cihazlarıyla kaçak tespiti ve kalıcı çözümü",
  "R32 / R410A dolum, geri kazanım ve bertaraf işlemleri",
  "Resmî ölçüm raporu ve yasal belgelendirme",
  "Zorunlu periyodik F-Gaz kontrolleri",
];

function RadialGauge() {
  const r = 48;
  const c = 2 * Math.PI * r;
  const fill = 0.82;
  return (
    <div className="relative grid size-[132px] place-items-center">
      <svg viewBox="0 0 120 120" className="size-[132px]" aria-hidden="true">
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="8"
        />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="#fbe1d1"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${c * fill} ${c}`}
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-[24px] font-[500] leading-none tracking-[-0.01em] text-paper-white">
          %82
        </span>
        <span className="mt-1 text-[11px] font-[430] text-ash-gray">
          dolum oranı
        </span>
      </div>
    </div>
  );
}

export function Fgas() {
  return (
    <section id="fgaz" className="scroll-mt-24 bg-paper-white py-24 md:py-32">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* Copy */}
        <div>
          <SectionTag>F-Gaz Yönetimi</SectionTag>
          <h2 className="mt-4 max-w-[16ch] font-signifier text-[clamp(36px,4.6vw,56px)] font-[400] leading-[1.2] tracking-[-0.015em] text-ink-black">
            Soğutucu gazlar, <em className="italic">yasal</em> çerçevede.
          </h2>
          <p className="mt-6 max-w-[52ch] text-[17px] font-[400] leading-[1.6] text-slate-gray">
            R32 ve R410A gibi F-Gaz yönetmeliği kapsamındaki soğutucu gazların
            ölçümü, dolumu ve geri kazanımı yalnızca yetkili servislerce
            yapılabilir. Tüm işlemlerimiz kaçak tespiti, resmî raporlama ve
            belgelendirmeyle birlikte yürütülür.
          </p>

          <ul className="mt-8 space-y-4">
            {checks.map((item) => (
              <li key={item} className="flex items-start gap-3.5">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-ink-black/[0.16] text-ink-black">
                  <Check className="size-3.5" strokeWidth={2} />
                </span>
                <span className="text-[15.5px] font-[430] leading-[1.55] text-ink-black/85">
                  {item}
                </span>
              </li>
            ))}
          </ul>


        </div>

        {/* Floating F-Gas report artifact */}
        <div className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:justify-self-end">
          {/* The single editorial peach card of the page */}
          <div className="relative mt-10 overflow-hidden rounded-[24px] bg-blush-peach p-7 text-sienna-brown md:p-9">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[12px] font-[500] uppercase tracking-[0.12em] opacity-75">
                  Yetkili F-Gaz Servisi
                </p>
                <p className="mt-3 max-w-[36ch] text-[18px] font-[430] leading-[1.5]">
                  Tüm ölçüm ve dolum işlemleri, Çevre ve Şehircilik Bakanlığı
                  yetki belgemizle resmî raporla belgelenir.
                </p>
              </div>
              <div className="hidden shrink-0 rotate-6 sm:block">
                <div className="grid size-20 place-items-center rounded-full border border-sienna-brown/40 text-sienna-brown">
                  <div className="flex flex-col items-center">
                    <Snowflake className="size-5" strokeWidth={1.5} />
                    <span className="mt-1 text-[8px] font-[500] tracking-[0.1em]">
                      F-GAZ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
