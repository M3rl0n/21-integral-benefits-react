import { motion } from 'framer-motion'
import { Heart, Users, Target, Award, BookOpen, Shield } from 'lucide-react'
import { useStore } from '../../store/useStore'

const About = () => {
  const { clubInfo } = useStore()

  const values = [
    {
      icon: Heart,
      title: 'Amor',
      description: 'Amamos a Dios y a nuestro prójimo, sirviendo con compasión y dedicación.',
      color: 'text-red-500'
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Construimos una familia donde cada miembro es valorado y apoyado.',
      color: 'text-blue-500'
    },
    {
      icon: Target,
      title: 'Excelencia',
      description: 'Buscamos la excelencia en todo lo que hacemos, honrando a Dios.',
      color: 'text-green-500'
    },
    {
      icon: Shield,
      title: 'Integridad',
      description: 'Actuamos con honestidad y transparencia en todas nuestras relaciones.',
      color: 'text-purple-500'
    }
  ]

  const stats = [
    { number: '500+', label: 'Miembros Activos' },
    { number: '3', label: 'Años de Experiencia' },
    { number: '95%', label: 'Satisfacción' },
    { number: '24/7', label: 'Soporte Espiritual' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Heart className="w-4 h-4" />
            <span>Nuestra Historia</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6"
          >
            Transformando Vidas a Través del
            <span className="text-primary-600"> Bienestar Integral</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-secondary-600 max-w-3xl mx-auto"
          >
            {clubInfo.mission}
          </motion.p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-800">Misión</h3>
            </div>
            <p className="text-secondary-700 text-lg leading-relaxed">
              {clubInfo.mission}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-2xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-800">Visión</h3>
            </div>
            <p className="text-secondary-700 text-lg leading-relaxed">
              {clubInfo.vision}
            </p>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center text-secondary-800 mb-12"
          >
            Nuestros Valores
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg border border-secondary-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg`}>
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h4 className="text-xl font-bold text-secondary-800 mb-3">
                  {value.title}
                </h4>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-12 text-white"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            Nuestro Impacto
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold text-secondary-800 mb-6">
            ¿Listo para tu Transformación?
          </h3>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad y descubre cómo el bienestar integral puede transformar tu vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Únete Ahora
            </button>
            <button className="btn-secondary">
              Conoce Más
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
