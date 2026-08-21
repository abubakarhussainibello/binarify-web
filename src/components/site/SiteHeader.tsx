import Image from "next/image";
import Link from "next/link";
import BookCallButton from "./BookCall";

const navLinks = [
  { label: "Home", href: "/#top" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#how" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/#pricing" },
];

export default function SiteHeader({ active = "Home" }: { active?: string }) {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
      <Link href="/" aria-label="Binarify home" className="shrink-0">
        <Image
          src="/brand/binarify-logo.png"
          alt="Binarify"
          width={550}
          height={160}
          priority
          className="h-7 w-auto"
        />
      </Link>

      <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border border-line bg-white/[0.04] p-1 backdrop-blur-md md:flex">
        {navLinks.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            aria-current={l.label === active ? "page" : undefined}
            className={[
              "rounded-full px-3.5 py-1.5 text-[13px] transition-colors",
              l.label === active
                ? "bg-white/10 text-white"
                : "text-muted hover:text-white",
            ].join(" ")}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <BookCallButton className="btn-ghost rounded-full px-4 py-2 text-[13px] font-medium text-white transition-colors">
        Book a Call
      </BookCallButton>
    </header>
  );
}
