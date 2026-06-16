const STEPS = [
  {
    n: "01",
    title: "Brief en 2 minutes",
    text: "Décris ta mission : compétences, budget, et la fenêtre d'heures communes qui t'arrange.",
  },
  {
    n: "02",
    title: "On matche un profil vérifié",
    text: "Tu reçois des talents notés, présentés comme des annonces : portfolio, Nomad Score, vidéo d'intro.",
  },
  {
    n: "03",
    title: "Tu lances, on sécurise",
    text: "Contrat B2B auto, paiement sous séquestre, binôme en filet. Il ne te reste plus qu'à collaborer.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-sand">
      <div className="container-x py-20">
        <div className="max-w-2xl">
          <p className="eyebrow border-ink/15 text-ink/60">Comment ça marche</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Simple comme réserver un séjour. Sérieux comme un contrat.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="relative rounded-3xl border border-ink/10 bg-white p-7"
            >
              <span className="font-display text-5xl font-bold text-coral/25">
                {s.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-ink/65">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
