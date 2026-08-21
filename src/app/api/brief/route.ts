import { clean, isEmail, row, shell, send } from "@/lib/mail";

const MAX = { idea: 5000, short: 200 };

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Bots fill every field they find.
  if (clean(body.company, MAX.short)) return Response.json({ ok: true });

  const idea = clean(body.idea, MAX.idea);
  const email = clean(body.email, MAX.short);
  const budget = clean(body.budget, MAX.short);
  const name = clean(body.name, MAX.short) || "Not given";
  const type = clean(body.type, MAX.short) || "Not given";
  const timeline = clean(body.timeline, MAX.short) || "Not given";

  if (idea.length < 20) {
    return Response.json(
      { error: "Tell us a little more about the project." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return Response.json(
      { error: "That email address does not look right." },
      { status: 400 }
    );
  }
  if (!budget) {
    return Response.json({ error: "Pick a budget range." }, { status: 400 });
  }

  const html = shell({
    kicker: "New project brief",
    title: name,
    rows: [
      row("Budget", budget),
      row("Project type", type),
      row("Timeline", timeline),
      row("Email", email),
    ].join(""),
    blockLabel: "The idea",
    block: idea,
    replyTo: email,
    replyName: name.split(" ")[0] || name,
  });

  const text = [
    `New project brief from ${name} <${email}>`,
    ``,
    `Budget:   ${budget}`,
    `Type:     ${type}`,
    `Timeline: ${timeline}`,
    ``,
    `The idea:`,
    idea,
  ].join("\n");

  const result = await send({
    subject: `Project brief — ${name} (${budget})`,
    html,
    text,
    replyTo: email,
  });

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }
  return Response.json({ ok: true, id: result.id });
}
