import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowRight(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export function Check(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function Plus(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function ChevronDown(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function Clock(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function Phone(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <path d="M15.5 3H8.5A1.5 1.5 0 0 0 7 4.5v15A1.5 1.5 0 0 0 8.5 21h7a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 15.5 3z" />
      <path d="M11 18h2" />
    </svg>
  );
}

export function Gift(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <path d="M20 12v9H4v-9M2 7h20v5H2zM12 22V7M12 7S11 3 8.5 3 6 6 12 7zM12 7s1-4 3.5-4S18 6 12 7z" />
    </svg>
  );
}

export function Shield(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function Bug(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <rect x="8" y="8" width="8" height="10" rx="4" />
      <path d="M12 8V5M9 6L7.5 4.5M15 6l1.5-1.5M8 12H4M20 12h-4M8 16l-2 2M16 16l2 2" />
    </svg>
  );
}

export function Wallet(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <path d="M3 10h18M16 14h2" />
    </svg>
  );
}

export function Rocket(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <path d="M5 15c-1 1-1.5 4-1.5 4S6 18.5 7 17.5M14 4c3 1 6 4 6 4l-8 8-4-4 6-8z" />
      <circle cx="14.5" cy="9.5" r="1.5" />
      <path d="M9 15l-2 2" />
    </svg>
  );
}

export function Users(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5.5a3 3 0 0 1 0 5.8M21 20c0-2.4-1.4-4.5-3.5-5.4" />
    </svg>
  );
}

export function Sparkles(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
      <path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8z" />
    </svg>
  );
}

export function Cloud(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <path d="M7 18h10a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.1 11 3.5 3.5 0 0 0 7 18z" />
    </svg>
  );
}

export function Code(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
    </svg>
  );
}

export function Bolt(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <path d="M13 3L5 13h6l-1 8 8-10h-6z" />
    </svg>
  );
}

export function Target(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

export function Handover(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <path d="M4 13l4-4 3 3 5-5" />
      <path d="M4 20h16" />
      <path d="M16 7h4v4" />
    </svg>
  );
}

/* Brand glyph — filled, so it does not take the stroke defaults above. */
export function LinkedIn({ className = "", ...p }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...p}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Palette(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <path d="M12 21a9 9 0 1 1 9-9c0 1.66-1.34 2.5-3 2.5h-1.5a2 2 0 0 0-1.4 3.42A2 2 0 0 1 12 21z" />
      <circle cx="7.5" cy="12" r="1" />
      <circle cx="10" cy="8" r="1" />
      <circle cx="15" cy="8.5" r="1" />
    </svg>
  );
}

export function Compass(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5.2-5.2 2 2-5.2z" />
    </svg>
  );
}

export function Video(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <rect x="3" y="6" width="12" height="12" rx="2" />
      <path d="M15 10.5l6-3.2v9.4l-6-3.2z" />
    </svg>
  );
}

export function Motion(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...s} {...p}>
      <path d="M3 16c4.5 0 5.5-8 10-8 2.2 0 3.4 1.5 4 3" />
      <path d="M14 6h3.5V9.5" />
      <circle cx="5" cy="19" r="1.6" />
    </svg>
  );
}
