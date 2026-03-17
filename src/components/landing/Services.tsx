import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef, useState } from 'react'
import {
  Calculator,
  Printer,
  Palette,
  Globe,
  FileText,
  Shirt,
} from 'lucide-react'

const services = [
  {
    icon: Calculator,
    code: '01',
    title: 'Conseil & Comptabilité OHADA',
    description:
      "Mise en place et certification de votre système comptable OHADA, gestion de caisse assistée, édition des états financiers (Normal et SMT), rédaction et analyse de plans d'affaires.",
    tags: [
      'Comptabilité OHADA',
      'États financiers',
      "Plan d'affaires",
      'Digitalisation',
    ],
  },
  {
    icon: FileText,
    code: '02',
    title: 'Services Bureautiques',
    description:
      'Saisie et traitement de texte professionnel, traitement de devis et factures, scanner, reliure et plastification à chaud. Rédaction de mémoires et créations de présentations.',
    tags: [
      'Saisie & traitement',
      'Devis & Factures',
      'Rédaction mémoire',
      'Présentations',
    ],
  },
  {
    icon: Printer,
    code: '03',
    title: 'Production & Impression',
    description:
      'Impression noir et blanc, impression couleur haute qualité, photocopie et production de masse. Solutions complètes pour tous vos besoins de reproduction documentaire.',
    tags: [
      'Impression couleur',
      'Photocopie',
      'Production de masse',
      'Noir & blanc',
    ],
  },
  {
    icon: Palette,
    code: '04',
    title: 'Infographie & Design',
    description:
      'Création de cartes de visite, cartes de mariage, faire-parts, logos et flyers, carnets de tontine, bâches et affiches publicitaires. Identité visuelle sur mesure.',
    tags: [
      'Cartes de visite',
      'Logo & Flyers',
      'Affiches',
      'Identité visuelle',
    ],
  },
  {
    icon: Shirt,
    code: '05',
    title: 'Sérigraphie & Objets',
    description:
      'Impression sur T-shirts, Lacost, pagnes et tous supports textiles. Fabrication de porte-clés et impression sur tous supports. Personnalisation à la demande.',
    tags: ['T-shirts', 'Impression Pagne', 'Porte-clés', 'Tous supports'],
  },
  {
    icon: Globe,
    code: '06',
    title: 'Services en Ligne',
    description:
      "Inscription sur les sites d'emplois (ANPE, ANVT, Emploi Togo), demande de casier judiciaire en ligne, envoi et réception de mails professionnels.",
    tags: ['ANPE / ANVT', 'Casier judiciaire', 'Email pro', 'Emploi Togo'],
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  return (
    <section
      id="services"
      className="bg-[#0D1117] py-40 relative overflow-hidden"
    >
      <div className="absolute top-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-[#D4A843]/20 to-transparent" />

      <div ref={ref} className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-8 h-px bg-[#D4A843]" />
              <span
                className="text-[#D4A843] text-[11px] tracking-[0.35em] uppercase font-medium"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Nos Services
              </span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-white"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.8rem, 5.5vw, 6rem)',
                  lineHeight: 0.9,
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                }}
              >
                Votre satisfaction,
                <br />
                <span
                  style={{
                    WebkitTextStroke: '1.5px rgba(212,168,67,0.8)',
                    color: 'transparent',
                  }}
                >
                  notre challenge
                </span>
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/40 text-sm leading-relaxed max-w-[340px]"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}
          >
            Au-delà de la formation, IBS MSN offre une gamme complète de
            services professionnels pour accompagner particuliers et
            entreprises.
          </motion.p>
        </div>

        {/* Services — two panel layout */}
        <div className="grid lg:grid-cols-2 gap-0 border border-white/8">
          {/* Left: Service list */}
          <div className="border-r border-white/8">
            {services.map((service, i) => (
              <motion.button
                key={service.code}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                onClick={() => setActive(i)}
                className={`w-full text-left flex items-center gap-6 px-8 py-7 border-b last:border-b-0 border-white/8 group transition-all duration-300 cursor-pointer ${
                  active === i ? 'bg-[#D4A843]/8' : 'hover:bg-white/[0.02]'
                }`}
              >
                {/* Active indicator */}
                <div
                  className={`w-px h-10 flex-shrink-0 transition-all duration-300 ${
                    active === i
                      ? 'bg-[#D4A843]'
                      : 'bg-white/15 group-hover:bg-white/30'
                  }`}
                />

                <div
                  className={`font-light transition-colors duration-300 ${
                    active === i ? 'text-[#D4A843]/60' : 'text-white/20'
                  }`}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.2rem',
                  }}
                >
                  {service.code}
                </div>

                <h3
                  className={`text-base font-medium tracking-wide transition-colors duration-300 ${
                    active === i
                      ? 'text-white'
                      : 'text-white/50 group-hover:text-white/75'
                  }`}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.1rem',
                  }}
                >
                  {service.title}
                </h3>

                {active === i && (
                  <div className="ml-auto flex-shrink-0">
                    <service.icon className="w-5 h-5 text-[#D4A843]/60" />
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Right: Detail panel */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-12 lg:p-16 flex flex-col justify-between"
          >
            <div>
              {/* Big number */}
              <div
                className="text-[#D4A843]/15 font-light leading-none mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '7rem',
                }}
              >
                {services[active].code}
              </div>

              <h3
                className="text-white text-2xl lg:text-3xl font-medium mb-6 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {services[active].title}
              </h3>

              <p
                className="text-white/45 text-sm leading-[1.9] mb-10"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}
              >
                {services[active].description}
              </p>

              <div className="flex flex-wrap gap-2">
                {services[active].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 border border-[#D4A843]/20 text-[#D4A843]/60 text-[10px] tracking-[0.2em] uppercase"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/8">
              <button
                onClick={() => {
                  const el = document.querySelector('#contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="flex items-center gap-3 text-[#D4A843] text-[12px] tracking-[0.2em] uppercase hover:gap-5 transition-all duration-300 cursor-pointer group"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Demander ce service
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
