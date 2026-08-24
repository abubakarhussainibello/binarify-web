import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./icons";

const columns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Services", href: "/#services" },
      { label: "Career", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "MVP Development", href: "/#services" },
      { label: "Enterprise Software", href: "/#services" },
      { label: "AI-Powered Development", href: "/#services" },
      { label: "Brand Identity", href: "/#brand" },
      { label: "Video & Motion", href: "/#brand" },
      { label: "Our Process", href: "/#how" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Start a Project", href: "/#pricing" },
      { label: "Book a Call", href: "/#cta" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact Us", href: "/#cta" },
    ],
  },
];

const socials = ["in", "X", "f", "◎"];

export default function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Image
              src="/brand/binarify-logo.png"
              alt="Binarify"
              width={550}
              height={160}
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted">
              Automated software, faster — transparent and outcome-driven.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-line text-[13px] text-muted transition-colors hover:border-brand/40 hover:text-white"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-dim">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[13px] text-muted transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-14 grid gap-6 border-t border-line pt-10 sm:grid-cols-2 sm:items-center">
          <div>
            <h4 className="text-sm font-semibold text-white">Newsletter</h4>
            <p className="mt-1 text-[13px] text-muted">
              Occasional notes on shipping software faster. No spam.
            </p>
          </div>
          <form className="flex gap-2">
            <input
              type="email"
              required
              placeholder="Your email address"
              aria-label="Email address"
              className="min-w-0 flex-1 rounded-full border border-line bg-white/[0.04] px-4 py-2.5 text-[13px] text-white placeholder:text-muted-dim focus:border-brand/50 focus:outline-none"
            />
            <button
              type="submit"
              className="btn-brand inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2.5 text-[13px] font-medium text-white transition-shadow"
            >
              Subscribe
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-[12px] text-muted-dim sm:flex-row">
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-muted">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-muted">Privacy</a>
          </div>
          <p>© 2026 Binarify Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
