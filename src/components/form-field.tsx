import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

// DESIGN.md "Input / Composer" recipe: 16px radius, hairline border,
// smoke placeholder, ink focus ring.
export const controlClasses =
  "w-full rounded-[16px] border border-ink-black/[0.12] bg-paper-white px-4 py-3 " +
  "text-[15px] font-[430] text-ink-black placeholder:text-smoke-gray transition-colors " +
  "focus:border-ink-black/30 focus:outline-none focus:ring-2 focus:ring-ink-black/15";

export function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] font-[480] text-slate-gray">
        {label}
      </span>
      {children}
    </label>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(controlClasses, props.className)} />;
}

export function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      rows={5}
      {...props}
      className={cn(controlClasses, "resize-none", props.className)}
    />
  );
}

export function Select({
  children,
  className,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        {...props}
        className={cn(controlClasses, "appearance-none pr-10", className)}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate-gray" />
    </div>
  );
}
