import Eyebrow from "./Eyebrow";
import {
  ReactLogo,
  LaravelLogo,
  FlutterLogo,
  TailwindLogo,
  JsLogo,
  PostgresLogo,
  NodeLogo,
  MongoLogo,
  DockerLogo,
  TsLogo,
  AwsLogo,
} from "./tech-icons";

const tools = [
  { Icon: ReactLogo, label: "React" },
  { Icon: LaravelLogo, label: "Laravel" },
  { Icon: FlutterLogo, label: "Flutter" },
  { Icon: TailwindLogo, label: "Tailwind" },
  { Icon: JsLogo, label: "JavaScript" },
  { Icon: PostgresLogo, label: "Postgres" },
  { Icon: NodeLogo, label: "Node" },
  { Icon: MongoLogo, label: "MongoDB" },
  { Icon: DockerLogo, label: "Docker" },
  { Icon: TsLogo, label: "TypeScript" },
  { Icon: AwsLogo, label: "AWS" },
  { Icon: TailwindLogo, label: "Design System" },
];

export default function Tools() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Tools We Use</Eyebrow>
        <h2 className="display mt-5 text-balance text-3xl leading-[1.12] text-white sm:text-[2.6rem]">
          Built with proven tools
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Six years in production with every one of them.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
        {tools.map(({ Icon, label }, i) => (
          <div
            key={i}
            className="group flex aspect-[4/3] flex-col items-center justify-center gap-3 bg-background transition-colors hover:bg-white/[0.03]"
          >
            <Icon className="h-8 w-8 opacity-80 transition-opacity group-hover:opacity-100" />
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-dim transition-colors group-hover:text-muted">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
