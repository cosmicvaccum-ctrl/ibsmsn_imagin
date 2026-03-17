import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { MapPin, Facebook, Send, CheckCircle } from 'lucide-react'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    formation: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputClass =
    'w-full bg-transparent border-b border-white/15 py-4 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#D4A843] transition-colors duration-300'

  return (
    <section
      id="contact"
      className="bg-[#0D1117] py-40 relative overflow-hidden"
    >
      <div className="absolute top-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-[#D4A843]/20 to-transparent" />

      {/* Background watermark */}
      <div
        className="absolute bottom-0 right-0 text-white/[0.012] leading-none pointer-events-none select-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '30vw',
          fontWeight: 700,
          lineHeight: 0.8,
        }}
      >
        MSN
      </div>

      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-8 lg:px-16 relative z-10"
      >
        {/* Header */}
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
            Contact & Inscription
          </span>
        </motion.div>

        <div className="overflow-hidden mb-20">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.8rem, 5.5vw, 6rem)',
              lineHeight: 0.9,
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            Commencez votre
            <br />
            <span
              style={{
                WebkitTextStroke: '1.5px rgba(212,168,67,0.8)',
                color: 'transparent',
              }}
            >
              parcours aujourd'hui
            </span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-0 border border-white/8">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 bg-[#D4A843] p-10 lg:p-14 flex flex-col justify-between"
          >
            <div>
              {/* Big brand */}
              <div
                className="text-[#080C12] font-semibold leading-none mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                }}
              >
                IBS MSN
              </div>
              <p
                className="text-[#080C12]/60 text-[11px] tracking-[0.3em] uppercase mb-12"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Intelligent Business Solutions
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <MapPin className="w-5 h-5 text-[#080C12]/60 flex-shrink-0 mt-0.5" />
                  <div>
                    <div
                      className="text-[#080C12] font-semibold text-sm mb-1"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      Localisation
                    </div>
                    <div
                      className="text-[#080C12]/60 text-sm"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      Lomé, Togo · Centre-ville
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <Facebook className="w-5 h-5 text-[#080C12]/60 flex-shrink-0 mt-0.5" />
                  <div>
                    <div
                      className="text-[#080C12] font-semibold text-sm mb-1"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      Facebook
                    </div>
                    <a
                      href="https://www.facebook.com/p/IBS-100083388000096/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#080C12]/60 text-sm underline-offset-4 hover:underline transition-all"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      Suivez-nous sur Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-16 pt-8 border-t border-[#080C12]/15">
              <p
                className="text-[#080C12]/60 text-sm italic leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1rem',
                }}
              >
                "Sentez-vous chez vous, et profitez de notre cadre de formation
                pour l'atteinte de vos objectifs professionnels."
              </p>
              <p
                className="text-[#080C12]/40 text-[10px] tracking-[0.2em] uppercase mt-3"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                — Le Directeur, IBS MSN
              </p>
            </div>
          </motion.div>

          {/* Right form panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 bg-[#0a0e16] p-10 lg:p-14"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <CheckCircle className="w-14 h-14 text-[#D4A843] mb-6" />
                <h3
                  className="text-white text-3xl font-medium mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Message envoyé !
                </h3>
                <p
                  className="text-white/40 text-sm leading-relaxed max-w-xs"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  Merci pour votre intérêt. L'équipe IBS MSN vous contactera
                  dans les plus brefs délais.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <p
                    className="text-white/20 text-[11px] tracking-[0.3em] uppercase mb-8"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Formulaire d'inscription
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      className="block text-white/30 text-[10px] tracking-[0.25em] uppercase mb-3"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      Nom complet *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Votre nom et prénom"
                      className={inputClass}
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-white/30 text-[10px] tracking-[0.25em] uppercase mb-3"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className={inputClass}
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-white/30 text-[10px] tracking-[0.25em] uppercase mb-3"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Téléphone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+228 XX XX XX XX"
                    className={inputClass}
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  />
                </div>

                <div>
                  <label
                    className="block text-white/30 text-[10px] tracking-[0.25em] uppercase mb-3"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Formation souhaitée
                  </label>
                  <select
                    name="formation"
                    value={form.formation}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    <option value="" className="bg-[#0a0e16]">
                      Sélectionnez une formation
                    </option>
                    <option className="bg-[#0a0e16]">
                      Informatique de Base (B-100)
                    </option>
                    <option className="bg-[#0a0e16]">
                      Informatique Bureautique (B-101)
                    </option>
                    <option className="bg-[#0a0e16]">
                      Excel Appliqué à la Gestion (B-102)
                    </option>
                    <option className="bg-[#0a0e16]">
                      Comptabilité-Caisse (C-100)
                    </option>
                    <option className="bg-[#0a0e16]">
                      Secrétaire-Comptable (C-101)
                    </option>
                    <option className="bg-[#0a0e16]">
                      Marketing Digital (M-100)
                    </option>
                    <option className="bg-[#0a0e16]">
                      Secrétariat-Bureautique (S-100)
                    </option>
                    <option className="bg-[#0a0e16]">
                      Informatique-Réseaux (R-100)
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-white/30 text-[10px] tracking-[0.25em] uppercase mb-3"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Message (optionnel)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Questions, précisions sur votre profil..."
                    className={`${inputClass} resize-none`}
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group w-full py-5 bg-[#D4A843] text-[#080C12] text-[13px] font-semibold tracking-[0.15em] uppercase flex items-center justify-center gap-4 hover:bg-white transition-colors duration-300 cursor-pointer"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Envoyer ma demande d'inscription
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
