import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import Work from "@/components/site/Work";
import CtaSection from "@/components/site/CtaSection";
import Footer from "@/components/site/Footer";
import Eyebrow from "@/components/site/Eyebrow";

export const metadata: Metadata = {
  title: "Portfolio — Binarify",
  description:
    "Platforms, dashboards and systems we have shipped for startups, government agencies and enterprises — with the numbers behind them.",
};

const stats = [
  { value: "200+", label: "Clients shipped" },
  { value: "6+", label: "Years building" },
  { value: "100%", label: "On-time delivery" },
  { value: "98%", label: "Success rate" },
];

const sectors = [
  "Government & public sector",
  "Energy",
  "Health",
  "Fintech",
  "Education",
  "Marketplaces",
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-full max-w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(47,107,255,0.28),rgba(47,107,255,0))] blur-2xl" />
        <div className="grid-lines fade-bottom pointer-events-none absolute inset-0 opacity-50" />

        <SiteHeader active="Portfolio" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-14 sm:pb-20 sm:pt-20">
          <Eyebrow center={false}>Portfolio</Eyebrow>
          <h1 className="display mt-6 max-w-3xl text-balance text-4xl leading-[1.08] text-white sm:text-6xl">
            Shipped, running,
            <br /> and still in use
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted">
            Platforms and systems built for startups, agencies and enterprises —
            with the numbers they moved.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {sectors.map((s) => (
              <span
                key={s}
                className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-4">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-background px-6 py-7">
                <div className="display text-3xl text-brand-bright">{s.value}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-dim">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Work heading={false} />

      <CtaSection />
      <Footer />
    </div>
  );
}
