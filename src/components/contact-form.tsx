"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

import { Field, Input, Select, Textarea } from "@/components/form-field";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";

const serviceTypes = [
  "Montaj ve Kurulum",
  "Periyodik Bakım ve Sistem Kontrolü",
  "Onarım ve Teknik Servis",
  "F-Gaz Sızıntı Kontrolü ve EKOMVET",
  "F-Gaz Ölçüm",
  "Diğer",
];

// Web3Forms tarayıcı tarafından çağrılmak üzere tasarlandı; sunucu tarafı
// kullanım ücretli plan + IP whitelist gerektirdiği için proxy yok (karar #25).
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

// fetch'in kendi timeout'u yok; olmazsa asılı istek butonu kalıcı olarak
// "Gönderiliyor…" durumunda bırakır.
const TIMEOUT_MS = 15_000;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const errorRef = useRef<HTMLParagraphElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Buton `disabled` olunca odak body'ye düşer; terminal durumlarda odağı
  // sonuca taşıyoruz ki klavye kullanıcısı sayfa başından tekrar sekmek
  // zorunda kalmasın ve sonuç ekran okuyucuya okunsun.
  useEffect(() => {
    if (status === "error") errorRef.current?.focus();
    else if (status === "success") successRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    // FormData handler dönmeden okunmalı — await sonrası currentTarget null olur.
    const formData = new FormData(event.currentTarget);

    // Honeypot: gerçek kullanıcı bu alanı görmez, botlar doldurur.
    // Doldurulmuşsa hiç istek atmadan başarı gösteriyoruz ki bot tekrar denemesin.
    if (String(formData.get("website") ?? "").trim() !== "") {
      setStatus("success");
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      return;
    }

    const values = Object.fromEntries(formData);
    delete values.website;

    setStatus("submitting");
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        signal: AbortSignal.timeout(TIMEOUT_MS),
        body: JSON.stringify({
          ...values,
          // Rezerve alanlar form alanlarından sonra yazılır ki ezilmesinler.
          access_key: accessKey,
          subject: `Servis Talebi: ${String(values.hizmetTuru || "Tür belirtilmedi")}`,
          from_name: "ugriklimlendirme.com",
        }),
      });
      const data = await res.json().catch(() => null);
      setStatus(res.ok && data?.success ? "success" : "error");
    } catch {
      // Ağ hatası / fetch reddi — yakalanmazsa form "Gönderiliyor…" durumunda kalır.
      setStatus("error");
    }
  }

  return (
    <>
      {/* Bekleme durumu — DOM'da kalıcı canlı bölge: buton `disabled` olunca
          odak kaybolduğu için bu durumu duyuracak başka bir şey yok.
          (Canlı bölgeler içerik değişmeden önce var olmalı, yoksa okunmaz.)
          Başarı/hata zaten odak taşıma ile duyuruluyor. */}
      <p role="status" className="sr-only">
        {status === "submitting" ? "Gönderiliyor…" : ""}
      </p>

      {status === "success" ? (
        <div
          ref={successRef}
          tabIndex={-1}
          className="rounded-[24px] bg-mist-gray p-8 outline-none md:p-10"
        >
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
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot — gerçek kullanıcı görmez, botlar doldurur.
              `hidden` (display:none) bilinçli: `website` tam da tarayıcı/parola
              yöneticisi otomatik doldurmasının hedeflediği bir isim. Ekran dışı
              konumlandırmada alan "görünür" sayıldığı için doldurulabilir ve o
              zaman gönderim sessizce yutulur — yani gerçek bir talep hiçbir yerde
              iz bırakmadan kaybolur. display:none alanlarını otomatik doldurma
              atlar. data-* nitelikleri LastPass/1Password opt-out'udur.
              `disabled`/`readOnly` EKLEME: disabled alanlar FormData'ya hiç
              girmez ve honeypot sessizce ölü koda döner. */}
          <div className="hidden" aria-hidden="true">
            <label>
              Website
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                data-lpignore="true"
                data-1p-ignore="true"
              />
            </label>
          </div>

          <Field label="Ad Soyad">
            <Input name="adsoyad" required placeholder="Adınız ve soyadınız" />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Telefon">
              <Input name="telefon" type="tel" required placeholder="05xx xxx xx xx" />
            </Field>
            <Field label="E-posta">
              <Input name="email" type="email" required placeholder="ornek@mail.com" />
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

          {status === "error" && (
            <p
              ref={errorRef}
              role="alert"
              tabIndex={-1}
              className="text-[14px] font-[430] text-destructive outline-none"
            >
              Talebiniz gönderilemedi. Lütfen tekrar deneyin ya da{" "}
              <a
                href={brand.phoneHref}
                className="font-[480] underline underline-offset-4"
              >
                {brand.phone}
              </a>{" "}
              numarasından bize ulaşın.
            </p>
          )}

          <Button
            type="submit"
            disabled={status === "submitting"}
            className="h-12 w-full rounded-full bg-ink-black px-8 text-[16px] font-[430] text-paper-white hover:bg-ink-black/85 sm:w-auto"
          >
            {status === "submitting" ? (
              "Gönderiliyor…"
            ) : (
              <>
                Gönder <span aria-hidden="true">→</span>
              </>
            )}
          </Button>
        </form>
      )}
    </>
  );
}
