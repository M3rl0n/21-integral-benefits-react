import { motion } from 'framer-motion'
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
import { useStore } from '../../store/useStore'

const Footer = () => {
  const { clubInfo } = useStore()

  const footerLinks = {
    club: [
      { name: 'Sobre Nosotros', href: '#about' },
      { name: 'Nuestra Misión', href: '#about' },
      { name: 'Valores', href: '#about' },
      { name: 'Testimonios', href: '#testimonials' }
    ],
    products: [
      { name: 'Control de Peso', href: '#products' },
      { name: 'Bienestar General', href: '#products' },
      { name: 'Deportivo', href: '#products' },
      { name: 'Catálogo Completo', href: '#products' }
    ],
    services: [
      { name: 'Asesoría Espiritual', href: '#contact' },
      { name: 'Consultoría Nutricional', href: '#contact' },
      { name: 'Sesiones Grupales', href: '#contact' },
      { name: 'Acompañamiento', href: '#contact' }
    ],
    support: [
      { name: 'Preguntas Frecuentes', href: '#' },
      { name: 'Soporte Técnico', href: '#' },
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Términos y Condiciones', href: '#' }
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{clubInfo.name}</h3>
                  <p className="text-secondary-400 text-sm">Herbalife</p>
                </div>
              </div>
              
              <p className="text-secondary-300 mb-6 leading-relaxed">
                {clubInfo.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-secondary-300">
                  <Mail className="w-5 h-5" />
                  <span>info@clubintegral.com</span>
                </div>
                <div className="flex items-center space-x-3 text-secondary-300">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-secondary-300">
                  <MapPin className="w-5 h-5" />
                  <span>Ciudad, País</span>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6">El Club</h4>
              <ul className="space-y-3">
                {footerLinks.club.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-secondary-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6">Productos</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-secondary-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6">Servicios</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-secondary-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-8 border-t border-secondary-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-xl font-semibold mb-2">Mantente Conectado</h4>
              <p className="text-secondary-300">
                Recibe consejos de bienestar y actualizaciones del club
              </p>
            </div>
            
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 md:w-80 px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-secondary-400"
              />
              <button className="btn-primary rounded-l-none">
                Suscribirse
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-8 border-t border-secondary-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-secondary-400 text-sm mb-4 md:mb-0">
              © 2024 {clubInfo.name}. Todos los derechos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-400 transition-all duration-200 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              {footerLinks.support.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-secondary-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200 rounded-full blur-3xl"></div>
      </div>
    </footer>
  )
}

export default Footer
