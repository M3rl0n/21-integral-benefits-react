import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart, Users } from 'lucide-react'
import { useStore } from '../../store/useStore'
import Logo from '../../assets/img/Logo.png'

const Header = () => {
  const { isMenuOpen, toggleMenu, setCurrentSection, currentSection } = useStore()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Inicio', icon: Heart, href: '#home' },
    { id: 'about', label: 'Nosotros', icon: Users, href: '#about' },
    { id: 'contact', label: 'Contacto', icon: Heart, href: '#contact' }
  ]

  const handleNavClick = (sectionId) => {
    setCurrentSection(sectionId)
    toggleMenu()

    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = 80
        const elementPosition = element.offsetTop - headerHeight

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="container-custom px-8">
        <div className="flex items-center justify-between py-3 md:py-4 gap-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2 min-w-0 flex-shrink-0"
          >
            {/* Logo image */}
            {/* <img src={Logo} alt="Logo" className="w-10 h-10" /> */}
            <div>
              <h1 className="text-base sm:text-lg font-bold text-secondary-800">C.E.I</h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${currentSection === item.id
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:block"
          >
            <button className="btn-primary" onClick={() => handleNavClick('contact')}>
              Únete al Club
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors flex-shrink-0"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-secondary-200"
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-3 px-4 py-4 rounded-lg transition-all duration-200 text-left w-full ${currentSection === item.id
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
                      }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
                <div className="pt-4">
                  <button className="btn-primary w-full" onClick={() => handleNavClick('contact')}>
                    Únete al Club
                  </button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
