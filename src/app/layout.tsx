import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";

import { ScrollTopButton } from "@/components/scroll-top-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { brand } from "@/lib/brand";

import "./globals.css";

// DESIGN.md typography: Signifier (display serif) → Source Serif 4,
// Sohne (body/UI sans) → Inter. Both loaded as variable fonts so the
// half-step weights (430/450/480) are available via font-[430] etc.
const sohne = Inter({
  variable: "--font-sohne",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const signifier = Source_Serif_4({
  variable: "--font-signifier",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: brand.name,
    template: `%s | ${brand.shortName}`,
  },
  description:
    "UGR Ölçüm ve İklimlendirme — klima montaj, periyodik bakım, onarım ve F-Gaz ölçüm & belgelendirme. R32 / R410A dolum, kaçak tespiti ve 7/24 teknik destek.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${sohne.variable} ${signifier.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ScrollTopButton />
      </body>
    </html>
  );
}
