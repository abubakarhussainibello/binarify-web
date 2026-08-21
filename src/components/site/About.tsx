import Eyebrow from "./Eyebrow";
import { Users, Shield, Check, ArrowUpRight } from "./icons";

const principles = [
  {
    Icon: Users,
    title: "Senior engineers only",
    body: "The people on your call are the people writing the code. No juniors parked on your build to pad the invoice.",
  },
  {
    Icon: Shield,
    title: "Fixed scope, fixed price",
    body: "We agree what ships and what it costs before week one. Change the scope and we re-quote in the open.",
  },
  {
    Icon: Check,
    title: "You own everything",
    body: "Repo, cloud accounts, pipelines and documentation are in your name from the first commit.",
  },
];

const places = ["Abuja", "Lagos", "Remote-first"];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left — the story */}
        <div>
          <Eyebrow center={false}>About Us</Eyebrow>
          <h2 className="display mt-5 text-balance text-3xl leading-[1.12] text-white sm:text-[2.6rem]">
            A small team that
            <br /> ships like a big one
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              We are a product engineering studio. For six years we have built
              the software that energy companies, federal agencies and founders
              run their operations on — and we have done it without the drawn-out
              timelines those projects usually carry.
            </p>
            <p>
              The method is not complicated. Keep the team small and senior, start
              from foundations already hardened in production, and let AI absorb
              the work that never needed a human. What is left is the part that
              actually decides whether a product works.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-dim">
            {places.map((p) => (
              <span key={p} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-brand-bright" />
                {p}
              </span>
            ))}
          </div>

          <a
            href="#pricing"
            className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium text-brand-bright transition-colors hover:text-white"
          >
            Start a project with us
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Right — how we work */}
        <div className="space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-dim">
            How we work
          </span>
          {principles.map(({ Icon, title, body }) => (
            <div key={title} className="panel panel-hover rounded-2xl p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand-bright">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-white">{title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
