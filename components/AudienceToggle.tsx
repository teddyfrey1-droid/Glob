"use client";

import { useAudience, type Audience } from "./AudienceContext";

const OPTIONS: { value: Audience; label: string }[] = [
  { value: "company", label: "Je recrute" },
  { value: "nomad", label: "Je suis nomade" },
];

export default function AudienceToggle({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const { audience, setAudience } = useAudience();

  const track =
    variant === "dark"
      ? "bg-white/10 border-white/15"
      : "bg-ink/5 border-ink/10";

  return (
    <div
      role="tablist"
      aria-label="Choisir un profil"
      className={`inline-flex rounded-full border p-1 ${track}`}
    >
      {OPTIONS.map((opt) => {
        const active = audience === opt.value;
        return (
          <button
            key={opt.value}
            role="tab"
            aria-selected={active}
            onClick={() => setAudience(opt.value)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active
                ? "bg-coral text-white shadow"
                : variant === "dark"
                  ? "text-sand/80 hover:text-white"
                  : "text-ink/70 hover:text-ink"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
