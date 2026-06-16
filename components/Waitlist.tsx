"use client";

import { useState, type FormEvent } from "react";
import { useAudience } from "./AudienceContext";
import AudienceToggle from "./AudienceToggle";

const VERTICALS = [
  { value: "video", label: "Vidéo & montage" },
  { value: "dev", label: "Dev & no-code" },
  { value: "marketing", label: "Marketing & growth" },
  { value: "other", label: "Autre" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Waitlist() {
  const { audience } = useAudience();
  const [email, setEmail] = useState("");
  const [vertical, setVertical] = useState("video");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role: audience, vertical }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const isCompany = audience === "company";

  return (
    <section id="waitlist" className="bg-sand">
      <div className="container-x py-20">
        <div className="mx-auto max-w-2xl rounded-4xl border border-ink/10 bg-white p-8 shadow-card sm:p-12">
          {status === "success" ? (
            <div className="text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-jade/15 text-2xl">
                🎉
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold">
                Tu es sur la liste.
              </h2>
              <p className="mt-3 text-ink/65">
                On revient vers toi dès l'ouverture des accès. En attendant,
                prépare ton {isCompany ? "brief" : "portfolio"} — la sélection
                sera exigeante.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center">
                <p className="eyebrow border-coral/30 text-coral">
                  Accès en avant-première
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">
                  {isCompany
                    ? "Trouve ton prochain talent."
                    : "Rejoins la sélection."}
                </h2>
                <p className="mt-3 text-ink/65">
                  Laisse ton email, choisis ton profil. Zéro spam, juste
                  l'ouverture des accès.
                </p>
              </div>

              <form onSubmit={onSubmit} className="mt-8 space-y-4">
                <div className="flex justify-center">
                  <AudienceToggle variant="light" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium text-ink/70">
                      Email
                    </span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="prenom@exemple.com"
                      className="mt-1.5 w-full rounded-xl border border-ink/15 bg-sand/40 px-4 py-3 outline-none transition focus:border-coral focus:bg-white"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-ink/70">
                      {isCompany ? "Métier recherché" : "Ta spécialité"}
                    </span>
                    <select
                      value={vertical}
                      onChange={(e) => setVertical(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-ink/15 bg-sand/40 px-4 py-3 outline-none transition focus:border-coral focus:bg-white"
                    >
                      {VERTICALS.map((v) => (
                        <option key={v.value} value={v.value}>
                          {v.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-coral w-full disabled:opacity-60"
                >
                  {status === "loading"
                    ? "Un instant…"
                    : isCompany
                      ? "Demander un accès"
                      : "Candidater à la sélection"}
                </button>

                {status === "error" && (
                  <p className="text-center text-sm text-coral">
                    Oups, une erreur est survenue. Réessaie dans un instant.
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
