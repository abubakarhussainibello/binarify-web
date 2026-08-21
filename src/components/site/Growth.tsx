import Eyebrow from "./Eyebrow";

const pillars = [
  {
    n: "01",
    title: "Real Impact",
    body: "30+ startups shipped with smooth adoption from day one.",
  },
  {
    n: "02",
    title: "Proven Results",
    body: "50% average cost reduction against in-house build estimates.",
  },
  {
    n: "03",
    title: "Trusted at Scale",
    body: "From energy majors to federal agencies, in production today.",
  },
];

const LINE =
  "0,291 27,316 53,280 80,304 107,259 133,278 160,240 187,269 213,237 240,270 267,242 293,266 320,225 347,245 373,201 400,223 427,187 453,221 480,192 507,223 533,190 560,212 587,167 613,186 640,144 667,172 693,139 720,175 747,147 773,173 800,134 827,154 853,107 880,128 907,91 933,124 960,94 987,128 1013,99 1040,119 1067,75 1093,95 1120,50 1147,74 1173,42 1200,78";

export default function Growth() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
      <Eyebrow center={false}>Companies growing with us</Eyebrow>
      <h2 className="display mt-5 max-w-2xl text-balance text-3xl leading-[1.12] text-white sm:text-[2.6rem]">
        Driven by delivery,
        <br /> measured in results
      </h2>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
        A growth partner to 200+ companies — and counting.
      </p>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.n} className="bg-background p-6">
            <div className="font-mono text-xs text-muted-dim">{p.n}</div>
            <h3 className="mt-3 text-base font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="relative mt-10 h-[280px] w-full overflow-hidden sm:h-[360px]">
        <div className="grid-lines fade-bottom absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(47,107,255,0.35),rgba(47,107,255,0))] blur-2xl" />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 340"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2f6bff" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#2f6bff" stopOpacity="0" />
            </linearGradient>
            <filter id="lineGlow" x="-10%" y="-40%" width="120%" height="200%">
              <feGaussianBlur stdDeviation="7" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <polygon points={`0,340 ${LINE} 1200,340`} fill="url(#chartFill)" />
          <polyline
            points={LINE}
            fill="none"
            stroke="#5b95ff"
            strokeWidth="2.5"
            strokeLinejoin="round"
            filter="url(#lineGlow)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* floating stat pill */}
        <div className="absolute left-1/2 top-1/2 w-[min(88%,420px)] -translate-x-1/2 -translate-y-1/2 -rotate-[7deg]">
          <div className="panel rounded-2xl px-6 py-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <div className="display text-xl text-white sm:text-2xl">
              50% <span className="text-brand-bright">Cost Reduction</span>
            </div>
            <div className="mt-1 text-[12px] text-muted">
              Average saving across client builds
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
