"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Field, Input, Select, Textarea } from "@/components/form-field";
import { Button } from "@/components/ui/button";

const serviceTypes = [
  "Montaj ve Kurulum",
  "Periyodik Bakım ve Sistem Kontrolü",
  "Onarım ve Teknik Servis",
  "F-Gaz Sızıntı Kontrolü ve EKOMVET",
  "F-Gaz Ölçüm",
  "Diğer",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-[24px] bg-mist-gray p-8 md:p-10">
        <div className="grid size-12 place-items-center rounded-full bg-ink-black text-paper-white">
          <Check className="size-5" strokeWidth={2} />
        </div>
        <h3 className="mt-5 text-[22px] font-[480] tracking-[-0.01em] text-ink-black">
          Talebiniz alındı.
        </h3>
        <p className="mt-2 max-w-[46ch] text-[15px] font-[400] leading-[1.6] text-slate-gray">
          En kısa sürede size dönüş yapacağız. Acil durumlar için 7/24 hattımızı
          arayabilirsiniz.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <Field label="Ad Soyad">
        <Input name="adsoyad" required placeholder="Adınız ve soyadınız" />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Telefon">
          <Input name="telefon" type="tel" required placeholder="05xx xxx xx xx" />
        </Field>
        <Field label="E-posta">
          <Input name="email" type="email" placeholder="ornek@mail.com" />
        </Field>
      </div>
      <Field label="Hizmet Türü">
        <Select name="hizmetTuru" defaultValue="">
          <option value="" disabled>
            Hizmet seçin
          </option>
          {serviceTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </Select>
      </Field>
      <Field label="Mesajınız">
        <Textarea
          name="mesaj"
          required
          placeholder="Kısaca durumu ve adresinizi yazın…"
        />
      </Field>
      <Button
        type="submit"
        className="h-12 w-full rounded-full bg-ink-black px-8 text-[16px] font-[430] text-paper-white hover:bg-ink-black/85 sm:w-auto"
      >
        Gönder <span aria-hidden="true">→</span>
      </Button>
    </form>
  );
}
