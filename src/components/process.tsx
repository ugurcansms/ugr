import { MediaFigure } from "@/components/media-figure";
import { SectionTag } from "@/components/section-tag";
import { processSteps } from "@/lib/services";

export function Process() {
  return (
    <section id="surec" className="scroll-mt-24 bg-fog-white py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[720px] text-center">
          <SectionTag>Süreç</SectionTag>
          <h2 className="mt-4 font-signifier text-[clamp(36px,4.6vw,56px)] font-[400] leading-[1.2] tracking-[-0.015em] text-ink-black">
            Dört adımda <em className="italic">eksiksiz</em> teknik hizmet.
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] text-[17px] font-[400] leading-[1.6] text-slate-gray">
            Talebin alınmasından müdahaleye kadar tüm süreç, planlı ve kontrollü şekilde yürütülür.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-16">
          {/* Vertical step flow */}
          <ol className="divide-y divide-ink-black/[0.08]">
            {processSteps.map((step) => (
              <li
                key={step.index}
                className="group flex gap-6 py-7 first:pt-0 last:pb-0 md:gap-8"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink-black/[0.14] text-[13px] font-[480] text-ink-black transition-colors duration-300 group-hover:bg-ink-black group-hover:text-paper-white">
                  {step.index}
                </span>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-[13px] font-[480] uppercase tracking-[0.12em] text-ash-gray">
                      Adım {step.index}
                    </span>
                  </div>
                  <h3 className="mt-1.5 text-[20px] font-[480] tracking-[-0.01em] text-ink-black">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[52ch] text-[14.5px] font-[400] leading-[1.6] text-slate-gray">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Photo — a technician's hands on the control wires during diagnosis */}
          <MediaFigure
            src="/images/arkom-bn-2.jpg"
            alt="Eldivenli bir teknisyenin kablo bağlantısı üzerinde tornavida ile çalışması — arıza tespiti"
            aspect="4 / 5"
            priority={false}
            className="lg:sticky lg:top-24"
            caption="Teşhis anı — elektriksel aksam kontrolü"
          />
        </div>
      </div>
    </section>
  );
}
