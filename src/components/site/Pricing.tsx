"use client";

import { useState } from "react";
import Eyebrow from "./Eyebrow";
import {
  Check,
  ArrowRight,
  Rocket,
  Shield,
  Phone,
  Sparkles,
  Handover,
  Plus,
} from "./icons";
import BookCallButton from "./BookCall";

const TYPES = [
  { key: "mvp", label: "MVP / New Product", Icon: Rocket },
  { key: "enterprise", label: "Enterprise Software", Icon: Shield },
  { key: "mobile", label: "Mobile App", Icon: Phone },
  { key: "ai", label: "AI Product", Icon: Sparkles },
  { key: "ppp", label: "Government / PPP", Icon: Handover },
  { key: "other", label: "Something else", Icon: Plus },
];

const BUDGETS = [
  { key: "s", label: "Under $5k" },
  { key: "m", label: "$5k – $15k" },
  { key: "l", label: "$15k – $50k" },
  { key: "xl", label: "$50k+" },
  { key: "unsure", label: "Not sure yet" },
];

const TIMELINES = [
  { key: "asap", label: "As soon as possible" },
  { key: "30", label: "Within 30 days" },
  { key: "quarter", label: "1 – 3 months" },
  { key: "flex", label: "Flexible" },
];

const NEXT_STEPS = [
  "We read your brief and reply within one business day.",
  "A 30-minute call to pin down scope and constraints.",
  "A fixed proposal: what ships, when, and what it costs.",
];

