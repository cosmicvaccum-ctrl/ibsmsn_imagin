import { motion, AnimatePresence } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

type Formation = {
  code: string
  title: string
  duration: string
  level: string
  description: string
  skills: string[]
  category: string
  index: number
}

const formations: Formation[] = [
  {
    code: 'B-100',
    title: 'Informatique de Base',
    duration: '60 Heures',
    level: 'Aucun niveau exigé',
    category: 'Informatique',
    index: 1,
    description:
      'Maîtrisez Windows, la gestion de fichiers, les périphériques et la Suite Microsoft. Formation conçue pour les débutants complets en informatique.',
    skills: [
      'Windows & Navigation',
      'Suite Microsoft Office',
      'Gestion de fichiers',
      'Périphériques',
    ],
  },
  {
    code: 'B-101',
    title: 'Informatique Bureautique',
    duration: '3 Mois',
    level: 'À partir de BEPC',
    category: 'Informatique',
    index: 2,
    description:
      'Formation intensive pour créer du contenu professionnel avec Word, Excel, Publisher, PowerPoint et les outils de communication numérique.',
    skills: [
      'Word & Excel avancé',
      'PowerPoint & Publisher',
      'Communication numérique',
      'Contenu professionnel',
    ],
  },
  {
    code: 'B-102',
    title: 'Excel Appliqué à la Gestion',
    duration: '120 Heures',
    level: 'Série G / Professionnel',
    category: 'Informatique',
    index: 3,
    description:
      'Module dédié aux professionnels de la gestion : édition de rapports comptables, analyse de données et tableaux de bord.',
    skills: [
      'Analyse de données',
      'États financiers',
      'Tableaux croisés',
      'Rapports de gestion',
    ],
  },
  {
    code: 'C-100',
    title: 'Comptabilité-Caisse',
    duration: '6 Mois',
    level: 'Série G ou équivalent',
    category: 'Comptabilité',
    index: 4,
    description:
      'Formation complète en comptabilité OHADA et gestion de caisse. Inclut un stage de 3 mois en entreprise pour une intégration directe.',
    skills: [
      'Comptabilité OHADA',
      'Gestion de caisse',
      'États financiers',
      'Stage 3 mois',
    ],
  },
  {
    code: 'C-101',
    title: 'Secrétaire-Comptable',
    duration: '6 Mois',
    level: 'BEPC ou plus',
    category: 'Comptabilité',
    index: 5,
    description:
      'Polyvalence professionnelle : maîtrisez simultanément les fonctions de secrétariat et de comptabilité pour une employabilité maximale.',
    skills: [
      'Secrétariat avancé',
      'Comptabilité de base',
      'Gestion administrative',
      'Stage inclus',
    ],
  },
  {
    code: 'M-100',
    title: 'Marketing Digital',
    duration: '3 Mois',
    level: 'Bac ou équivalent',
    category: 'Marketing',
    index: 6,
    description:
      'Maîtrisez les outils du marketing digital : réseaux sociaux, SEO, publicité en ligne, création de contenu et stratégie pour PME.',
    skills: [
      'Réseaux sociaux',
      'SEO & SEM',
      'Création de contenu',
      'Publicité en ligne',
    ],
  },
  {
    code: 'S-100',
    title: 'Secrétariat-Bureautique',
    duration: '6 Mois',
    level: 'BEPC ou plus',
    category: 'Secrétariat',
    index: 7,
    description:
      "Formation complète en secrétariat professionnel. Maîtrisez la rédaction administrative, la gestion documentaire et l'accueil.",
    skills: [
      'Rédaction administrative',
      'Gestion documentaire',
      'Accueil professionnel',
      'Stage 3 mois',
    ],
  },
  {
    code: 'R-100',
    title: 'Informatique-Réseaux',
    duration: '6 Mois',
    level: 'Bac ou équivalent',
    category: 'Réseaux',
    index: 8,
    description:
      'Formation technique en infrastructure réseau, maintenance informatique et administration système pour les passionnés des technologies.',
    skills: [
      'Administration réseau',
      'Maintenance PC',
      'Cybersécurité bases',
      'Stage inclus',
    ],
  },
]

