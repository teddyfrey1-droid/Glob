const ITEMS = [
  {
    icon: "🤝",
    title: "Binôme anti-interruption",
    text: "Un 2ᵉ profil briefé reprend en moins de 4 h. Vol, panne, imprévu : ton business ne s'arrête jamais.",
  },
  {
    icon: "🌙",
    title: "Time-Sync",
    text: "Des heures communes garanties. Le décalage horaire devient un atout : ton bug est réglé à ton réveil.",
  },
  {
    icon: "⭐",
    title: "Nomad Score",
    text: "Ponctualité, qualité, disponibilité. Chaque profil est noté sans complaisance — et doit le rester.",
  },
  {
    icon: "🛡️",
    title: "Conformité B2B",
    text: "Contrats internationaux générés automatiquement. Zéro risque de salariat déguisé, zéro paperasse.",
  },
];

export default function Differentiators() {
  return (
    <section className="bg-white">
      <div className="container-x py-16 md:py-20">
        <h2 className="max-w-2xl font-display text-2xl font-bold tracking-tight sm:text-3xl">
          Pas une foire au low-cost.{" "}
          <span className="text-ink/50">
            Un tiers de confiance qui vend de la fiabilité.
          </span>
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it) => (
            <div
              key={it.title}
              className="rounded-3xl border border-ink/10 bg-sand/50 p-6 transition hover:border-coral/40 hover:shadow-card"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-2xl shadow-sm">
                {it.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">
                {it.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
