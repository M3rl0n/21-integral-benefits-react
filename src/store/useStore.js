import { create } from 'zustand'

export const useStore = create((set, get) => ({
  // Estado de la aplicación
  isLoading: false,
  isMenuOpen: false,
  currentSection: 'home',
  
  // Datos del usuario
  user: null,
  isLoggedIn: false,
  
  // Datos del club
  clubInfo: {
    name: 'Club Integral Herbalife',
    description: 'Transformando vidas a través del bienestar integral: cuerpo, mente y espíritu',
    mission: 'Proporcionar productos de calidad y asesoría espiritual para el desarrollo integral de nuestros miembros',
    vision: 'Ser la comunidad líder en bienestar integral, combinando productos Herbalife con principios cristianos'
  },
  
  // Productos destacados
  featuredProducts: [
    {
      id: 1,
      name: 'Fórmula 1',
      description: 'Batido nutricional para el control de peso',
      category: 'Control de Peso',
      benefits: ['Control de peso', 'Nutrición balanceada', 'Energía sostenida']
    },
    {
      id: 2,
      name: 'Fórmula 2',
      description: 'Multivitamínico para el bienestar general',
      category: 'Bienestar General',
      benefits: ['Soporte inmunológico', 'Energía natural', 'Bienestar general']
    },
    {
      id: 3,
      name: 'Herbalife24',
      description: 'Línea deportiva para atletas',
      category: 'Deportivo',
      benefits: ['Rendimiento deportivo', 'Recuperación muscular', 'Hidratación']
    }
  ],
  
  // Testimonios
  testimonials: [
    {
      id: 1,
      name: 'María González',
      role: 'Miembro del Club',
      content: 'El club me ha ayudado no solo físicamente con los productos, sino espiritualmente. Es una comunidad que realmente se preocupa por tu bienestar integral.',
      rating: 5
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      role: 'Miembro del Club',
      content: 'Los productos Herbalife son excelentes, pero lo que más valoro es la asesoría espiritual que recibimos. Es un enfoque único y transformador.',
      rating: 5
    }
  ],
  
  // Acciones
  setLoading: (loading) => set({ isLoading: loading }),
  
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  
  setCurrentSection: (section) => set({ currentSection: section }),
  
  setUser: (user) => set({ user, isLoggedIn: !!user }),
  
  logout: () => set({ user: null, isLoggedIn: false }),
  
  // Acciones para productos
  addToCart: (product) => {
    // Implementar lógica de carrito si es necesario
    console.log('Producto agregado al carrito:', product)
  },
  
  // Acciones para formularios
  submitContactForm: async (formData) => {
    set({ isLoading: true })
    try {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado:', formData)
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1000))
      return { success: true, message: 'Mensaje enviado correctamente' }
    } catch (error) {
      return { success: false, message: 'Error al enviar el mensaje' }
    } finally {
      set({ isLoading: false })
    }
  }
}))
