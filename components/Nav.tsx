import BrandMark from "./BrandMark";

const LINKS = [
  { href: "#how", label: "Comment ça marche" },
  { href: "#triwin", label: "Le deal" },
  { href: "#verticals", label: "Métiers" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 text-sand backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="text-sand">
          <BrandMark />
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-sand/80 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a href="#waitlist" className="btn-coral px-5 py-2.5">
          Rejoindre
        </a>
      </nav>
    </header>
  );
}
