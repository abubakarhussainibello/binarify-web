"use client";

import { useState } from "react";
import Eyebrow from "./Eyebrow";
import { ChevronDown } from "./icons";

const stats = [
  { value: "200+", label: "Clients" },
  { value: "6+", label: "Years" },
  { value: "100%", label: "On Time" },
  { value: "98%", label: "Success Rate" },
];

const faqs = [
  {
    q: "How do we deliver so quickly?",
    a: "Battle-tested foundations plus AI-accelerated tooling. Auth, payments, roles and CI are already hardened, so week one starts where most teams arrive in month three.",
  },
  {
    q: "What if my project is complex?",
    a: "We scope complex builds into milestone-based sprints, so you always have a working product at each stage and full visibility into progress and cost.",
  },
  {
    q: "How do you handle complexity?",
    a: "Battle-tested foundations, senior engineers, and AI-accelerated tooling let us absorb complexity without blowing timelines or budgets.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow center={false}>Common Questions</Eyebrow>
          <h2 className="display mt-5 text-balance text-3xl leading-[1.12] text-white sm:text-[2.6rem]">
            Frequently asked
            <br /> questions
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Process, complexity, integrations — the things clients ask before
            they sign.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="display text-3xl text-brand-bright">{s.value}</div>
                <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-dim">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`panel rounded-2xl transition-colors ${
                  isOpen ? "border-brand/40" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-[14px] font-medium text-white">{f.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted transition-transform ${
                      isOpen ? "rotate-180 text-brand-bright" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[13px] leading-relaxed text-muted">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
