const VERTICALS = [
  {
    icon: "🎬",
    title: "Vidéo & montage",
    roles: "Monteurs Reels / YouTube, motion designers, étalonneurs",
  },
  {
    icon: "💻",
    title: "Dev & no-code",
    roles: "Full-stack, Next.js, Bubble / Make, product managers",
  },
  {
    icon: "📈",
    title: "Marketing & growth",
    roles: "Copywriters, media buyers, growth, community managers",
  },
];

export default function Verticals() {
  return (
    <section id="verticals" className="bg-white">
      <div className="container-x py-20">
        <div className="max-w-2xl">
          <p className="eyebrow border-ink/15 text-ink/60">Les métiers</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            On démarre là où le talent nomade brille.
          </h2>
          <p className="mt-4 text-ink/65">
            Trois verticales pour commencer — choisies pour leur demande
            récurrente et la qualité des profils disponibles à l'étranger.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VERTICALS.map((v) => (
            <div
              key={v.title}
              className="group rounded-3xl border border-ink/10 p-7 transition hover:-translate-y-1 hover:border-coral/40 hover:shadow-card"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sand text-3xl">
                {v.icon}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{v.roles}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink/50">
          D'autres métiers (assistanat de direction, support premium, design
          produit…) suivront une fois le modèle prouvé.
        </p>
      </div>
    </section>
  );
}
