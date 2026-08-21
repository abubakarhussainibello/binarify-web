import type { SVGProps } from "react";
type P = SVGProps<SVGSVGElement>;

export function ReactLogo(p: P) {
  return (
    <svg viewBox="0 0 32 32" {...p}>
      <circle cx="16" cy="16" r="2.4" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="1.4">
        <ellipse cx="16" cy="16" rx="11" ry="4.4" />
        <ellipse cx="16" cy="16" rx="11" ry="4.4" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="11" ry="4.4" transform="rotate(120 16 16)" />
      </g>
    </svg>
  );
}
export function LaravelLogo(p: P) {
  return (
    <svg viewBox="0 0 32 32" {...p}>
      <path d="M6 9l5-3 6 3.4-5 2.9zM6 9v11l5 2.9V11.9zM17 12.4l5-2.9 5 2.9-5 2.9zM22 15.3v6l-5 2.9v-6z" fill="#FF2D20" />
    </svg>
  );
}
export function FlutterLogo(p: P) {
  return (
    <svg viewBox="0 0 32 32" {...p}>
      <path d="M19 5L8 16l3.4 3.4L26 5zM19 15l-6 6 6 6h5l-6-6 6-6z" fill="#40C4FF" />
    </svg>
  );
}
export function TailwindLogo(p: P) {
  return (
    <svg viewBox="0 0 32 32" {...p}>
      <path d="M10 13c1.3-5 4.3-6 9-3 2.7 1.7 3.8 1.7 5-.5-1.3 5-4.3 6-9 3-2.7-1.7-3.8-1.7-5 .5zM3 21c1.3-5 4.3-6 9-3 2.7 1.7 3.8 1.7 5-.5-1.3 5-4.3 6-9 3-2.7-1.7-3.8-1.7-5 .5z" fill="#38BDF8" />
    </svg>
  );
}
export function JsLogo(p: P) {
  return (
    <svg viewBox="0 0 32 32" {...p}>
      <rect width="32" height="32" rx="5" fill="#F7DF1E" />
      <path d="M17 22c.6 1 1.4 1.7 2.7 1.7 1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.2-1.9-1.7l-.6-.3c-1.9-.8-3.2-1.8-3.2-3.9 0-2 1.5-3.4 3.8-3.4 1.6 0 2.8.6 3.6 2.1l-2 1.3c-.4-.8-.9-1.1-1.6-1.1s-1.2.5-1.2 1.1c0 .8.5 1.1 1.6 1.6l.6.3c2.2 1 3.5 1.9 3.5 4 0 2.4-1.9 3.7-4.4 3.7-2.5 0-4-1.2-4.8-2.7zm-7.9.2c.4.7.8 1.3 1.7 1.3.8 0 1.4-.3 1.4-1.6v-7.9h2.4v7.9c0 2.5-1.5 3.6-3.6 3.6-1.9 0-3.1-1-3.7-2.2z" fill="#000" />
    </svg>
  );
}
export function PostgresLogo(p: P) {
  return (
    <svg viewBox="0 0 32 32" {...p}>
      <circle cx="16" cy="16" r="12" fill="#336791" />
      <path d="M11 22c-1-4-1-8 1-10 2-1.8 6-1.8 8 0 1.6 1.5 1.6 5 .5 7M14 12c.2 4 .3 7 1.2 9M19 12.5c0 3-.3 5-1 7" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
export function NodeLogo(p: P) {
  return (
    <svg viewBox="0 0 32 32" {...p}>
      <path d="M16 3l11 6.3v13.4L16 29 5 22.7V9.3z" fill="#339933" />
      <path d="M16 11c-2.4 0-4 1-4 2.7 0 3.4 6 2 6 4 0 .7-.8 1.1-2 1.1-1.4 0-2-.5-2.1-1.4h-1.9c.1 1.9 1.5 2.9 4 2.9 2.4 0 4-1.1 4-2.9 0-3.5-6-2.2-6-4 0-.6.6-1 1.9-1 1.1 0 1.7.4 1.9 1.2h1.9C19.6 12 18.3 11 16 11z" fill="#fff" />
    </svg>
  );
}
export function MongoLogo(p: P) {
  return (
    <svg viewBox="0 0 32 32" {...p}>
      <path d="M16 3c2 5 6 7 6 13 0 5-3 8-5 9l-1 4-1-4c-2-1-5-4-5-9 0-6 4-8 6-13z" fill="#47A248" />
      <path d="M16 6v20" stroke="#2f7d32" strokeWidth="1" />
    </svg>
  );
}
export function DockerLogo(p: P) {
  return (
    <svg viewBox="0 0 32 32" {...p}>
      <g fill="#2496ED">
        <rect x="6" y="14" width="3.4" height="3.4" /><rect x="10" y="14" width="3.4" height="3.4" /><rect x="14" y="14" width="3.4" height="3.4" /><rect x="18" y="14" width="3.4" height="3.4" /><rect x="10" y="10" width="3.4" height="3.4" /><rect x="14" y="10" width="3.4" height="3.4" /><rect x="18" y="10" width="3.4" height="3.4" />
      </g>
      <path d="M26 15c-1-.7-2.4-.8-3.4-.4-.2-1.3-1-2-1.7-2.6l-.6-.5-.5.6c-.7.9-.9 2.3-.4 3.3-1 .5-2.7.4-14.9.4 0 3.5 1.8 8 6.4 8 5.5 0 9.6-2.6 11.5-7.3 2 .1 3.3-.4 3.9-1.6l.3-.5z" fill="#2496ED" />
    </svg>
  );
}
export function TsLogo(p: P) {
  return (
    <svg viewBox="0 0 32 32" {...p}>
      <rect width="32" height="32" rx="5" fill="#3178C6" />
      <path d="M17 17.5v-1.8h-8v1.8h3v8h2v-8zM19 24.4c.6 1 1.7 1.5 3.2 1.5 2 0 3.3-1 3.3-2.8 0-1.6-.9-2.3-2.6-3l-.5-.2c-.9-.4-1.3-.6-1.3-1.2 0-.5.4-.9 1-.9.6 0 1 .2 1.4.9l1.6-1c-.7-1.2-1.6-1.6-3-1.6-1.9 0-3.1 1.2-3.1 2.8 0 1.6.9 2.3 2.3 2.9l.5.2c1 .4 1.5.7 1.5 1.3 0 .6-.5 1-1.3 1-.9 0-1.5-.5-1.9-1.2z" fill="#fff" />
    </svg>
  );
}
export function AwsLogo(p: P) {
  return (
    <svg viewBox="0 0 40 32" {...p}>
      <text x="20" y="17" fontSize="11" fontWeight="700" fill="#232F3E" textAnchor="middle" fontFamily="Inter, sans-serif">aws</text>
      <path d="M11 22c6 3 12 3 18 0" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
