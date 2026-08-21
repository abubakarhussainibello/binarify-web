import Eyebrow from "./Eyebrow";

function DashboardScreen() {
  return (
    <div className="h-full w-full bg-[#0b0d11] p-3">
      <div className="flex h-full gap-2">
        <div className="w-1/4 space-y-1.5">
          <div className="h-2 rounded bg-brand/70" />
          <div className="h-2 rounded bg-white/10" />
          <div className="h-2 rounded bg-white/10" />
          <div className="h-2 rounded bg-white/10" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex gap-2">
            <div className="h-9 flex-1 rounded border border-line bg-white/[0.03]" />
            <div className="h-9 flex-1 rounded border border-line bg-white/[0.03]" />
            <div className="h-9 flex-1 rounded border border-line bg-white/[0.03]" />
          </div>
          <div className="h-14 rounded border border-line bg-white/[0.03]" />
          <div className="h-7 rounded bg-gradient-to-r from-brand/50 to-brand/5" />
        </div>
      </div>
    </div>
  );
}

function Laptop() {
  return (
    <div className="w-full max-w-md">
      <div className="rounded-t-xl border-[6px] border-[#1b1f27] bg-[#1b1f27]">
        <div className="aspect-[16/10] overflow-hidden rounded-md">
          <DashboardScreen />
        </div>
      </div>
      <div className="mx-auto h-2 w-[112%] -translate-x-[5%] rounded-b-xl bg-[#22262f]" />
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="mx-auto w-40 rounded-[2rem] border-[7px] border-[#1b1f27] bg-[#1b1f27] shadow-2xl">
      <div className="aspect-[9/19] overflow-hidden rounded-[1.4rem]">
        <div className="h-full bg-[#0b0d11] p-3">
          <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-white/15" />
          <div className="h-20 rounded-xl bg-gradient-to-br from-[#3d78ff] to-[#1b4fd8]" />
          <div className="mt-3 space-y-2">
            <div className="h-8 rounded-lg border border-line bg-white/[0.03]" />
            <div className="h-8 rounded-lg border border-line bg-white/[0.03]" />
            <div className="h-8 rounded-lg border border-line bg-white/[0.03]" />
          </div>
        </div>
      </div>
    </div>
  );
}

type Project = {
  badge: string;
  title: string;
  challenge: string;
  result: string;
  stats: { value: string; label: string }[];
  device: "laptop" | "phone";
  reverse?: boolean;
};

const projects: Project[] = [
  {
    badge: "Web Development",
    title: "KOL Platform",
    challenge: "Platform serving 1,000+ users needed rebuild.",
    result: "Scaled with reliable uptime and revenue.",
    stats: [
      { value: "99%", label: "Uptime system" },
      { value: "5,000+", label: "Users supported at scale" },
      { value: "3 Month", label: "From idea to launch" },
    ],
    device: "laptop",
  },
  {
    badge: "Government",
    title: "Government Dashboard",
    challenge: "Centralize educational data across regions.",
    result: "70% faster analysis, 60+ institutions connected.",
    stats: [
      { value: "75%", label: "Faster reporting" },
      { value: "60+", label: "Institutions onboarded" },
      { value: "4 Month", label: "Delivery timeline" },
    ],
    device: "phone",
    reverse: true,
  },
  {
    badge: "Health & Wellness",
    title: "Healthcare System",
    challenge: "Legacy system needed secure integration.",
    result: "80% less admin, fully HIPAA-ready.",
    stats: [
      { value: "80%", label: "Less admin overhead" },
      { value: "4", label: "Systems integrated" },
      { value: "3 Month", label: "From idea to launch" },
    ],
    device: "laptop",
  },
];

function WorkItem({ p }: { p: Project }) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2">
      <div className={`flex justify-center ${p.reverse ? "lg:order-2" : ""}`}>
        <div className="well relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl p-8">
          <div className="dot-grid fade-edges absolute inset-0 opacity-25" />
          <div className="relative flex w-full max-w-md justify-center">
            {p.device === "laptop" ? <Laptop /> : <PhoneMock />}
          </div>
        </div>
      </div>
      <div className={p.reverse ? "lg:order-1" : ""}>
        <span className="inline-flex rounded-full border border-line bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-bright">
          {p.badge}
        </span>
        <h3 className="display mt-4 text-2xl text-white">{p.title}</h3>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-red-400/80">
              Challenge
            </p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{p.challenge}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-bright">
              Result
            </p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{p.result}</p>
          </div>
        </div>
        <div className="mt-7 grid grid-cols-3 gap-3 border-t border-line pt-6">
          {p.stats.map((s) => (
            <div key={s.label}>
              <div className="display text-xl text-white">{s.value}</div>
              <div className="mt-1.5 text-[11px] leading-tight text-muted-dim">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** `heading` off when the page already carries its own title. */
export default function Work({ heading = true }: { heading?: boolean }) {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
      {heading && (
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Work We&apos;re Proud Of</Eyebrow>
          <h2 className="display mt-5 text-balance text-3xl leading-[1.12] text-white sm:text-[2.6rem]">
            Recent work
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Real projects, real results.
          </p>
        </div>
      )}

      <div className={`${heading ? "mt-16" : ""} space-y-20`}>
        {projects.map((p) => (
          <WorkItem key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
