'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Formations', href: '#formations' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-[#080C12]/92 backdrop-blur-xl border-b border-[#D4A843]/15 shadow-[0_4px_60px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 h-[78px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#accueil')}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-none bg-[#D4A843] flex items-center justify-center transform rotate-45 group-hover:rotate-[405deg] transition-transform duration-700">
                <span
                  className="text-[#080C12] font-black text-xs tracking-[0.1em] transform -rotate-45 group-hover:-rotate-[405deg] transition-transform duration-700"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  IBS
                </span>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-white font-semibold text-xl tracking-[0.08em] uppercase"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                IBS MSN
              </span>
              <span
                className="text-[#D4A843]/70 text-[9px] tracking-[0.25em] uppercase font-light mt-0.5"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Intelligent Business Solutions
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative text-white/60 hover:text-white text-[13px] font-light tracking-[0.12em] uppercase transition-colors duration-300 group cursor-pointer"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4A843] group-hover:w-full transition-all duration-500 ease-out" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="w-px h-6 bg-white/15" />
            <button
              onClick={() => scrollTo('#contact')}
              className="relative px-7 py-2.5 text-[13px] tracking-[0.15em] uppercase font-medium text-[#080C12] cursor-pointer overflow-hidden group"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="absolute inset-0 bg-[#D4A843] group-hover:bg-white transition-colors duration-300" />
              <span className="relative z-10">S'inscrire</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#080C12] pt-[78px] px-8 lg:hidden"
          >
            {/* Gold line top */}
            <div className="absolute top-[78px] left-8 right-8 h-px bg-gradient-to-r from-[#D4A843] to-transparent" />
            <nav className="flex flex-col gap-0 mt-12">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => scrollTo(link.href)}
                  className="flex items-center justify-between py-7 border-b border-white/8 group cursor-pointer text-left"
                >
                  <span
                    className="text-white/60 group-hover:text-white text-4xl font-light tracking-tight transition-colors duration-300"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {link.label}
                  </span>
                  <span className="text-[#D4A843] text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => scrollTo('#contact')}
                className="mt-10 px-8 py-5 bg-[#D4A843] text-[#080C12] font-semibold text-sm tracking-[0.15em] uppercase cursor-pointer hover:bg-white transition-colors duration-300"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                S'inscrire maintenant
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
