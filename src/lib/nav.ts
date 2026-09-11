export type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  {
    href: "/hizmetler",
    label: "Hizmetler",
    children: [
      { href: "/hizmetler", label: "Tüm Hizmetler" },
      { href: "/hizmetler/montaj-ve-kurulum", label: "Montaj ve Kurulum" },
      { href: "/hizmetler/periyodik-bakim-ve-sistem-kontrolu", label: "Periyodik Bakım ve Sistem Kontrolü" },
      { href: "/hizmetler/onarim-ve-teknik-servis", label: "Onarım ve Teknik Servis" },
      { href: "/hizmetler/f-gaz-sizinti-kontrolu-ve-ekomvet", label: "F-Gaz Sızıntı Kontrolü ve EKOMVET" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

/** Mobil menüde "Hizmetler" başlığına bağlı alt hizmetler. */
export const serviceChildren = [
  { href: "/hizmetler/montaj-ve-kurulum", label: "Montaj ve Kurulum" },
  { href: "/hizmetler/periyodik-bakim-ve-sistem-kontrolu", label: "Periyodik Bakım ve Sistem Kontrolü" },
  { href: "/hizmetler/onarim-ve-teknik-servis", label: "Onarım ve Teknik Servis" },
  { href: "/hizmetler/f-gaz-sizinti-kontrolu-ve-ekomvet", label: "F-Gaz Sızıntı Kontrolü ve EKOMVET" },
];
