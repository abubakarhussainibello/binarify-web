import Eyebrow from "./Eyebrow";
import { Target, Code, Bolt, Handover, ArrowUpRight } from "./icons";

const steps = [
  {
    n: "01",
    Icon: Target,
    title: "Scope & Architecture",
    body: "We lock scope, map the architecture and sign off screens before a line of code.",
  },
  {
    n: "02",
    Icon: Code,
    title: "Build In The Open",
    body: "Core flows land in staging every week. You watch the product come together.",
  },
  {
    n: "03",
    Icon: Bolt,
    title: "Beta With Real Users",
    body: "Your first users get in and we tune the build from what actually happens.",
    active: true,
  },
  {
    n: "04",
    Icon: Handover,
    title: "Launch & Handover",
    body: "Production launch, then repo, cloud accounts and docs handed over to you.",
  },
];

/* Glowing isometric hub with light rails running to the edges */
function Hub() {
  const rails = [
    "M600 236 L214 148 L188 160 L600 258 Z",
    "M600 236 L986 148 L1012 160 L600 258 Z",
    "M600 258 L214 346 L188 334 L600 236 Z",
    "M600 258 L986 346 L1012 334 L600 236 Z",
  ];
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 1200 420"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <linearGradient id="rail" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2f6bff" stopOpacity="0.15" />
          <stop offset="55%" stopColor="#5b95ff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#bcd8ff" stopOpacity="1" />
        </linearGradient>
        <radialGradient id="hubCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#bcd6ff" />
          <stop offset="100%" stopColor="#2f6bff" />
        </radialGradient>
        <radialGradient id="hubHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4d8bff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#4d8bff" stopOpacity="0" />
        </radialGradient>
        <filter id="railGlow" x="-20%" y="-80%" width="140%" height="260%">
          <feGaussianBlur stdDeviation="10" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ground plane */}
      <path
        d="M600 120 L1090 247 L600 374 L110 247 Z"
        fill="none"
        stroke="rgba(255,255,255,0.06)"
      />
      <path
        d="M600 170 L880 247 L600 324 L320 247 Z"
        fill="none"
        stroke="rgba(255,255,255,0.05)"
      />

      {/* light rails */}
      <g filter="url(#railGlow)">
        {rails.map((d, i) => (
          <path key={i} d={d} fill="url(#rail)" opacity="0.9" />
        ))}
      </g>

      {/* end nodes */}
      <g>
        {[
          [188, 154],
          [1012, 154],
          [188, 340],
          [1012, 340],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <ellipse
              cx={x}
              cy={y}
              rx="34"
              ry="12"
              fill="#0d1017"
              stroke="rgba(255,255,255,0.14)"
            />
            <circle cx={x} cy={y} r="3" fill="#9cc2ff" />
          </g>
        ))}
      </g>

      {/* core */}
      <circle cx="600" cy="247" r="110" fill="url(#hubHalo)" opacity="0.55" />
      <circle cx="600" cy="247" r="26" fill="url(#hubCore)" />
      <circle cx="600" cy="247" r="42" fill="none" stroke="rgba(190,215,255,0.45)" />
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
      <Eyebrow center={false}>The Process</Eyebrow>
      <h2 className="display mt-5 max-w-2xl text-balance text-3xl leading-[1.12] text-white sm:text-[2.6rem]">
        How it works
      </h2>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
        Four weeks, four checkpoints. No mystery, no black box.
      </p>

      {/* Hub */}
      <div className="relative mt-6 h-[260px] w-full sm:h-[400px]">
        <div className="grid-lines fade-edges pointer-events-none absolute inset-0 opacity-40" />
        <Hub />

        {/* floating step marker */}
        <div className="absolute left-1/2 top-[26%] hidden w-[240px] -translate-x-[62%] sm:block">
          <div className="panel rounded-xl px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.65)] backdrop-blur-md">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-dim">
              step · 03
            </div>
            <div className="display mt-1 text-[15px] text-brand-bright">
              Beta With Real Users
            </div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ n, Icon, title, body, active }) => (
          <div key={n} className="group">
            <div
              className={`h-px w-full ${
                active
                  ? "bg-brand-bright shadow-[0_0_12px_2px_rgba(106,164,255,0.55)]"
                  : "bg-line"
              }`}
            />
            <div className="pt-5">
              <div className="flex items-center justify-between">
                <Icon
                  className={`h-4 w-4 ${active ? "text-brand-bright" : "text-muted-dim"}`}
                />
                <span className="font-mono text-[10px] text-muted-dim">{n}</span>
              </div>
              <h3
                className={`mt-4 text-[15px] font-semibold ${
                  active ? "text-brand-bright" : "text-white"
                }`}
              >
                {title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{body}</p>
              <a
                href="#cta"
                className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-muted transition-colors group-hover:text-brand-bright"
              >
                Get Started
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
