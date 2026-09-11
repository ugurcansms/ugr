// Marka ve iletişim bilgileri — tek yerden düzenlenir.
export const brand = {
  // Tam kurumsal ad — meta title ve footer alt barında kullanılır.
  name: "UGR Ölçüm ve İklimlendirme",
  // Kısa ad — nav/footer logosunda kullanılır.
  shortName: "UGR Ölçüm ve İklimlendirme",
  monogram: "U",
  tagline: "F-Gaz Emisyon",
  phone: "0546 906 85 70",
  phoneHref: "tel:+905469068570",
  whatsappUrl: "https://wa.me/905469068570",
  email: "info@ugriklimlendirme.com",
  emailHref: "mailto:info@ugriklimlendirme.com",
  address: "Atatürk Mahallesi, Darılmaz Sokak No: 14-16B, Sancaktepe/İstanbul",
  // fgasNo kaldırıldı (2026-09): F-Gaz yetki belgesi henüz alınmadı.
  // Belge alınınca buraya `fgasNo` alanı geri eklenip iletisim sayfasında render edilebilir.
  workingHours: "7/24 Acil Destek · Hafta içi 08:00–18:00",
} as const;
