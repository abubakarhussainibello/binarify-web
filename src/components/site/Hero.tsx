import Image from "next/image";
import { ArrowUpRight, Rocket } from "./icons";
import SiteHeader from "./SiteHeader";
import BookCallButton from "./BookCall";


const logos = [
  { src: "/partners/mono/mainstream.png", alt: "Mainstream Energy Solutions" },
  { src: "/partners/mono/ndpc.png", alt: "Nigeria Data Protection Commission" },
  { src: "/partners/mono/google-workspace.png", alt: "Google Workspace" },
  { src: "/partners/mono/digitalocean.png", alt: "DigitalOcean" },
  { src: "/partners/mono/cloud-clusters.png", alt: "Cloud Clusters" },
  { src: "/partners/mono/primeguage.png", alt: "Primeguage" },
];

/* Isometric platform with a glowing core and routed connections */
function IsoStage() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 1200 520"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <radialGradient id="core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#bcd6ff" />
          <stop offset="100%" stopColor="#2f6bff" />
        </radialGradient>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4d8bff" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#4d8bff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="slabTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2440" />
          <stop offset="100%" stopColor="#0c1020" />
        </linearGradient>
        <linearGradient id="slabSide" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#131a2e" />
          <stop offset="100%" stopColor="#080a12" />
        </linearGradient>
        <linearGradient id="beam" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#7fb0ff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7fb0ff" stopOpacity="0" />
        </linearGradient>
        <filter id="soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      {/* routed connections */}
      <g fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth="1">
        <path d="M230 210 L330 260 L470 190" />
        <path d="M250 350 L360 292 L470 350" />
        <path d="M980 200 L860 262 L730 196" />
        <path d="M960 348 L840 288 L730 350" />
        <path d="M600 96 L600 150" />
      </g>
      <g fill="rgba(150,190,255,0.85)">
        <circle cx="330" cy="260" r="2.5" />
        <circle cx="360" cy="292" r="2.5" />
        <circle cx="860" cy="262" r="2.5" />
        <circle cx="840" cy="288" r="2.5" />
      </g>

      {/* satellite nodes */}
      <g>
        {[
          { x: 175, y: 210 },
          { x: 195, y: 352 },
          { x: 1025, y: 200 },
          { x: 1005, y: 350 },
        ].map((n) => (
          <g key={`${n.x}-${n.y}`}>
            <ellipse
              cx={n.x}
              cy={n.y}
              rx="58"
              ry="21"
              fill="#0d1017"
              stroke="rgba(255,255,255,0.12)"
            />
            <ellipse
              cx={n.x}
              cy={n.y - 4}
              rx="58"
              ry="21"
              fill="#12161f"
              stroke="rgba(255,255,255,0.16)"
            />
          </g>
        ))}
      </g>

      {/* slab sides */}
      <path
        d="M400 300 L400 332 L600 428 L800 332 L800 300 L600 396 Z"
        fill="url(#slabSide)"
        stroke="rgba(255,255,255,0.09)"
      />
      {/* slab top */}
      <path
        d="M600 204 L800 300 L600 396 L400 300 Z"
        fill="url(#slabTop)"
        stroke="rgba(122,160,255,0.35)"
      />
      {/* inner rings on the slab */}
      <path
        d="M600 244 L720 300 L600 356 L480 300 Z"
        fill="none"
        stroke="rgba(122,160,255,0.22)"
      />
      <path
        d="M600 272 L660 300 L600 328 L540 300 Z"
        fill="none"
        stroke="rgba(150,190,255,0.35)"
      />

      {/* light beam */}
      <path d="M576 200 L624 200 L648 60 L552 60 Z" fill="url(#beam)" opacity="0.55" />

      {/* glowing core */}
      <circle cx="600" cy="196" r="96" fill="url(#halo)" filter="url(#soft)" />
      <circle cx="600" cy="196" r="30" fill="url(#core)" />
      <circle cx="600" cy="196" r="46" fill="none" stroke="rgba(190,215,255,0.5)" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* ambient light */}
      <div className="pointer-events-none absolute left-1/2 top-[6%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(47,107,255,0.30),rgba(47,107,255,0))] blur-2xl" />
      <div className="grid-lines fade-bottom pointer-events-none absolute inset-0 opacity-60" />

      <SiteHeader active="Home" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-8 pt-10 sm:pt-16">
        {/* badge */}
        <div className="flex">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] py-1 pl-1 pr-3 text-[12px] text-muted">
            <span className="inline-flex items-center gap-1 rounded-full bg-brand/20 px-2 py-0.5 text-[11px] font-semibold text-brand-bright">
              <Rocket className="h-3 w-3" /> 200+ builds
            </span>
            100% on-time delivery
          </span>
        </div>

        <h1 className="display mt-6 max-w-3xl text-balance text-4xl leading-[1.08] text-white sm:text-6xl">
          Ship your MVP in
          <br /> 30 days, not 6 months
        </h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
          Battle-tested code, enterprise-grade and AI-accelerated — with the
          brand, video and design to launch it properly.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#pricing"
            className="btn-ghost rounded-full px-5 py-2.5 text-[13px] font-medium text-white transition-colors"
          >
            See Pricing
          </a>
          <BookCallButton
            className="btn-brand inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-medium text-white transition-shadow"
            icon={<ArrowUpRight className="h-3.5 w-3.5" />}
          >
            Schedule Strategy Call
          </BookCallButton>
        </div>
      </div>

      {/* stage */}
      <div className="relative z-0 -mt-6 h-[300px] w-full sm:-mt-16 sm:h-[420px]">
        <IsoStage />
      </div>

      {/* partner strip */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
        <div className="grid grid-cols-3 items-center gap-x-8 gap-y-6 sm:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo.src} className="relative h-7 w-full opacity-55 transition-opacity duration-300 hover:opacity-90">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
