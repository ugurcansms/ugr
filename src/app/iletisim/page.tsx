import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "UGR Ölçüm ve İklimlendirme ile iletişime geçin — servis talebi, ücretsiz keşif ve fiyat teklifi için telefon veya form.",
};

const contactItems = [
  {
    icon: Phone,
    label: "Telefon",
    value: brand.phone,
    href: brand.phoneHref,
  },
  {
    icon: Mail,
    label: "E-posta",
    value: brand.email,
    href: brand.emailHref,
  },
  { icon: MapPin, label: "Adres", value: brand.address },
  { icon: Clock, label: "Çalışma Saatleri", value: brand.workingHours },
];

export default function IletisimPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title={
          <>
            Bize <em className="italic">ulaşın</em>.
          </>
        }
        intro="Servis talebi, keşif ve fiyat teklifi için formu doldurun ya da doğrudan bizi arayın."
      />

      <section className="bg-paper-white py-20 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          {/* Sol sütun — önce WhatsApp, sonra iletişim bilgileri */}
          <div>
            {/* Mobilde hafif yeşilimsi sinyal zemini; desktop'ta düz fog-white.
                Bu, alttaki gri iletişim kartından ayrışıp sayfaya görsel odak verir. */}
            <div className="rounded-[24px] bg-whatsapp/8 ring-1 ring-whatsapp/15 md:bg-fog-white md:ring-0 p-7 md:p-9">
              <div className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-whatsapp text-paper-white">
                  <WhatsAppIcon className="size-5" />
                </span>
                <div>
                  <h3 className="text-[17px] font-[480] tracking-[-0.01em] text-ink-black">
                    WhatsApp Destek
                  </h3>
                  <p className="mt-1 text-[14.5px] font-[400] text-slate-gray">
                    Hızlı yanıt için bize yazın
                  </p>
                </div>
              </div>
              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-whatsapp font-[480] text-paper-white transition-colors hover:bg-whatsapp-dark"
              >
                <WhatsAppIcon className="size-5" />
                WhatsApp ile İletişim
              </a>
              <p className="mt-4 text-center text-[12px] font-[430] text-slate-gray">
                Genellikle 5 dakika içinde yanıt veriyoruz
              </p>
            </div>

            <div className="mt-8 rounded-[24px] bg-fog-white p-7 md:p-9">
              <ul className="space-y-7">
                {contactItems.map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink-black text-paper-white">
                      <item.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[12px] font-[480] uppercase tracking-[0.1em] text-ash-gray">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block wrap-anywhere text-[17px] font-[480] text-ink-black underline-offset-4 hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="mt-1 wrap-anywhere text-[16px] font-[480] leading-snug text-ink-black">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-ink-black/[0.08] pt-6 text-[13px] font-[430] text-slate-gray">
                TSE Hizmet Yeterlilik Belgesi
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="h-fit rounded-[24px] bg-mist-gray p-7 md:p-9">
            <h2 className="text-[22px] font-[480] tracking-[-0.01em] text-ink-black">
              Servis Talebi
            </h2>
            <p className="mb-8 mt-2 text-[14.5px] font-[400] leading-[1.6] text-slate-gray">
              Formu doldurun, en kısa sürede size dönüş yapalım.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
