import { NextResponse } from "next/server";

type ContactRequestBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export async function POST(req: Request) {
  let body: ContactRequestBody;
  try {
    body = (await req.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json(
      { ok: false as const, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const name = isNonEmptyString(body.name) ? body.name.trim() : "";
  const email = isNonEmptyString(body.email) ? body.email.trim() : "";
  const message = isNonEmptyString(body.message) ? body.message.trim() : "";

  if (name.length < 2) {
    return NextResponse.json(
      { ok: false as const, error: "Please provide your name." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false as const, error: "Please provide a valid email." },
      { status: 400 }
    );
  }
  if (message.length < 10) {
    return NextResponse.json(
      { ok: false as const, error: "Please enter a longer message." },
      { status: 400 }
    );
  }

  console.log("[SCI DOMAINE DES LAUNES] Contact form submission", {
    name,
    email,
    message
  });

  return NextResponse.json({ ok: true as const });
}

