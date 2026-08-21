import Image from "next/image";
import { ArrowUpRight } from "./icons";
import BookCallButton from "./BookCall";

const perks = ["1-on-1 call", "30 minutes", "No commitment", "Feasibility check"];

export default function CtaSection() {
  return (
    <section id="cta" className="relative mt-24 overflow-hidden sm:mt-32">
      <div className="grid-lines fade-bottom pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(47,107,255,0.45),rgba(47,107,255,0))] blur-2xl" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-gradient-to-b from-[#3d78ff] to-[#1b4fd8] shadow-[0_0_44px_rgba(47,107,255,0.75)]">
          <Image
            src="/brand/binarify-mark-white.png"
            alt=""
            width={274}
            height={256}
            className="h-7 w-auto"
          />
        </div>

        <h2 className="display mt-8 text-balance text-4xl leading-[1.1] text-white sm:text-5xl">
          Start building
          <br /> with the best
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-muted">
          Book a 30-minute call. Leave with a timeline, a budget, and a straight
          answer on whether we are the right fit.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="btn-ghost rounded-full px-5 py-2.5 text-[13px] font-medium text-white transition-colors"
          >
            Estimate My Budget
          </a>
          <BookCallButton
            className="btn-brand inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-medium text-white transition-shadow"
            icon={<ArrowUpRight className="h-3.5 w-3.5" />}
          >
            Schedule a Call
          </BookCallButton>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-dim">
          {perks.map((p) => (
            <span key={p} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-brand-bright" />
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
