import { motion } from 'framer-motion'
import { Users, Heart, Shield } from 'lucide-react'
import { useStore } from '../../store/useStore'
import HeroImage from '../../assets/img/logo.png'

const Hero = () => {
  const { clubInfo, setCurrentSection } = useStore()

  const features = [
    {
      icon: Heart,
      title: 'Bienestar Integral',
      description: 'Cuerpo, mente y espíritu en armonía'
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Acompañamiento espiritual y apoyo mutuo'
    },
    {
      icon: Shield,
      title: 'Productos de Calidad',
      description: 'Variedad de productos nutricionales con una marca mundialmente reconocida.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }
  const handleNavClick = (sectionId) => {
    setCurrentSection(sectionId)

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
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary-50 via-white to-primary-50 overflow-hidden pt-16 md:pt-20 w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-2 w-32 h-32 sm:w-48 sm:h-48 bg-primary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-2 w-40 h-40 sm:w-56 sm:h-56 bg-accent-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center"
        >
          {/* Content */}
          <div className="text-center lg:text-left">

            <motion.h1
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-secondary-800 mb-4 md:mb-6 leading-tight break-words"
            >
              {clubInfo.name}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-secondary-600 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {clubInfo.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-12"
            >
              <button className="btn-primary group" onClick={() => handleNavClick('contact')}>
                Únete ahora
              </button>
              <button className="btn-secondary" onClick={() => handleNavClick('about')}>
                Descubre más
              </button>
            </motion.div>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center lg:items-start p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20"
                >
                  <feature.icon className="w-8 h-8 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-secondary-800 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-secondary-600 text-center lg:text-left">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image/Visual */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative">
              {/* Placeholder para imagen principal */}
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <img src={HeroImage} alt="Hero Image" className="w-full h-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
