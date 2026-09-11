import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Services } from "@/components/services";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Klima montaj, bakım, onarım ve F-Gaz ölçüm hizmetlerimizin tam listesi — montajdan gaz dolumuna, arıza onarımından belgelendirmeye.",
};

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        title={
          <>
            Dört başlıkta <em className="italic">tam</em> hizmet.
          </>
        }
        intro="Montaj ve kurulumdan bakım-temizliğe, arıza onarımından F-Gaz ölçüm ve belgelendirmeye — soğutma sisteminizin tüm ihtiyaçları belgeli uzmanlarca karşılanır."
      />

      <Services />

      <CtaBanner
        title="Bizimle İletişime Geçin."
        description="Ücretsiz keşif ve size özel fiyat teklifi için bizimle iletişime geçin."
      />
    </>
  );
}
