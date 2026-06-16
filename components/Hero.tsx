"use client";

import { useAudience } from "./AudienceContext";
import AudienceToggle from "./AudienceToggle";
import ProfileCardMock from "./ProfileCardMock";

const COPY = {
  company: {
    eyebrow: "Pour les entreprises",
    title: (
      <>
        Le talent senior.
        <br />
        Au prix d'un junior.{" "}
        <span className="text-coral">Jamais à sec.</span>
      </>
    ),
    sub: "Latitude connecte les entreprises francophones à des freelances diplômés installés à l'étranger — vérifiés, notés, et couverts par un binôme pour zéro interruption.",
    cta: "Trouver un talent",
  },
  nomad: {
    eyebrow: "Pour les talents nomades",
    title: (
      <>
        Travaille d'où tu veux.
        <br />
        Pour des clients{" "}
        <span className="text-coral">qui comptent sur toi.</span>
      </>
    ),
    sub: "Un revenu régulier en euros pour financer ta vie de nomade. En échange : du sérieux. Sélection exigeante, notation stricte — et une vraie liberté, méritée.",
    cta: "Rejoindre la sélection",
  },
};

export default function Hero() {
  const { audience } = useAudience();
  const copy = COPY[audience];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink text-sand"
    >
      {/* Lueurs d'ambiance */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-coral/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-amber/20 blur-3xl"
      />

      <div className="container-x relative grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <AudienceToggle variant="dark" />
          <p className="eyebrow mt-6 border-coral/40 text-coral">
            {copy.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-md text-lg text-sand/75">{copy.sub}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#waitlist" className="btn-coral">
              {copy.cta}
            </a>
            <a href="#how" className="btn-ghost">
              Comment ça marche
            </a>
          </div>

          <p className="mt-6 text-sm text-sand/55">
            Accès en avant-première · Sélection sur dossier · Zéro spam
          </p>
        </div>

        {/* Pièce maîtresse : la carte profil */}
        <div className="relative flex justify-center md:justify-end">
          <div
            aria-hidden
            className="absolute inset-0 -m-6 rounded-[2.5rem] border border-white/10"
          />
          <ProfileCardMock />
        </div>
      </div>
    </section>
  );
}
