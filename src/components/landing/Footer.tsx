import { motion } from 'motion/react'
import { Facebook } from 'lucide-react'

const footerLinks = {
  Formations: [
    'Informatique de Base',
    'Informatique Bureautique',
    'Comptabilité-Caisse',
    'Marketing Digital',
    'Secrétariat-Bureautique',
    'Informatique-Réseaux',
  ],
  Services: [
    'Conseil OHADA',
    'Services Bureautiques',
    'Infographie & Design',
    'Sérigraphie',
    'Impression & Production',
    'Services en Ligne',
  ],
  Informations: [
    'À propos de nous',
    'Méthode pédagogique',
    'Stage en entreprise',
    "Offres d'emploi",
    'Partenaires',
    'Contact',
  ],
}

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#080C12] border-t border-white/[0.06] text-white">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Brand col */}
          <div className="lg:col-span-4">
            <button
              onClick={() => scrollTo('#accueil')}
              className="cursor-pointer mb-8 block"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-[#D4A843] flex items-center justify-center transform rotate-45">
                  <span
                    className="text-[#080C12] font-black text-xs tracking-[0.1em] transform -rotate-45"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    IBS
                  </span>
                </div>
                <div className="flex flex-col leading-none">
                  <span
                    className="text-white font-semibold text-xl tracking-[0.08em] uppercase"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    IBS MSN
                  </span>
                  <span
                    className="text-[#D4A843]/50 text-[9px] tracking-[0.25em] uppercase mt-0.5"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Intelligent Business Solutions
                  </span>
                </div>
              </div>
            </button>

            <p
              className="text-white/35 text-sm leading-[1.8] max-w-[280px] mb-8"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}
            >
              Le centre de formation professionnelle de référence à Lomé, Togo.
              Formations qualifiantes et services professionnels pour votre
              succès.
            </p>

            <a
              href="https://www.facebook.com/p/IBS-100083388000096/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/35 hover:text-[#D4A843] text-xs tracking-[0.15em] uppercase transition-colors duration-300 group"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              aria-label="Page Facebook IBS MSN"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </a>
          </div>

          {/* Links cols */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-10">
            {Object.entries(footerLinks).map(([category, links], colI) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: colI * 0.1 }}
              >
                <h4
                  className="text-white/20 text-[10px] tracking-[0.3em] uppercase mb-6 font-medium"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {category}
                </h4>
                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link}>
                      <button
                        onClick={() =>
                          scrollTo(
                            link === 'À propos de nous'
                              ? '#apropos'
                              : link === 'Contact'
                                ? '#contact'
                                : link.includes('Informatique') ||
                                    link.includes('Comptabilité') ||
                                    link.includes('Marketing') ||
                                    link.includes('Secrétariat') ||
                                    link.includes('Réseaux')
                                  ? '#formations'
                                  : '#services',
                          )
                        }
                        className="text-white/30 hover:text-[#D4A843] text-sm transition-colors duration-200 cursor-pointer text-left"
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 300,
                        }}
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gold separator */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="h-px bg-gradient-to-r from-[#D4A843]/30 via-[#D4A843]/10 to-transparent" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-white/20 text-[11px] tracking-wide"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          © {new Date().getFullYear()} IBS MSN — Intelligent Business Solutions.
          Tous droits réservés. · Lomé, Togo
        </p>
        <div className="flex items-center gap-2">
          <div className="w-4 h-px bg-[#D4A843]/30" />
          <p
            className="text-white/15 text-[11px] tracking-widest uppercase"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Fait au Togo
          </p>
        </div>
      </div>
    </footer>
  )
}
