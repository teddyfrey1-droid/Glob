const CARDS = [
  {
    tag: "Pour l'entreprise",
    tagClass: "bg-coral/15 text-coral",
    title: "Le talent premium, sans le coût ni le risque",
    points: [
      "Un profil diplômé et expérimenté pour le prix d'un junior",
      "Aucune charge patronale française, aucune paperasse internationale",
      "Fiabilité garantie : profils notés + binôme anti-interruption",
      "Forfait continu ou mission ponctuelle, tu choisis",
    ],
  },
  {
    tag: "Pour le nomade",
    tagClass: "bg-amber/15 text-amber",
    title: "Achète ta liberté par la rigueur",
    points: [
      "Un revenu régulier en euros qui finance ta vie où tu veux",
      "Des clients sérieux et des missions récurrentes, pas des enchères",
      "Paiement et conformité gérés : tu te concentres sur ton métier",
      "Ton sérieux est récompensé : plus ton score monte, plus tu gagnes en liberté",
    ],
  },
];

export default function TriWin() {
  return (
    <section id="triwin" className="bg-ink text-sand">
      <div className="container-x py-20">
        <div className="max-w-2xl">
          <p className="eyebrow border-white/20 text-sand/70">Le deal</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Un compromis où les deux camps gagnent vraiment.
          </h2>
          <p className="mt-4 text-sand/70">
            L'entreprise accède à un talent qu'elle ne pouvait pas se payer. Le
            nomade finance sa liberté. Au milieu, Latitude garantit la confiance.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CARDS.map((c) => (
            <div
              key={c.tag}
              className="rounded-4xl border border-white/10 bg-white/[0.04] p-8"
            >
              <span
                className={`eyebrow border-transparent ${c.tagClass}`}
              >
                {c.tag}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold">
                {c.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sand/85">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-jade text-[11px] text-ink">
                      ✓
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
