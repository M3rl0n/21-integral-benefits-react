import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, Heart, Users, BookOpen } from 'lucide-react'
import { useStore } from '../../store/useStore'

const Contact = () => {
  const { submitContactForm, isLoading } = useStore()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'products'
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await submitContactForm(formData)
    if (result.success) {
      alert('¡Mensaje enviado correctamente! Te contactaremos pronto.')
      setFormData({ name: '', email: '', phone: '', message: '', interest: 'products' })
    } else {
      alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+1 (555) 123-4567',
      description: 'Lunes a Viernes 9:00 - 18:00'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@clubintegral.com',
      description: 'Respuesta en 24 horas'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Ciudad, País',
      description: 'Visítanos en nuestras instalaciones'
    },
    {
      icon: Clock,
      title: 'Horarios',
      value: 'Lun - Vie: 9:00 - 18:00',
      description: 'Sáb: 9:00 - 14:00'
    }
  ]

  const services = [
    {
      icon: Heart,
      title: 'Asesoría Espiritual',
      description: 'Acompañamiento espiritual personalizado'
    },
    {
      icon: Users,
      title: 'Consultoría Nutricional',
      description: 'Planes personalizados con productos Herbalife'
    },
    {
      icon: BookOpen,
      title: 'Sesiones Grupales',
      description: 'Talleres y charlas sobre bienestar integral'
    }
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
    <section id="contact" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
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
            <span>Contáctanos</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6"
          >
            Estamos Aquí para
            <span className="text-primary-600"> Ayudarte</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-secondary-600 max-w-3xl mx-auto"
          >
            ¿Tienes preguntas sobre nuestros productos o servicios? ¿Necesitas asesoría espiritual? 
            Estamos aquí para acompañarte en tu camino hacia el bienestar integral.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-secondary-100"
          >
            <h3 className="text-2xl font-bold text-secondary-800 mb-6">
              Envíanos un Mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tu número de teléfono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  ¿En qué te podemos ayudar? *
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="products">Información sobre Productos</option>
                  <option value="spiritual">Asesoría Espiritual</option>
                  <option value="nutrition">Consultoría Nutricional</option>
                  <option value="community">Unirse al Club</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Services */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-secondary-100"
            >
              <h3 className="text-2xl font-bold text-secondary-800 mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">{info.title}</h4>
                      <p className="text-primary-600 font-medium">{info.value}</p>
                      <p className="text-sm text-secondary-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-secondary-100"
            >
              <h3 className="text-2xl font-bold text-secondary-800 mb-6">
                Nuestros Servicios
              </h3>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">{service.title}</h4>
                      <p className="text-sm text-secondary-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold text-secondary-800 mb-6">
            ¿Listo para Comenzar tu Transformación?
          </h3>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            No esperes más. Tu bienestar integral está a una llamada de distancia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Llamar Ahora
            </button>
            <button className="btn-secondary">
              WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
