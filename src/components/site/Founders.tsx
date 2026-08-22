import Image from "next/image";
import Eyebrow from "./Eyebrow";
import { ArrowUpRight } from "./icons";

type Person = {
  name: string;
  role: string;
  bio: string;
  focus: string[];
  /* Drop a portrait in /public/team and set the path, e.g. "/team/samuel.jpg".
     Without one the card renders a monogram tile. */
  image?: string;
  links?: { label: string; href: string }[];
};

const people: Person[] = [
  {
    name: "Samuel Adeniyi",
    role: "Co-founder & Chief Executive Officer",
    bio: "Leads client strategy and commercial delivery. Sits in on every scoping call, so the person setting the timeline is the person accountable for it.",
    focus: ["Client strategy", "Commercial", "Scoping"],
    image: "/team/samuel.png",
  },
  {
    name: "Abubakar Bello",
    role: "Co-founder & Managing Partner",
    bio: "Runs delivery and engineering operations — how every build gets scoped, staffed and shipped, and how it stays on schedule once it is.",
    focus: ["Delivery", "Engineering ops", "Quality"],
    image: "/team/abubakar.png",
  },
  {
    name: "Aliyu Kamilu",
    role: "Chief Technology Officer",
    bio: "Owns architecture and engineering standards across every build — from the data model to what finally reaches production.",
    focus: ["Architecture", "Standards", "Code review"],
    image: "/team/aliyu.png",
  },
  {
    name: "Ibrahim Ismail",
    role: "Head of Product Development",
    bio: "Turns a rough concept into a scoped, sequenced build, then holds the line on what actually ships inside the thirty days.",
    focus: ["Product", "Scoping", "Roadmap"],
    image: "/team/ibrahim.png",
  },
  {
    name: "Nurudeen Aliyu",
    role: "Head of Project & Product Delivery",
    bio: "Certified project manager and senior engineer. Runs delivery so every milestone lands on the date it was promised.",
    focus: ["Delivery", "Milestones", "Risk"],
    image: "/team/nurudeen.png",
  },
  {
    name: "Muhammad Gimba",
    role: "Head of R&D",
    bio: "Runs research and prototyping — proving out new capability, new tooling and the data behind it before any of it reaches a client build.",
    focus: ["Research", "Prototyping", "Data"],
    image: "/team/gimba.png",
  },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function Portrait({ founder }: { founder: Person }) {
  return (
    <div className="relative shrink-0">
      {/* halo */}
      <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-[radial-gradient(closest-side,rgba(47,107,255,0.35),rgba(47,107,255,0))] opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="well relative grid h-24 w-24 place-items-center overflow-hidden rounded-2xl sm:h-28 sm:w-28">
        {founder.image ? (
          <Image
            src={founder.image}
            alt={founder.name}
            fill
            sizes="112px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div className="dot-grid fade-edges absolute inset-0 opacity-40" />
            <span className="absolute inset-3 rounded-xl border border-white/[0.07]" />
            <span className="absolute inset-6 rounded-lg border border-brand/25" />
            <span className="display relative text-2xl text-white sm:text-[1.7rem]">
              {initials(founder.name)}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default function Founders() {
  return (
    <section id="founders" className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
      <Eyebrow center={false}>Leadership</Eyebrow>
      <h2 className="display mt-5 max-w-2xl text-balance text-3xl leading-[1.12] text-white sm:text-[2.6rem]">
        The people behind
        <br /> the work
      </h2>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
        A senior team, not a bench of juniors behind a sales contact. The
        people listed here are the people your project actually runs through.
      </p>

      <div className="relative mt-12 overflow-hidden">
        {/* ambient light behind the pair */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-full max-w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(47,107,255,0.18),rgba(47,107,255,0))] blur-2xl" />

        <div
          className={`relative isolate grid gap-px overflow-hidden rounded-3xl border border-line bg-line ${
            people.length > 2 ? "sm:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"
          }`}
        >
          {/* the "&" join only makes sense for a pair */}
          {people.length === 2 && (
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:block">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface-2 shadow-[0_0_30px_rgba(47,107,255,0.35)]">
                <span className="display text-[15px] text-brand-bright">&amp;</span>
              </div>
            </div>
          )}

          {people.map((f, i) => (
            <article
              key={f.name}
              className={`group relative flex flex-col bg-background p-7 transition-colors hover:bg-white/[0.02] ${
                people.length > 2 ? "sm:p-8" : "sm:p-9 md:p-10"
              }`}
            >
              {/* top accent, lights up on hover */}
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-bright/0 to-transparent transition-all duration-500 group-hover:via-brand-bright/60" />

              <div className="flex items-start justify-between gap-4">
                <Portrait founder={f} />
                <span className="font-mono text-[11px] text-muted-dim">
                  0{i + 1}
                </span>
              </div>

              <h3 className="display mt-7 text-xl text-white sm:text-2xl">
                {f.name}
              </h3>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-bright">
                {f.role}
              </p>

              <p className="mt-4 text-[13px] leading-relaxed text-muted">{f.bio}</p>

              <div className="mt-auto pt-7">
                <div className="flex flex-wrap gap-2 border-t border-line pt-5">
                  {f.focus.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {f.links && f.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                    {f.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        className="inline-flex items-center gap-1 text-[12px] text-muted transition-colors hover:text-white"
                      >
                        {l.label}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
