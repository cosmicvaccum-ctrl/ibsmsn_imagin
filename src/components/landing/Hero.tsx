import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#080C12]"
    >
      {/* Parallax Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1800&q=90"
          alt="IBS MSN formation professionnelle Lomé Togo"
          className="w-full h-full object-cover scale-110"
        />
        {/* Multi-layer overlay for dramatic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C12] via-[#080C12]/60 to-[#080C12]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C12]/80 via-transparent to-transparent" />
        {/* Gold vignette bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-[#080C12] to-transparent" />
      </motion.div>

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      {/* Floating year badge */}
      <motion.div
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: -90 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-12 top-1/2 z-10 hidden lg:flex items-center gap-3 origin-center"
      >
        <div className="w-12 h-px bg-[#D4A843]" />
        <span
          className="text-[#D4A843]/70 text-[10px] tracking-[0.3em] uppercase whitespace-nowrap"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Fondé 2013 · Lomé, Togo
        </span>
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 pb-28 pt-[160px] w-full"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-8 h-px bg-[#D4A843]" />
          <span
            className="text-[#D4A843] text-[11px] tracking-[0.35em] uppercase font-medium"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Centre de Formation Professionnelle
          </span>
        </motion.div>

        {/* Headline — pure editorial power */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-white leading-[0.9] mb-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(4.5rem, 10vw, 10rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            Construisez
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="leading-[0.9] mb-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(4.5rem, 10vw, 10rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              WebkitTextStroke: '1.5px rgba(212,168,67,0.7)',
              color: 'transparent',
            }}
          >
            votre avenir
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
            className="text-white leading-[0.9] mb-12"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(4.5rem, 10vw, 10rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            professionnel.
          </motion.h1>
        </div>

        {/* Bottom strip — description + CTA + stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20"
        >
          {/* Description */}
          <div className="max-w-[380px]">
            <div className="w-8 h-px bg-[#D4A843] mb-5" />
            <p
              className="text-white/55 text-[15px] leading-[1.75] font-light"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Formations qualifiantes en Comptabilité, Marketing Digital,
              Informatique et Secrétariat. Avec 3 mois de stage en entreprise
              garanti et un accompagnement jusqu'à l'emploi.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('#formations')}
              className="group flex items-center gap-4 px-8 py-4 bg-[#D4A843] text-[#080C12] text-[13px] font-semibold tracking-[0.12em] uppercase hover:bg-white transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Nos formations
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="group flex items-center gap-4 px-8 py-4 border border-white/25 text-white/75 text-[13px] font-light tracking-[0.12em] uppercase hover:border-[#D4A843] hover:text-[#D4A843] transition-all duration-300 cursor-pointer"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              S'inscrire
            </button>
          </div>

          {/* Stats row */}
          <div className="lg:ml-auto flex items-center gap-10">
            {[
              { v: '500+', l: 'Diplômés' },
              { v: '10+', l: 'Années' },
              { v: '8', l: 'Filières' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-[#D4A843] font-semibold mb-1"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '2rem',
                  }}
                >
                  {s.v}
                </div>
                <div
                  className="text-white/35 text-[10px] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-px h-16 bg-gradient-to-b from-[#D4A843] to-transparent" />
          <span
            className="text-white/25 text-[9px] tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
