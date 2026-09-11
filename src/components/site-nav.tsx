"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { brand } from "@/lib/brand";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { navLinks, serviceChildren } from "@/lib/nav";
import { cn } from "@/lib/utils";

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,box-shadow] duration-300",
        scrolled
          ? "border-b border-ink-black/[0.06] bg-paper-white/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:h-[72px]">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/images/logo-removebg.png"
            alt={`${brand.shortName} logosu`}
            width={472}
            height={528}
            priority
            className="h-10 w-auto transition-transform duration-300 group-hover:-rotate-3"
          />
          <span className="flex flex-col leading-none">
            {/* Desktop — logotip iki satır */}
            <span className="hidden text-[17px] font-[480] tracking-[-0.01em] text-ink-black md:flex md:flex-col md:leading-[1.12]">
              <span>{brand.shortName.split(" ").slice(0, -1).join(" ")}</span>
              <span>{brand.shortName.split(" ").at(-1)}</span>
            </span>
            {/* Mobile — tek satır */}
            <span className="text-[17px] font-[480] tracking-[-0.01em] text-ink-black md:hidden">
              {brand.shortName}
            </span>
          </span>
        </Link>

        {/* Center links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            if (link.children) {
              const active = isActive(link.href, pathname);
              return (
                <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger
                    openOnHover
                    delay={0}
                    render={
                      <button
                        type="button"
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "inline-flex items-center gap-1 text-[15px] font-[430] underline-offset-4 transition-colors hover:text-slate-gray",
                          active
                            ? "text-ink-black"
                            : "text-ink-black decoration-ink-black/30"
                        )}
                      >
                        {link.label}
                        <ChevronDown className="size-3.5 text-slate-gray transition-transform duration-200 data-popup-open:rotate-180" />
                      </button>
                    }
                  />
                  <DropdownMenuContent
                    align="start"
                    sideOffset={10}
                    className="w-60 rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border border-ink-black/[0.06] bg-paper-white p-2 shadow-pop"
                  >
                    {link.children.map((child, i) => (
                      <div key={child.href}>
                        {i === 1 ? (
                          <DropdownMenuSeparator className="my-1 bg-ink-black/[0.06]" />
                        ) : null}
                        <DropdownMenuItem
                          render={<Link href={child.href} />}
                          className={cn(
                            "rounded-xl px-3 py-2 text-[15px] font-[430] text-ink-black focus:bg-mist-gray focus:text-ink-black",
                            isActive(child.href, pathname) &&
                              "bg-mist-gray font-[480]"
                          )}
                        >
                          {child.label}
                        </DropdownMenuItem>
                      </div>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            const active = isActive(link.href, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[15px] font-[430] underline-offset-4 transition-colors hover:underline",
                  active
                    ? "text-ink-black decoration-ink-black/40"
                    : "text-ink-black decoration-ink-black/30 hover:text-slate-gray"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right CTAs */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={brand.phoneHref}
            className="group inline-flex items-center gap-2 text-[15px] font-[430] text-ink-black decoration-ink-black/30 underline-offset-4 hover:underline"
          >
            <Phone className="size-4 text-slate-gray transition-colors group-hover:text-ink-black" />
            7/24 Destek: {brand.phone}
          </a>
          <Button
            render={<Link href="/iletisim" />}
            className="h-10 rounded-full bg-ink-black px-6 text-[15px] font-[430] text-paper-white hover:bg-ink-black/85"
          >
            Servis Talep Et
          </Button>
        </div>

        {/* Mobile trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <button
                aria-label="Menüyü aç"
                className="grid size-10 place-items-center rounded-full text-ink-black transition-colors hover:bg-mist-gray md:hidden"
              >
                <Menu className="size-5" />
              </button>
            }
          />
          <SheetContent
            side="right"
            className="w-[320px] !h-fit max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-l-[24px]"
          >
            <SheetHeader className="border-b border-ink-black/[0.06] pb-5 text-left">
              <SheetTitle className="flex items-center gap-3 font-sohne text-[17px] font-[480] text-ink-black">
                <Image
                  src="/images/logo-removebg.png"
                  alt={`${brand.shortName} logosu`}
                  width={472}
                  height={528}
                  className="h-10 w-auto"
                />
                {brand.shortName}
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-3 px-1 pt-5">
              {navLinks.map((link) => {
                const active = isActive(link.href, pathname);
                return (
                  <div key={link.href} className="relative">
                    {/* Deneme: her bağlantı satırının arkasında belirgin şeffaf logo */}
                    <Image
                      src="/images/logo-removebg.png"
                      alt=""
                      aria-hidden
                      width={472}
                      height={528}
                      className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-contain opacity-[0.16]"
                    />
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-full px-4 py-3 text-[16px] font-[430] transition-colors",
                        active
                          ? "bg-mist-gray text-ink-black"
                          : "text-ink-black hover:bg-mist-gray"
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.children ? (
                      <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-ink-black/[0.08] pl-4">
                        {serviceChildren.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="rounded-full px-3 py-2 text-[14.5px] font-[430] text-slate-gray transition-colors hover:bg-mist-gray hover:text-ink-black"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
              {/* CTA — İletişim'den sonra, liste akışının içinde */}
              <div className="mt-2 space-y-3 border-t border-ink-black/[0.08] pt-5">
                <a
                  href={brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 text-[15px] font-[430] text-paper-white transition-colors hover:bg-whatsapp-dark"
                >
                  <WhatsAppIcon className="size-5" />
                  WhatsApp’tan Yaz
                </a>
                <a
                  href={brand.phoneHref}
                  className="flex h-11 mb-3 w-full items-center justify-center gap-2 rounded-full bg-mist-gray px-6 text-[15px] font-[430] text-ink-black transition-colors hover:bg-ink-black/[0.06]"
                >
                  <Phone className="size-4 text-slate-gray" />
                  7/24: {brand.phone}
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
