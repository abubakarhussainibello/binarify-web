import Eyebrow from "./Eyebrow";
import { Check, ArrowUpRight, Rocket, Shield, Wallet, Users } from "./icons";
import { ReactLogo, NodeLogo, FlutterLogo, PostgresLogo } from "./tech-icons";


const promises = [
  "A live project board",
  "Weekly demo with the engineers",
  "You own the code from day one",
];

/* ---------- card visuals ---------- */

function PromptVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="w-full max-w-[300px] rounded-xl border border-line bg-surface-2/90 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="ml-1 font-mono text-[10px] text-muted-dim">/scaffold</span>
        </div>
        <p className="mt-3 text-[12px] leading-relaxed text-white/80">
          Generate the billing module: plans, invoices, webhooks, and the tests
          that cover them.
        </p>
        <div className="mt-4 flex items-center gap-2 border-t border-line pt-3 text-[11px] text-brand-bright">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-bright shadow-[0_0_8px_2px_rgba(106,164,255,0.6)]" />
          Writing 14 files…
        </div>
      </div>
    </div>
  );
}

const chips = [
  { Icon: ReactLogo, label: "React", pos: "left-[6%] top-[16%] -rotate-[8deg]" },
  { Icon: NodeLogo, label: "Node", pos: "right-[8%] top-[26%] rotate-[6deg]" },
  { Icon: FlutterLogo, label: "Flutter", pos: "left-[16%] bottom-[18%] rotate-[5deg]" },
  { Icon: PostgresLogo, label: "Postgres", pos: "right-[12%] bottom-[12%] -rotate-[6deg]" },
];

function StackVisual() {
  return (
    <div className="absolute inset-0">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(47,107,255,0.35),rgba(47,107,255,0))] blur-xl" />
      {chips.map(({ Icon, label, pos }) => (
        <div
          key={label}
          className={`absolute ${pos} flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.55)]`}
        >
          <Icon className="h-5 w-5" />
          <span className="text-[12px] font-semibold text-slate-900">{label}</span>
        </div>
      ))}
    </div>
  );
}

function CoreVisual() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="relative grid h-32 w-32 place-items-center">
        <span className="absolute inset-0 rounded-full border border-white/10" />
        <span className="absolute inset-4 rounded-full border border-white/10" />
        <span className="absolute inset-8 rounded-full border border-brand/40" />
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(47,107,255,0.45),rgba(47,107,255,0))] blur-lg" />
        <span className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-b from-[#3d78ff] to-[#1b4fd8] text-white shadow-[0_0_30px_rgba(47,107,255,0.7)]">
          <Shield className="h-6 w-6" />
        </span>
      </div>
    </div>
  );
}

const milestones = [
  { label: "Kickoff", pct: "40%", done: true },
  { label: "Beta accepted", pct: "30%", done: true },
  { label: "Launch", pct: "30%", done: false },
];

function PaymentVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="w-full max-w-[280px] space-y-2">
        {milestones.map((m) => (
          <div
            key={m.label}
            className="flex items-center justify-between rounded-lg border border-line bg-surface-2/80 px-3 py-2.5"
          >
            <span className="flex items-center gap-2 text-[12px] text-white/80">
              <span
                className={`grid h-4 w-4 place-items-center rounded-full ${
                  m.done ? "bg-brand text-white" : "border border-white/20 text-transparent"
                }`}
              >
                <Check className="h-2.5 w-2.5" />
              </span>
              {m.label}
            </span>
            <span className="font-mono text-[12px] text-muted">{m.pct}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BoardVisual() {
  const cols = [
    { head: "Doing", rows: [70, 45] },
    { head: "Review", rows: [55] },
    { head: "Done", rows: [80, 62, 40] },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="grid w-full max-w-[420px] grid-cols-3 gap-3">
        {cols.map((c) => (
          <div key={c.head} className="rounded-xl border border-line bg-surface-2/70 p-3">
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-dim">
              {c.head}
            </div>
            <div className="mt-3 space-y-2">
              {c.rows.map((w, i) => (
                <div key={i} className="rounded-md border border-line bg-white/[0.03] p-2">
                  <div
                    className="h-1.5 rounded-full bg-brand/60"
                    style={{ width: `${w}%` }}
                  />
                  <div className="mt-1.5 h-1 w-1/2 rounded-full bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- card shell ---------- */

function BentoCard({
  span,
  Icon,
  title,
  body,
  children,
}: {
  span: string;
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`panel panel-hover flex flex-col rounded-2xl p-3 ${span}`}>
      <div className="well relative aspect-[16/10] w-full overflow-hidden rounded-xl">
        <div className="dot-grid fade-edges absolute inset-0 opacity-30" />
        {children}
      </div>
      <div className="px-3 pb-2 pt-4">
        <div className="flex items-center gap-2">
          <Icon className="h-3.5 w-3.5 text-brand-bright" />
          <h3 className="text-[15px] font-semibold text-white">{title}</h3>
        </div>
        <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{body}</p>
      </div>
    </div>
  );
}

export default function Solutions() {
  return (
    <section id="solutions" className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
      <Eyebrow center={false}>Our Solutions</Eyebrow>
      <h2 className="display mt-5 max-w-2xl text-balance text-3xl leading-[1.12] text-white sm:text-[2.6rem]">
        A different approach
      </h2>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
        Every pitfall above, answered by the way we build.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <BentoCard
          span="lg:col-span-3"
          Icon={Rocket}
          title="AI-accelerated development"
          body="AI tooling on the boilerplate, senior engineers on the decisions."
        >
          <PromptVisual />
        </BentoCard>

        <BentoCard
          span="lg:col-span-3"
          Icon={Users}
          title="Full-stack ownership"
          body="Design, backend, mobile and infrastructure under one roof."
        >
          <StackVisual />
        </BentoCard>

        <BentoCard
          span="lg:col-span-3"
          Icon={Shield}
          title="Battle-tested foundation"
          body="Auth, payments, roles and CI already hardened in production."
        >
          <CoreVisual />
        </BentoCard>

        <BentoCard
          span="lg:col-span-3"
          Icon={Wallet}
          title="Flexible payment"
          body="Naira or dollars, tied to work you have seen running."
        >
          <PaymentVisual />
        </BentoCard>

        {/* Wide closing card */}
        <div className="panel grid gap-8 overflow-hidden rounded-2xl p-6 sm:col-span-2 sm:p-8 lg:col-span-6 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-bright">
              No hidden fees
            </span>
            <h3 className="display mt-4 text-balance text-2xl leading-tight text-white">
              100% transparency, kickoff to handover
            </h3>

            <ul className="mt-5 grid gap-3">
              {promises.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-[13px] text-muted">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-brand/30 bg-brand/15 text-brand-bright">
                    <Check className="h-3 w-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <a
              href="#pricing"
              className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-brand-bright transition-colors hover:text-white"
            >
              See exactly what it costs
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="well relative aspect-[16/10] w-full overflow-hidden rounded-xl">
            <div className="dot-grid fade-edges absolute inset-0 opacity-30" />
            <BoardVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
