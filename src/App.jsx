import { useEffect } from 'react'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Products from './components/sections/Products'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import { useStore } from './store/useStore'

function App() {
  const { setCurrentSection } = useStore()

  useEffect(() => {
    // Configurar scroll spy para actualizar la sección activa
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'testimonials', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setCurrentSection])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
