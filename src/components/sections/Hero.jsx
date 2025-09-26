import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, Heart, Shield } from 'lucide-react'
import { useStore } from '../../store/useStore'

const Hero = () => {
  const { clubInfo } = useStore()

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
      description: 'Herbalife con respaldo científico'
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

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>Transformando vidas desde 2024</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-800 mb-6 leading-tight"
            >
              {clubInfo.name}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-secondary-600 mb-8 max-w-2xl"
            >
              {clubInfo.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="btn-primary group">
                Descubre Más
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                Ver Productos
              </button>
            </motion.div>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
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
                  <Heart className="w-24 h-24 text-primary-600 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-secondary-700">
                    Imagen Principal
                  </p>
                  <p className="text-sm text-secondary-600">
                    Aquí irá la imagen principal del club
                  </p>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-secondary-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-800">500+</p>
                    <p className="text-xs text-secondary-600">Miembros</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-secondary-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary-600 fill-current" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-800">4.9/5</p>
                    <p className="text-xs text-secondary-600">Calificación</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-secondary-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-secondary-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
