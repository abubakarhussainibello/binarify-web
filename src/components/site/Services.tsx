import Eyebrow from "./Eyebrow";
import {
  Rocket,
  Shield,
  Sparkles,
  Phone,
  Cloud,
  Users,
  Handover,
  ArrowUpRight,
} from "./icons";


const services = [
  {
    Icon: Rocket,
    tint: "text-brand-bright",
    title: "MVP Development",
    body: "Idea to production in 30 days, on a foundation you can keep building on.",
  },
  {
    Icon: Shield,
    tint: "text-emerald-400",
    title: "Enterprise Software",
    body: "Role-based, audited, and integrated with the systems you already run.",
  },
  {
    Icon: Sparkles,
    tint: "text-violet-400",
    title: "AI-Powered Development",
    body: "AI on the boilerplate and the tests, senior engineers on the decisions.",
  },
  {
    Icon: Phone,
    tint: "text-sky-400",
    title: "Mobile Apps",
    body: "One Flutter codebase, shipped to both stores with CI already wired up.",
  },
  {
    Icon: Cloud,
    tint: "text-amber-400",
    title: "Cloud & DevOps",
    body: "Provisioned, monitored and deployed on infrastructure that stays yours.",
  },
  {
    Icon: Users,
    tint: "text-rose-400",
    title: "Tech Consultation",
    body: "Architecture reviews and feasibility checks before you commit budget.",
  },
  {
    Icon: Handover,
    tint: "text-brand-bright",
    title: "Government & PPP Projects",
    body: "Public sector delivery for agencies, MDAs and their partners — including public-private partnership projects.",
    span: "sm:col-span-2 lg:col-span-3",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 pt-8 sm:pt-16">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>What We Build</Eyebrow>
        <h2 className="display mt-5 text-balance text-3xl leading-[1.12] text-white sm:text-[2.6rem]">
          Powerful engineering,
          <br /> infinite possibilities
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Connect your product to the team that ships it every day.
        </p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ Icon, tint, title, body, span }) => (
          <div
            key={title}
            className={`group bg-background p-6 transition-colors hover:bg-white/[0.03] ${span ?? ""}`}
          >
            <Icon className={`h-5 w-5 ${tint}`} />
            <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{body}</p>
            <a
              href="#cta"
              className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-medium text-muted transition-colors group-hover:text-brand-bright"
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
