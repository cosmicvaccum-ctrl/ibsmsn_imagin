import { motion, useMotionValue, useTransform, animate } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef, useEffect } from 'react'

function AnimatedNumber({
  target,
  suffix = '',
  duration = 2.5,
}: {
  target: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration, ease: 'easeOut' })
    }
  }, [isInView, count, target, duration])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

const stats = [
  {
    value: 500,
    suffix: '+',
    label: 'Diplômés formés',
    sub: 'depuis notre création',
  },
  {
    value: 8,
    suffix: '',
    label: 'Modules de formation',
    sub: 'adaptés au marché',
  },
  {
    value: 3,
    suffix: 'mo',
    label: 'Stage garanti',
    sub: 'pour chaque apprenant',
  },
  {
    value: 10,
    suffix: '+',
    label: "Années d'expérience",
    sub: 'leader à Lomé',
  },
]

const testimonials = [
  {
    text: "IBS MSN a transformé ma carrière. Grâce à la formation en Comptabilité-Caisse, j'ai décroché un emploi en 2 semaines après mon stage.",
    name: 'Afia Kodjovi',
    role: 'Comptable · Lomé',
    initial: 'A',
  },
  {
    text: 'Le module Marketing Digital est excellent. Les instructeurs sont des professionnels du secteur et les outils enseignés sont directement applicables.',
    name: 'Kofi Mensah',
    role: 'Responsable Marketing · Accra',
    initial: 'K',
  },
  {
    text: "J'ai suivi la formation Informatique-Réseaux le soir tout en travaillant. La flexibilité de IBS MSN est incomparable au Togo.",
    name: 'Dzifa Sodji',
    role: 'Technicien Réseau · Lomé',
    initial: 'D',
  },
]

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#080C12] relative overflow-hidden">
      {/* Stats band — full width gold-accented */}
      <div className="relative overflow-hidden bg-[#D4A843]">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-20 grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-[#080C12]/15 relative z-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="px-8 py-4 first:pl-0 last:pr-0 text-center lg:text-left"
            >
              <div
                className="text-[#080C12] font-semibold leading-none mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(3rem, 5vw, 5rem)',
                }}
              >
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div
                className="text-[#080C12]/80 text-sm font-semibold tracking-wide mb-0.5"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {stat.label}
              </div>
              <div
                className="text-[#080C12]/50 text-xs"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}
              >
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div ref={ref} className="max-w-[1400px] mx-auto px-8 lg:px-16 py-40">
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
            Témoignages
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-0 border-t border-white/8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="group border-r last:border-r-0 border-white/8 px-0 lg:px-12 py-14 first:pl-0 last:pr-0 hover:bg-white/[0.015] transition-colors duration-500"
            >
              {/* Giant quote mark */}
              <div
                className="text-[#D4A843]/15 group-hover:text-[#D4A843]/25 transition-colors duration-500 leading-none mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '6rem',
                  lineHeight: 0.7,
                }}
              >
                "
              </div>

              <p
                className="text-white/55 text-base leading-[1.85] mb-10 italic"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: '1.1rem',
                }}
              >
                {t.text}
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 flex items-center justify-center text-[#080C12] font-bold text-sm flex-shrink-0 bg-[#D4A843]"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {t.initial}
                </div>
                <div>
                  <div
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-white/35 text-xs mt-0.5"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