function ChipGroup({
  options,
  value,
  onChange,
  columns = "sm:grid-cols-2",
}: {
  options: { key: string; label: string; Icon?: React.ComponentType<{ className?: string }> }[];
  value: string;
  onChange: (key: string) => void;
  columns?: string;
}) {
  return (
    <div className={`grid gap-2 ${columns}`}>
      {options.map(({ key, label, Icon }) => {
        const active = value === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            aria-pressed={active}
            className={`flex items-center gap-2.5 rounded-xl border px-4 py-3 text-left text-[13px] transition-all ${
              active
                ? "border-brand/50 bg-brand/10 text-white"
                : "border-line bg-white/[0.02] text-muted hover:border-line-strong hover:text-white"
            }`}
          >
            {Icon && (
              <Icon className={`h-4 w-4 shrink-0 ${active ? "text-brand-bright" : "text-muted-dim"}`} />
            )}
            <span className="flex-1">{label}</span>
            {active && (
              <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand text-white">
                <Check className="h-2.5 w-2.5" />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-dim">
        {label}
      </label>
      <div className="mt-3">{children}</div>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-line bg-white/[0.02] px-4 py-3 text-[13px] text-white placeholder:text-muted-dim focus:border-brand/50 focus:outline-none";

export default function Pricing() {
  const [idea, setIdea] = useState("");
  const [type, setType] = useState("mvp");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const ready = idea.trim().length > 20 && budget !== "" && email.includes("@");
  const labelOf = (
    list: { key: string; label: string }[],
    key: string,
    fallback: string
  ) => list.find((o) => o.key === key)?.label ?? fallback;

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Start a Project</Eyebrow>
        <h2 className="display mt-5 text-balance text-3xl leading-[1.12] text-white sm:text-[2.6rem]">
          Tell us the idea
          <br /> and the budget
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Send the concept and what you have to spend. You get back scope, a
          timeline and a fixed price — no hidden fees.
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        {/* Brief */}
        <div className="panel rounded-2xl p-6 sm:p-8">
          {sent ? (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-brand/40 bg-brand/15 text-brand-bright">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="display mt-6 text-2xl text-white">Brief received</h3>
              <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-muted">
                Thanks {name.split(" ")[0] || "— "}. We will read it and come back
                to {email} within one business day.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-[13px] text-brand-bright transition-colors hover:text-white"
              >
                Send another brief
              </button>
            </div>
          ) : (
            <form
              className="relative space-y-7"
              onSubmit={async (e) => {
                e.preventDefault();
                if (!ready || sending) return;
                setSending(true);
                setError("");
                try {
                  const res = await fetch("/api/brief", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      idea,
                      type: labelOf(TYPES, type, "Not given"),
                      budget: labelOf(BUDGETS, budget, "Not given"),
                      timeline: timeline
                        ? labelOf(TIMELINES, timeline, "Not given")
                        : "Not given",
                      name,
                      email,
                      company,
                    }),
                  });
                  const data = await res.json().catch(() => ({}));
                  if (!res.ok) {
                    setError(data.error || "Something went wrong. Please try again.");
                    return;
                  }
                  setSent(true);
                } catch {
                  setError("Could not reach the server. Check your connection.");
                } finally {
                  setSending(false);
                }
              }}
            >
              <Field label="What are you building?">
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  rows={4}
                  required
                  placeholder="A marketplace for solar installers — vendors list inventory, buyers pay in instalments, admin sees the whole pipeline."
                  className={`${inputClass} resize-none leading-relaxed`}
                />
                <p className="mt-2 text-[11px] text-muted-dim">
                  Rough is fine. The problem you are solving matters more than
                  the feature list.
                </p>
              </Field>

              <Field label="Project type">
                <ChipGroup
                  options={TYPES}
                  value={type}
                  onChange={setType}
                  columns="sm:grid-cols-3"
                />
              </Field>

              <Field label="Budget range">
                <ChipGroup
                  options={BUDGETS}
                  value={budget}
                  onChange={setBudget}
                  columns="sm:grid-cols-3"
                />
              </Field>

              <Field label="Timeline">
                <ChipGroup
                  options={TIMELINES}
                  value={timeline}
                  onChange={setTimeline}
                />
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ada Obi"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="ada@company.com"
                    className={inputClass}
                  />
                </Field>
              </div>

              {/* honeypot — hidden from people, catnip for bots */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="pointer-events-none absolute left-[-9999px] h-0 w-0 opacity-0"
              />

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={!ready || sending}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-medium text-white transition-all ${
                    ready && !sending
                      ? "btn-brand"
                      : "cursor-not-allowed border border-line bg-white/[0.03] text-muted-dim"
                  }`}
                >
                  {sending ? "Sending…" : "Send Project Brief"}
                  {sending ? (
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
                  ) : (
                    <ArrowRight className="h-3.5 w-3.5" />
                  )}
                </button>
                {error && (
                  <p role="alert" className="text-[12px] text-red-400">
                    {error}
                  </p>
                )}
              </div>
            </form>
          )}
        </div>

        {/* Summary */}
        <div className="panel relative isolate overflow-hidden rounded-2xl p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(closest-side,rgba(47,107,255,0.3),rgba(47,107,255,0))] blur-2xl" />
          <div className="relative z-10">
            <h3 className="text-sm font-semibold text-white">Your brief</h3>
            <p className="mt-1 text-xs text-muted-dim">
              Updates as you fill the form.
            </p>

            <dl className="mt-6 space-y-3 text-[13px]">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-muted">Type</dt>
                <dd className="text-right text-white">
                  {labelOf(TYPES, type, "—")}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-line pt-3">
                <dt className="text-muted">Budget</dt>
                <dd className="text-right font-medium text-brand-bright">
                  {budget ? labelOf(BUDGETS, budget, "—") : "Not set"}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-line pt-3">
                <dt className="text-muted">Timeline</dt>
                <dd className="text-right text-white">
                  {timeline ? labelOf(TIMELINES, timeline, "—") : "Not set"}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-line pt-3">
                <dt className="text-muted">Concept</dt>
                <dd className="text-right text-white">
                  {idea.trim() ? `${idea.trim().split(/\s+/).length} words` : "Empty"}
                </dd>
              </div>
            </dl>

            <div className="mt-7 border-t border-line pt-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-dim">
                What happens next
              </span>
              <ol className="mt-4 space-y-3">
                {NEXT_STEPS.map((s, i) => (
                  <li key={s} className="flex gap-3 text-[13px] leading-relaxed text-muted">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-line bg-white/[0.04] font-mono text-[10px] text-white">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>

            <BookCallButton className="mt-7 block w-full text-center text-[13px] text-muted transition-colors hover:text-white">
              Rather talk first? Book a call
            </BookCallButton>
          </div>
        </div>
      </div>
    </section>
  );
}
