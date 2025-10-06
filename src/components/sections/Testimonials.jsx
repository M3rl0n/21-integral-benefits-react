import { motion } from 'framer-motion'
import { Star, Quote, Heart, Users, Award } from 'lucide-react'
import { useStore } from '../../store/useStore'

const Testimonials = () => {
  const { testimonials } = useStore()

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

  const TestimonialCard = ({ testimonial, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-secondary-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-bold text-secondary-800">{testimonial.name}</h4>
          <p className="text-secondary-600 text-sm">{testimonial.role}</p>
        </div>
        <div className="ml-auto flex items-center space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-accent-400 fill-current" />
          ))}
        </div>
      </div>

      <div className="relative">
        <Quote className="w-8 h-8 text-primary-200 absolute -top-2 -left-2" />
        <p className="text-secondary-700 leading-relaxed pl-6">
          "{testimonial.content}"
        </p>
      </div>
    </motion.div>
  )

  return (
    <section id="testimonials" className="section-padding bg-white">
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
            <span>Testimonios Reales</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6"
          >
            Historias de
            <span className="text-primary-600"> Transformación</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-secondary-600 max-w-3xl mx-auto"
          >
            Descubre cómo nuestros miembros han transformado sus vidas a través del bienestar integral y la fe.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-12 text-white mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            Nuestro Impacto en Números
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <Users className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-4xl font-bold mb-2"
              >
                500+
              </motion.div>
              <p className="text-lg opacity-90">Miembros Activos</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <Heart className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl font-bold mb-2"
              >
                95%
              </motion.div>
              <p className="text-lg opacity-90">Satisfacción</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <Award className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl font-bold mb-2"
              >
                3
              </motion.div>
              <p className="text-lg opacity-90">Años de Experiencia</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <Star className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-4xl font-bold mb-2"
              >
                4.9/5
              </motion.div>
              <p className="text-lg opacity-90">Calificación</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-secondary-800 mb-6">
            ¿Listo para Escribir tu Historia de Transformación?
          </h3>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad y descubre cómo puedes transformar tu vida a través del bienestar integral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Únete Ahora
            </button>
            <button className="btn-secondary">
              Lee Más Testimonios
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
