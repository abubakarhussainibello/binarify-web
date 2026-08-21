import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/site/SiteHeader";
import About from "@/components/site/About";
import Founders from "@/components/site/Founders";
import CtaSection from "@/components/site/CtaSection";
import Footer from "@/components/site/Footer";
import Eyebrow from "@/components/site/Eyebrow";
import { Target, Bolt, Handover, Sparkles } from "@/components/site/icons";

export const metadata: Metadata = {
  title: "About — Binarify",
  description:
    "A product engineering studio building software that energy companies, federal agencies and founders run on. Six years, 200+ clients, 100% on-time delivery.",
};

const stats = [
  { value: "6+", label: "Years building" },
  { value: "200+", label: "Clients shipped" },
  { value: "30+", label: "Startups supported" },
  { value: "100%", label: "On-time delivery" },
];

const beliefs = [
  {
    Icon: Target,
    title: "Scope beats speed",
    body: "Most overruns are not engineering failures. They are decisions nobody made in week one, so we make them there.",
  },
  {
    Icon: Bolt,
    title: "Working software or nothing",
    body: "Status updates are not progress. Every week ends with something you can open and click through yourself.",
  },
  {
    Icon: Sparkles,
    title: "AI on the rote work",
    body: "Scaffolding, tests and review drafts are machine work now. Judgement, architecture and trade-offs are not.",
  },
  {
    Icon: Handover,
    title: "Leave nothing locked",
    body: "A build you cannot take elsewhere is not finished. Handover is part of the work, not a favour at the end.",
  },
];

const logos = [
  { src: "/partners/mono/mainstream.png", alt: "Mainstream Energy Solutions" },
  { src: "/partners/mono/ndpc.png", alt: "Nigeria Data Protection Commission" },
  { src: "/partners/mono/google-workspace.png", alt: "Google Workspace" },
  { src: "/partners/mono/digitalocean.png", alt: "DigitalOcean" },
  { src: "/partners/mono/cloud-clusters.png", alt: "Cloud Clusters" },
  { src: "/partners/mono/primeguage.png", alt: "Primeguage" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page hero */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(47,107,255,0.28),rgba(47,107,255,0))] blur-2xl" />
        <div className="grid-lines fade-bottom pointer-events-none absolute inset-0 opacity-50" />

        <SiteHeader active="About" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-14 sm:pb-20 sm:pt-20">
          <Eyebrow center={false}>About Us</Eyebrow>
          <h1 className="display mt-6 max-w-3xl text-balance text-4xl leading-[1.08] text-white sm:text-6xl">
            We build the software
            <br /> other people talk about
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted">
            Six years, two hundred-odd clients, and a delivery record we will
            put in writing. Here is who does the work and how.
          </p>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 sm:pb-24">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-background px-6 py-7">
                <div className="display text-3xl text-brand-bright">{s.value}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-dim">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + how we work */}
      <About />

      {/* Founders */}
      <Founders />

      {/* What we believe */}
      <section className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
        <Eyebrow center={false}>What We Believe</Eyebrow>
        <h2 className="display mt-5 max-w-2xl text-balance text-3xl leading-[1.12] text-white sm:text-[2.6rem]">
          Four opinions we
          <br /> refuse to trade away
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {beliefs.map(({ Icon, title, body }) => (
            <div key={title} className="panel panel-hover rounded-2xl p-6 sm:p-7">
              <Icon className="h-5 w-5 text-brand-bright" />
              <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted by */}
      <section className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-dim">
          Trusted by teams at
        </p>
        <div className="mt-8 grid grid-cols-3 items-center gap-x-8 gap-y-6 sm:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="relative h-8 w-full opacity-45 transition duration-300 hover:opacity-90"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  );
}
