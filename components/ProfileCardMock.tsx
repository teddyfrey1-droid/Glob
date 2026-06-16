const SCORES = [
  { label: "Ponctualité", value: 99 },
  { label: "Qualité", value: 97 },
  { label: "Disponibilité", value: 98 },
];

export default function ProfileCardMock() {
  return (
    <div className="w-full max-w-sm rounded-4xl bg-white p-6 text-ink shadow-card">
      {/* En-tête profil */}
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-coral to-amber text-lg font-bold text-white">
          LM
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="font-display text-lg font-bold">Léa M.</p>
            <span
              className="grid h-4 w-4 place-items-center rounded-full bg-jade text-[10px] text-white"
              title="Profil vérifié"
            >
              ✓
            </span>
          </div>
          <p className="text-sm text-ink/60">Monteuse vidéo · Sénior</p>
        </div>
      </div>

      {/* Localisation + Time-Sync */}
      <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
        <span className="rounded-full bg-sand px-3 py-1 text-ink/70">
          📍 Canggu, Bali · UTC+8
        </span>
        <span className="rounded-full bg-jade/12 px-3 py-1 font-medium text-jade">
          🌙 4 h communes avec Paris
        </span>
      </div>

      {/* Nomad Score */}
      <div className="mt-5 rounded-2xl border border-ink/10 p-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">
              Nomad Score
            </p>
            <p className="font-display text-3xl font-bold leading-none">
              98<span className="text-base text-ink/40">/100</span>
            </p>
          </div>
          <span className="rounded-full bg-amber/15 px-3 py-1 text-xs font-bold text-amber">
            ★ Premium Nomad
          </span>
        </div>
        <div className="mt-4 space-y-2.5">
          {SCORES.map((s) => (
            <div key={s.label}>
              <div className="flex justify-between text-xs text-ink/60">
                <span>{s.label}</span>
                <span className="font-semibold text-ink">{s.value}</span>
              </div>
              <div className="mt-1 h-1.5 w-full rounded-full bg-ink/10">
                <div
                  className="h-1.5 rounded-full bg-jade"
                  style={{ width: `${s.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pied */}
      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-full bg-ink/5 px-3 py-1.5 text-xs font-semibold text-ink/70">
          🤝 Binôme actif
        </span>
        <p className="text-sm">
          <span className="text-ink/50">dès </span>
          <span className="font-display font-bold">2 200 €</span>
          <span className="text-ink/50">/mois</span>
        </p>
      </div>
    </div>
  );
}
