import Eyebrow from "./Eyebrow";
import { Palette, Compass, Video, Motion, ArrowUpRight } from "./icons";

const work = [
  {
    Icon: Compass,
    tint: "text-brand-bright",
    title: "Brand Strategy & Naming",
    body: "Positioning, messaging, naming and tone — the thinking that happens before anyone opens a design file.",
  },
  {
    Icon: Palette,
    tint: "text-amber-400",
    title: "Brand Identity",
    body: "Logo, colour, type and the system that holds them together, with guidelines so it survives contact with the real world.",
  },
  {
    Icon: Video,
    tint: "text-rose-400",
    title: "Video Production & Editing",
    body: "Product demos, explainers, testimonials and ad cuts — filmed, edited and delivered in the formats each channel wants.",
  },
  {
    Icon: Motion,
    tint: "text-violet-400",
    title: "Motion & Social",
    body: "Motion graphics, animated marks and the steady stream of content that keeps your channels from going quiet.",
  },
];

export default function BrandCreative() {
  return (
    <section id="brand" className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Brand &amp; Creative</Eyebrow>
        <h2 className="display mt-5 text-balance text-3xl leading-[1.12] text-white sm:text-[2.6rem]">
          Built well, and
          <br /> worth looking at
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Shipping in thirty days counts for little if the product looks like nobody cared.
          The same team handles both.
        </p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {work.map(({ Icon, tint, title, body }) => (
          <div
            key={title}
            className="group flex flex-col bg-background p-6 transition-colors hover:bg-white/[0.03]"
          >
            <Icon className={`h-5 w-5 ${tint}`} />
            <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{body}</p>
            <a
              href="#pricing"
              className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[12px] font-medium text-muted transition-colors group-hover:text-brand-bright"
            >
              Get Started
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
