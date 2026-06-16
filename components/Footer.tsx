import BrandMark from "./BrandMark";

export default function Footer() {
  return (
    <footer className="bg-ink text-sand">
      <div className="container-x py-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <BrandMark />
            <p className="mt-3 text-sm text-sand/60">
              Le réseau premium des talents nomades pour les entreprises
              francophones. La liberté, ça se gagne.
            </p>
          </div>

          <div className="flex gap-12 text-sm">
            <div>
              <p className="font-semibold text-sand">Produit</p>
              <ul className="mt-3 space-y-2 text-sand/60">
                <li>
                  <a href="#how" className="hover:text-white">
                    Comment ça marche
                  </a>
                </li>
                <li>
                  <a href="#triwin" className="hover:text-white">
                    Le deal
                  </a>
                </li>
                <li>
                  <a href="#verticals" className="hover:text-white">
                    Métiers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sand">Rejoindre</p>
              <ul className="mt-3 space-y-2 text-sand/60">
                <li>
                  <a href="#waitlist" className="hover:text-white">
                    Entreprises
                  </a>
                </li>
                <li>
                  <a href="#waitlist" className="hover:text-white">
                    Talents nomades
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-sand/45">
          © {new Date().getFullYear()} Latitude — nom de travail · Construit
          avec sérieux.
        </div>
      </div>
    </footer>
  );
}
