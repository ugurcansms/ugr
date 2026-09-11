const items = [
  "İstanbul çevresi hızlı müdahale",
  "F-Gaz yetkili servis",
  "Belgeli teknisyen kadro",
  "Aynı gün keşif",
  "Kaçak tespiti ve kalıcı çözüm",
  "Resmî ölçüm raporu",
  "Montajdan bakıma tek elden",
];

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="text-[13px] font-[500] uppercase tracking-[0.14em] text-slate-gray">
            {item}
          </span>
          <span className="mx-7 text-[13px] text-smoke-gray">·</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Hakkımızda/anasayfa arası ince "kayan şerit" — sitedeki bölge ve hizmet
 * vurgularını yavaşça akıtır. Sayısal istatistik içermez (hero zaten sayıları
 * gösterir). CSS keyframe ile sonsuz döngü: iki aynı satır, -%50 kaydırma.
 */
export function MarqueeStrip() {
  return (
    <section
      aria-label="Hizmet vurguları"
      className="group overflow-hidden border-y border-ink-black/[0.06] bg-paper-white py-6"
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">
        <Row />
        <Row ariaHidden />
      </div>
    </section>
  );
}
