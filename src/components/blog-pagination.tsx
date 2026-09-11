import Link from "next/link";

import { Button } from "@/components/ui/button";

/**
 * Blog liste altı sayfalama kontrolü — Steep'in pill diliyle.
 * Önceki / Sonraki yön butonları + muted "Sayfa X / Y" göstergesi.
 * Tek sayfa olduğunda hiç render edilmez (oluşturulmamış altyapı sessiz kalır).
 */
export function BlogPagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const pill =
    "h-11 rounded-full border-ink-black bg-transparent px-6 text-[15px] font-[430] text-ink-black hover:bg-mist-gray hover:text-ink-black";
  const disabled =
    "flex h-11 items-center px-6 text-[15px] font-[430] text-ash-gray";

  return (
    <nav
      aria-label="Blog sayfalama"
      className="mt-16 flex items-center justify-center gap-4 md:gap-6"
    >
      {currentPage > 1 ? (
        <Button
          render={<Link href={`/blog?page=${currentPage - 1}`} />}
          variant="outline"
          className={pill}
        >
          <span aria-hidden="true">←</span> Önceki
        </Button>
      ) : (
        <span className={disabled}>
          <span aria-hidden="true">←</span> Önceki
        </span>
      )}

      <span className="text-[14px] font-[430] tabular-nums text-ash-gray">
        Sayfa {currentPage} / {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Button
          render={<Link href={`/blog?page=${currentPage + 1}`} />}
          variant="outline"
          className={pill}
        >
          Sonraki <span aria-hidden="true">→</span>
        </Button>
      ) : (
        <span className={disabled}>
          Sonraki <span aria-hidden="true">→</span>
        </span>
      )}
    </nav>
  );
}