const categories = [
  'Tous',
  'Informatique',
  'Comptabilité',
  'Marketing',
  'Secrétariat',
  'Réseaux',
]

export function Formations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [hoveredCode, setHoveredCode] = useState<string | null>(null)

  const filtered =
    activeCategory === 'Tous'
      ? formations
      : formations.filter((f) => f.category === activeCategory)

  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="formations"
      className="bg-[#080C12] py-40 relative overflow-hidden"
    >
      {/* Horizontal rule top */}
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
                Catalogue de Formations
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
                Choisissez votre
                <br />
                <span
                  style={{
                    WebkitTextStroke: '1.5px rgba(212,168,67,0.8)',
                    color: 'transparent',
                  }}
                >
                  voie d'excellence
                </span>
              </motion.h2>
            </div>
          </div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-[11px] tracking-[0.15em] uppercase font-medium border transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#D4A843] border-[#D4A843] text-[#080C12]'
                    : 'bg-transparent border-white/15 text-white/40 hover:border-[#D4A843]/50 hover:text-white/70'
                }`}
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Formation list — editorial table style */}
        <div className="border-t border-white/10">
          <AnimatePresence mode="popLayout">
            {filtered.map((f, i) => (
              <motion.div
                key={f.code}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onMouseEnter={() => setHoveredCode(f.code)}
                onMouseLeave={() => setHoveredCode(null)}
                className="group relative border-b border-white/8 overflow-hidden cursor-pointer"
                onClick={scrollToContact}
              >
                {/* Hover background */}
                <motion.div
                  initial={false}
                  animate={{ opacity: hoveredCode === f.code ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-[#D4A843]/5 via-transparent to-transparent pointer-events-none"
                />

                <div className="relative z-10 grid grid-cols-12 items-center py-7 gap-4">
                  {/* Number */}
                  <div className="col-span-1">
                    <span
                      className="text-white/15 group-hover:text-[#D4A843]/40 transition-colors duration-300 text-sm font-light"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1.4rem',
                      }}
                    >
                      {String(f.index).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Code badge */}
                  <div className="col-span-2 lg:col-span-1">
                    <span
                      className="text-[#D4A843]/60 group-hover:text-[#D4A843] text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {f.code}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="col-span-9 lg:col-span-4">
                    <h3
                      className="text-white/80 group-hover:text-white text-xl lg:text-2xl font-medium tracking-tight transition-colors duration-300"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {f.title}
                    </h3>
                  </div>

                  {/* Description — hidden on small */}
                  <div className="hidden lg:block col-span-3">
                    <p
                      className="text-white/30 text-xs leading-relaxed line-clamp-2"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      {f.description}
                    </p>
                  </div>

                  {/* Duration + Level */}
                  <div className="hidden lg:flex col-span-2 flex-col gap-1">
                    <span
                      className="text-white/40 text-xs tracking-wide"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {f.duration}
                    </span>
                    <span
                      className="text-white/25 text-[10px]"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {f.level}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex col-span-1 justify-end">
                    <motion.div
                      animate={{
                        x: hoveredCode === f.code ? 0 : 10,
                        opacity: hoveredCode === f.code ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-[#D4A843]" />
                    </motion.div>
                  </div>

                  {/* Skills — visible on hover on large screens */}
                  <AnimatePresence>
                    {hoveredCode === f.code && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="col-span-12 flex flex-wrap gap-2 mt-1 lg:hidden"
                      >
                        {f.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 border border-[#D4A843]/20 text-[#D4A843]/70 text-[10px] tracking-[0.1em] uppercase"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                          >
                            {skill}
                          </span>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-10 border border-white/8 bg-white/[0.02]"
        >
          <div>
            <p
              className="text-white/60 text-lg mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Vous ne savez pas quelle formation choisir ?
            </p>
            <p
              className="text-white/30 text-sm"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}
            >
              Notre équipe vous guide vers la formation la plus adaptée à votre
              profil et vos objectifs.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="flex-shrink-0 px-8 py-4 bg-[#D4A843] text-[#080C12] text-[13px] font-semibold tracking-[0.12em] uppercase hover:bg-white transition-colors duration-300 cursor-pointer whitespace-nowrap"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Demander conseil
          </button>
        </motion.div>
      </div>
    </section>
  )
}
