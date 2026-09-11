/**
 * Design sistem gradyan yıkaması — sol üstten yayılan hafif `ash-gray` radial.
 * PageHero varsayılanı ve CTA bantlarında tek kaynaktan tutarlılık sağlar.
 * Nötr gri olduğu için şeftali "tek aksan" kuralına dokunmaz; mutlak konumlu
 * olduğundan kapsayıcı `relative overflow-hidden` ister.
 */
export function Wash({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 bg-[radial-gradient(120%_100%_at_12%_0%,rgba(151,151,153,0.45)_0%,rgba(151,151,153,0)_72%)] ${className}`}
    />
  );
}
