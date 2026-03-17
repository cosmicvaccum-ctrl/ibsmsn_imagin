import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'

const pillars = [
  {
    number: '01',
    title: 'Excellence Académique',
    desc: "Des programmes conçus avec des professionnels du secteur pour garantir une formation d'excellence adaptée au marché togolais et régional.",
  },
  {
    number: '02',
    title: 'Approche Pratique',
    desc: "L'apprentissage par la pratique est au cœur de notre pédagogie. Chaque module intègre des exercices concrets et des études de cas réels.",
  },
  {
    number: '03',
    title: 'Insertion Professionnelle',
    desc: "Un stage de 3 mois en entreprise est offert à chaque apprenant, ouvrant la voie à l'emploi dès la fin de la formation.",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="apropos"
      className="bg-[#0D1117] py-40 relative overflow-hidden"
    >
      {/* Horizontal rule top */}
      <div className="absolute top-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-[#D4A843]/20 to-transparent" />

      {/* Background number watermark */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 text-white/[0.015] leading-none pointer-events-none select-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '40vw',
          fontWeight: 700,
        }}
      >
        IBS
      </div>

      <div ref={ref} className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="w-8 h-px bg-[#D4A843]" />
          <span
            className="text-[#D4A843] text-[11px] tracking-[0.35em] uppercase font-medium"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Notre Identité
          </span>
        </motion.div>

        {/* Main two-col layout */}
        <div className="grid lg:grid-cols-2 gap-20 mb-32 items-center">
          {/* Left: Big statement */}
          <div>
            <div className="overflow-hidden mb-2">
              <motion.h2
                initial={{ y: 80, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-white"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.8rem, 5vw, 5.5rem)',
                  lineHeight: 0.95,
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                }}
              >
                Façonner les
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: 80, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.8rem, 5vw, 5.5rem)',
                  lineHeight: 0.95,
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  WebkitTextStroke: '1.5px rgba(212,168,67,0.8)',
                  color: 'transparent',
                }}
              >
                professionnels
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h2
                initial={{ y: 80, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-white"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.8rem, 5vw, 5.5rem)',
                  lineHeight: 0.95,
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                }}
              >
                de demain.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-white/45 text-[15px] leading-[1.8] max-w-[400px]"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}
            >
              Depuis plus d'une décennie, IBS MSN forme et accompagne les
              talents togolais vers l'excellence professionnelle. Notre mission
              : rendre la formation qualifiante accessible, pratique et
              directement connectée aux besoins du marché.
            </motion.p>
          </div>

          {/* Right: Image with floating card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* Gold border frame offset */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#D4A843]/20 z-0" />
            <div className="relative z-10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=85"
                alt="Formation professionnelle IBS MSN Lomé"
                className="w-full h-[550px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C12]/70 to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="absolute -bottom-8 -left-8 bg-[#D4A843] p-8 z-20"
            >
              <div
                className="text-[#080C12] font-black leading-none mb-1"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '3.5rem',
                }}
              >
                10+
              </div>
              <div
                className="text-[#080C12]/70 text-[11px] tracking-[0.2em] uppercase font-semibold"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Années d'excellence
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Pillars — horizontal numbered list */}
        <div className="border-t border-white/8 pt-16">
          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}
                className="group px-0 md:px-10 py-10 first:pl-0 last:pr-0 hover:bg-white/[0.02] transition-colors duration-500 cursor-default"
              >
                <div
                  className="text-[#D4A843]/30 font-light mb-6 leading-none group-hover:text-[#D4A843]/60 transition-colors duration-500"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '3rem',
                  }}
                >
                  {pillar.number}
                </div>
                <h3
                  className="text-white text-lg font-medium mb-3 tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-white/40 text-[13px] leading-[1.8]"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-24 max-w-3xl mx-auto text-center"
        >
          <div
            className="text-[#D4A843]/20 leading-none mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '8rem',
              lineHeight: '0.5',
            }}
          >
            "
          </div>
          <p
            className="text-white/50 text-xl italic leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
            }}
          >
            De toutes les valeurs humaines, la culture de la connaissance résume
            l'identité de la création infinie.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-12 h-px bg-[#D4A843]/40" />
            <span
              className="text-[#D4A843]/60 text-[11px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Le Directeur, IBS MSN
            </span>
            <div className="w-12 h-px bg-[#D4A843]/40" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
