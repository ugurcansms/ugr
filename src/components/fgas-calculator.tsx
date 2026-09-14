"use client";

import { useState } from "react";

import { Field, Input, Select } from "@/components/form-field";
import {
  CONTROL_BANDS,
  REFRIGERANTS,
  bandFor,
  parseChargeKg,
  toCo2eTonnes,
} from "@/lib/fgas";
import { cn } from "@/lib/utils";

// tr-TR: ondalık ayracı virgül, binlik ayracı nokta. Biçimlendirme yalnızca
// kullanıcı girdisinden sonra, istemcide çalışır — SSR çıktısında sonuç yok,
// dolayısıyla hidrasyon uyuşmazlığı riski taşımaz.
const DECIMAL = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 });

export function FgasCalculator() {
  const [refrigerantName, setRefrigerantName] = useState("");
  const [charge, setCharge] = useState("");

  const refrigerant =
    REFRIGERANTS.find((item) => item.name === refrigerantName) ?? null;
  const chargeKg = parseChargeKg(charge);
  const result =
    refrigerant && chargeKg !== null
      ? { refrigerant, chargeKg, tonnes: toCo2eTonnes(chargeKg, refrigerant.gwp) }
      : null;
  const band = result ? bandFor(result.tonnes) : null;

  // Alan dolu ama ayrıştırılamadı — sessizce boş sonuç göstermek yerine uyar.
  const chargeInvalid = charge.trim() !== "" && chargeKg === null;

  return (
    <div className="rounded-[24px] bg-mist-gray p-7 md:p-8">
      {/* Canlı bölge bilinçli olarak yalnızca *bandı* duyurur: tonaj her tuş
          vuruşunda değiştiği için onu duyurmak ekran okuyucuyu okunamaz hale
          getirir. Bant ise yalnızca 5/50 eşikleri geçilirken değişir ve
          metin aynı kaldığında tarayıcı zaten duyuru tetiklemez.
          (Canlı bölgeler içerik değişmeden önce DOM'da olmalı, yoksa okunmaz.) */}
      <p role="status" className="sr-only">
        {band ? `Kaçak kontrol sıklığı: ${band.interval}` : ""}
      </p>

      <h3 className="text-[20px] font-[480] tracking-[-0.01em] text-ink-black">
        Ton CO₂e hesaplayıcı
      </h3>
      <p className="mt-2 max-w-[46ch] text-[14.5px] font-[400] leading-[1.6] text-slate-gray">
        Cihazınızdaki gaz cinsini ve miktarını girin; yasal kaçak kontrol
        periyodunuzu anında görün.
      </p>

      <div className="mt-6 space-y-5">
        <Field label="Gaz cinsi">
          <Select
            value={refrigerantName}
            onChange={(event) => setRefrigerantName(event.target.value)}
          >
            <option value="" disabled>
              Gaz seçin
            </option>
            {REFRIGERANTS.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </Select>
        </Field>

        <div>
          <Field label="Gaz miktarı (kg)">
            <Input
              value={charge}
              onChange={(event) => setCharge(event.target.value)}
              inputMode="decimal"
              autoComplete="off"
              maxLength={9}
              placeholder="Örn. 12,5"
              aria-invalid={chargeInvalid || undefined}
            />
          </Field>
          {chargeInvalid && (
            <p className="mt-2 text-[13px] font-[430] text-destructive">
              Geçerli bir miktar girin (örn. 12,5).
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 rounded-[20px] bg-paper-white p-6">
        {result && band ? (
          <>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-[34px] font-[480] leading-none tracking-[-0.02em] tabular-nums text-ink-black">
                {DECIMAL.format(result.tonnes)}
              </span>
              <span className="text-[15px] font-[430] text-slate-gray">
                ton CO₂e
              </span>
            </div>
            <p className="mt-4 text-[17px] font-[480] tracking-[-0.009em] text-ink-black">
              {band.interval}
            </p>
            <p className="mt-2 text-[14.5px] font-[400] leading-[1.6] text-slate-gray">
              {band.detail}
            </p>
            <p className="mt-4 border-t border-ink-black/[0.08] pt-3 text-[12.5px] font-[430] tabular-nums text-slate-gray">
              {DECIMAL.format(result.chargeKg)} kg × GWP{" "}
              {DECIMAL.format(result.refrigerant.gwp)} ÷ 1000
            </p>
          </>
        ) : (
          <p className="text-[14.5px] font-[400] leading-[1.6] text-slate-gray">
            Sonucu görmek için gaz cinsini seçin ve miktarı kg olarak girin.
          </p>
        )}
      </div>

      <dl className="mt-6 space-y-1 border-t border-ink-black/[0.08] pt-5">
        {CONTROL_BANDS.map((item) => {
          const active = band?.id === item.id;
          return (
            <div
              key={item.id}
              className={cn(
                "flex items-baseline justify-between gap-4 rounded-[10px] px-2.5 py-1.5 text-[13.5px] transition-colors",
                active
                  ? "bg-paper-white font-[480] text-ink-black"
                  : "font-[430] text-slate-gray"
              )}
            >
              <dt className="tabular-nums">{item.range}</dt>
              <dd>{item.interval}</dd>
            </div>
          );
        })}
      </dl>

      <p className="mt-5 text-[12.5px] font-[400] leading-[1.6] text-slate-gray">
        Sonuç bilgilendirme amaçlıdır; resmî ölçüm raporu yerine geçmez.
      </p>
    </div>
  );
}
