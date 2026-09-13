// F-Gaz alan verisi — soğutucu gaz KIP tablosu, ton CO₂e formülü ve yönetmelik
// bantları. Tek tüketicisi `fgas-calculator.tsx`; veri burada durur ki yönetmelik
// eki güncellendiğinde bileşene dokunmadan tek yerden değiştirilebilsin.

export type Refrigerant = {
  /** Etikette görünen ad. */
  name: string;
  /** KIP — Küresel Isınma Potansiyeli (GWP). */
  gwp: number;
};

/** F-Gaz yönetmeliği kapsamındaki soğutucu gazlar ve KIP değerleri. */
export const REFRIGERANTS: Refrigerant[] = [
  { name: "R-134a", gwp: 1430 },
  { name: "R-404A", gwp: 3922 },
  { name: "R-22", gwp: 1760 },
  { name: "R-410A", gwp: 2088 },
  { name: "R-407A", gwp: 2107 },
  { name: "R-417A", gwp: 2346 },
  { name: "R32", gwp: 675 },
  { name: "R-407C", gwp: 1774 },
  { name: "R-452A", gwp: 2140 },
  { name: "SF6", gwp: 22800 },
  { name: "FM-200 (R-227ea)", gwp: 3220 },
  { name: "R-1234yf / R-1234ze", gwp: 4 },
  { name: "R-448A / R-449A", gwp: 1397 },
  { name: "R-454B", gwp: 466 },
  { name: "R-507A", gwp: 3985 },
  { name: "R-23", gwp: 14800 },
  { name: "R-152A", gwp: 124 },
  { name: "R-365mfc", gwp: 794 },
  { name: "R-245fa", gwp: 858 },
];

export type ControlBand = {
  id: string;
  /** Bandın alt sınırı (dahil), ton CO₂e. */
  min: number;
  /** Referans listesinde görünen aralık etiketi. */
  range: string;
  /** Zorunlu kaçak kontrolü sıklığı. */
  interval: string;
  /** Sonuç panelinde gösterilen açıklama. */
  detail: string;
};

/**
 * Kaçak kontrolü bantları — artan eşik sırasıyla. Sınırlar alt uçtan dahildir:
 * tam 50 ton CO₂e "6 ayda 1 kez" bandına, tam 500 ton "3 ayda 1 kez" bandına girer.
 */
export const CONTROL_BANDS: ControlBand[] = [
  {
    id: "exempt",
    min: 0,
    range: "5 ton altı",
    interval: "Yasal zorunluluk yok",
    detail:
      "5 ton CO₂e altındaki cihazlar yasal kaçak kontrolü kapsamı dışındadır. Yine de yılda bir kez bakım, kaçak riskini ve gereksiz enerji tüketimini azaltır.",
  },
  {
    id: "annual",
    min: 5,
    range: "5 – 50 ton",
    interval: "Yılda 1 kez",
    detail:
      "Cihazınız yasal takip kapsamında. Kaçak kontrolü yılda en az 1 kez yetkili servisçe yapılmalı ve kayıt altına alınmalıdır.",
  },
  {
    id: "biannual",
    min: 50,
    range: "50 – 500 ton",
    interval: "6 ayda 1 kez",
    detail:
      "Kaçak kontrolü 6 ayda en az 1 kez (yılda 2 kez) yapılmalıdır.",
  },
  {
    id: "quarterly",
    min: 500,
    range: "500 ton ve üzeri",
    interval: "3 ayda 1 kez",
    detail:
      "Kaçak kontrolü 3 ayda en az 1 kez (yılda 4 kez) yapılmalıdır.",
  },
];

/** (Gaz miktarı (kg) × KIP) / 1000 = ton CO₂e */
export function toCo2eTonnes(chargeKg: number, gwp: number): number {
  return (chargeKg * gwp) / 1000;
}

/** Verilen ton CO₂e değeri için geçerli bandı döndürür (sağlanan en yüksek eşik). */
export function bandFor(tonnes: number): ControlBand {
  let match = CONTROL_BANDS[0];
  for (const band of CONTROL_BANDS) {
    if (tonnes >= band.min) match = band;
  }
  return match;
}

/**
 * Kullanıcı girdisini kg'a çevirir; geçersizse `null`.
 *
 * Türkçe yazımda virgül ondalık, nokta binlik ayracıdır — ama "12.5" yazan bir
 * kullanıcı da ondalık kasteder. Ayrım şu kuralıyla yapılır: nokta yalnızca tam
 * üçlü gruplama kuralına uyuyorsa (`1.500`, `1.234.567`) binlik sayılır; aksi
 * halde ondalık ayracıdır (`12.5` → 12,5). Bu kural olmadan `Number("1.500")`
 * sessizce 1,5 döndürür ve 1500 kg'lık bir sistem 1,5 kg sanılırdı.
 */
export function parseChargeKg(raw: string): number | null {
  const trimmed = raw.trim();
  if (trimmed === "") return null;

  let normalized = trimmed;
  if (trimmed.includes(",")) {
    normalized = trimmed.replace(/\./g, "").replace(",", ".");
  } else if (/^\d{1,3}(\.\d{3})+$/.test(trimmed)) {
    normalized = trimmed.replace(/\./g, "");
  }

  if (/[^\d.]/.test(normalized)) return null;

  const value = Number(normalized);
  return Number.isFinite(value) && value > 0 ? value : null;
}
