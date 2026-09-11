import { cn } from "@/lib/utils";

// DESIGN.md "Tag / Category Label" — ghost typographic tag, no badge styling.
export function SectionTag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-[13px] font-[480] uppercase tracking-[0.14em] text-ash-gray",
        className
      )}
    >
      {children}
    </span>
  );
}
