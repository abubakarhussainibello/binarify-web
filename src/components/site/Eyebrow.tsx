export default function Eyebrow({
  children,
  center = true,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`flex ${center ? "justify-center" : ""}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-bright shadow-[0_0_8px_2px_rgba(106,164,255,0.6)]" />
        {children}
      </span>
    </div>
  );
}
