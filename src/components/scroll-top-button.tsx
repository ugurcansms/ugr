"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Sağ alt köşede yüzen "sayfa başına dön" butonu.
 *
 * Aşağı kaydırılınca belirir, tepeye dönünce kaybolur. Yüzen bir artefakt
 * olduğu için Steep'te yalnızca yüzen öğelerin kazandığı `shadow-artifact`
 * gölgesini taşır; renk de birincil CTA'ların dolgun `ink-black` tonudur.
 */
export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Sayfa başına dön"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 grid size-11 place-items-center rounded-full bg-ink-black text-paper-white shadow-artifact transition duration-300 ease-out hover:bg-ink-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black focus-visible:ring-offset-2 md:bottom-8 md:right-8 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ArrowUp className="size-[18px]" strokeWidth={2} />
    </button>
  );
}
