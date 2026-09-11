import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { brand } from "@/lib/brand";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Hizmetler",
    links: [
      { label: "Montaj ve Kurulum", href: "/hizmetler/montaj-ve-kurulum" },
      { label: "Periyodik Bakım ve Sistem Kontrolü", href: "/hizmetler/periyodik-bakim-ve-sistem-kontrolu" },
      { label: "Onarım ve Teknik Servis", href: "/hizmetler/onarim-ve-teknik-servis" },
      { label: "F-Gaz Sızıntı Kontrolü ve EKOMVET", href: "/hizmetler/f-gaz-sizinti-kontrolu-ve-ekomvet" },
    ],
  },
  {
    title: "Hızlı Linkler",
    links: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Blog", href: "/blog" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-fog-white">
      <div className="mx-auto max-w-[1200px] px-6 pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-removebg.png"
                alt={`${brand.shortName} logosu`}
                width={472}
                height={528}
                className="h-10 w-auto"
              />
              <span className="flex flex-col leading-none">
                <span className="text-[17px] font-[480] tracking-[-0.01em] text-ink-black">
                  {brand.shortName}
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-[36ch] text-[14.5px] font-[400] leading-[1.65] text-slate-gray">
              Klima montajı, periyodik bakımı, onarımı ve F-Gaz ölçüm hizmetlerini
              tek çatı altında sunuyoruz. Yetkili kadromuz ve 7/24 acil destek
              ağımızla cihazlarınızın ömrünü uzatıyor, konforu sürdürülebilir
              kılıyoruz.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-[480] uppercase tracking-[0.12em] text-ash-gray">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14.5px] font-[430] text-ink-black/80 hover:text-ink-black hover:underline underline-offset-4"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-[13px] font-[480] uppercase tracking-[0.12em] text-ash-gray">
              Destek
            </h3>
            <ul className="mt-5 space-y-3 text-[14.5px] font-[430] text-slate-gray">
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-ash-gray" />
                <a
                  href={brand.phoneHref}
                  className="hover:text-ink-black hover:underline underline-offset-4"
                >
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-ash-gray" />
                <a
                  href={brand.emailHref}
                  className="hover:text-ink-black hover:underline underline-offset-4"
                >
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-ash-gray" />
                <span>{brand.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-ink-black/[0.08] pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] font-[430] text-slate-gray">
            © {new Date().getFullYear()} {brand.name} · Tüm hakları saklıdır.
          </p>
          {/* Design credit
          <p className="text-[13px] font-[430] text-slate-gray">
            Design by{" "}
            <a
              href="https://errnify.com/tr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[480] text-ink-black hover:underline underline-offset-4"
            >
              errnify
            </a>
          </p>
          */}
        </div>
      </div>
    </footer>
  );
}
