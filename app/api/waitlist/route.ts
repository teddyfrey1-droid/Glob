import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email = String(body?.email ?? "").trim().toLowerCase();
    const role = body?.role === "nomad" ? "nomad" : "company";
    const vertical = body?.vertical ? String(body.vertical) : null;
    const country = body?.country ? String(body.country) : null;

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { ok: false, error: "invalid_email" },
        { status: 400 },
      );
    }

    const supabase = getSupabaseClient();

    if (supabase) {
      const { error } = await supabase
        .from("waitlist")
        .insert({ email, role, vertical, country });

      // 23505 = doublon (email déjà inscrit) → on traite comme un succès.
      if (error && error.code !== "23505") {
        console.error("[waitlist] insert error:", error.message);
        return NextResponse.json(
          { ok: false, error: "db_error" },
          { status: 500 },
        );
      }
    } else {
      // Mode démo : pas de Supabase configuré.
      console.log("[waitlist] (démo, sans Supabase) :", {
        email,
        role,
        vertical,
        country,
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "bad_request" },
      { status: 400 },
    );
  }
}
