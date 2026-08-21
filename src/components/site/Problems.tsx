import Eyebrow from "./Eyebrow";
import { Clock, Bug, Wallet } from "./icons";

const problems = [
  {
    icon: Clock,
    title: "Endless Development",
    body: "Projects that drag on for months with no clear end in sight.",
    note: "Lost market opportunity",
  },
  {
    icon: Bug,
    title: "Technical Debt Trap",
    body: "Rushed code that becomes impossible to maintain or scale.",
    note: "Stuck with legacy code",
  },
  {
    icon: Wallet,
    title: "Budget Drain",
    body: "Costs that spiral far beyond the original estimate.",
    note: "Running out of resources",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Most Startup Problems</Eyebrow>
        <h2 className="display mt-5 text-balance text-3xl leading-[1.12] text-white sm:text-[2.6rem]">
          Most MVPs fail
          <br /> before they start
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          90% of startups fail on the same three pitfalls.
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {problems.map(({ icon: Icon, title, body, note }) => (
          <div
            key={title}
            className="panel panel-hover rounded-2xl p-6"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{body}</p>
            <div className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-[11px] font-medium uppercase tracking-[0.12em] text-red-400/80">
              <span className="h-1 w-1 rounded-full bg-red-400" />
              {note}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
