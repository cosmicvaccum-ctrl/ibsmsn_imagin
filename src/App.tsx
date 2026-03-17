import { Navbar } from '@/components/landing/Navbar'
import { Hero } from '@/components/landing/Hero'
import { About } from '@/components/landing/About'
import { Formations } from '@/components/landing/Formations'
import { Services } from '@/components/landing/Services'
import { Stats } from '@/components/landing/Stats'
import { Contact } from '@/components/landing/Contact'
import { Footer } from '@/components/landing/Footer'

export default function App() {
  return (
    <main
      className="min-h-screen bg-[#080C12]"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <Navbar />
      <Hero />
      <About />
      <Formations />
      <Services />
      <Stats />
      <Contact />
      <Footer />
    </main>
  )
}
