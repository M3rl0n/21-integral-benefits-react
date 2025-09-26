import { motion } from 'framer-motion'
import { Star, CheckCircle, ArrowRight, Heart, Zap, Shield } from 'lucide-react'
import { useStore } from '../../store/useStore'

const Products = () => {
  const { featuredProducts, addToCart } = useStore()

  const categories = [
    {
      name: 'Control de Peso',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      description: 'Productos para mantener un peso saludable'
    },
    {
      name: 'Bienestar General',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      description: 'Nutrición y suplementos para el bienestar'
    },
    {
      name: 'Deportivo',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      description: 'Productos para atletas y deportistas'
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
    <section id="products" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
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
            <Star className="w-4 h-4" />
            <span>Productos Herbalife</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6"
          >
            Productos de
            <span className="text-primary-600"> Calidad Superior</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-secondary-600 max-w-3xl mx-auto"
          >
            Descubre nuestra selección de productos Herbalife, respaldados por la ciencia y diseñados para tu bienestar integral.
          </motion.p>
        </motion.div>

        {/* Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-secondary-100 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-3">
                {category.name}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Products */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg border border-secondary-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-16 h-16 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm text-secondary-600">Imagen del Producto</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent-400 fill-current" />
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-secondary-800 mb-2">
                  {product.name}
                </h3>

                <p className="text-secondary-600 mb-4">
                  {product.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-800 mb-2">Beneficios:</h4>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-secondary-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-primary-600">$49.99</p>
                    <p className="text-sm text-secondary-500">Precio especial</p>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <span>Agregar</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Herbalife */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-2xl p-12 shadow-lg border border-secondary-100"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center text-secondary-800 mb-12"
          >
            ¿Por qué Elegir Herbalife?
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-bold text-secondary-800 mb-3">
                Calidad Garantizada
              </h4>
              <p className="text-secondary-600">
                Productos respaldados por más de 40 años de investigación científica.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="text-xl font-bold text-secondary-800 mb-3">
                Resultados Comprobados
              </h4>
              <p className="text-secondary-600">
                Millones de personas han transformado sus vidas con nuestros productos.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-secondary-800 mb-3">
                Soporte Integral
              </h4>
              <p className="text-secondary-600">
                Acompañamiento espiritual y nutricional para tu bienestar completo.
              </p>
            </motion.div>
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
            ¿Listo para Comenzar tu Transformación?
          </h3>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            Descubre cómo nuestros productos pueden ayudarte a alcanzar tus objetivos de bienestar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Ver Catálogo Completo
            </button>
            <button className="btn-secondary">
              Consulta Gratuita
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
