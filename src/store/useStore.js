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
    name: 'Club De Enfoque Integral',
    description: 'Transformando vidas a través del bienestar integral: cuerpo, mente y espíritu',
    mission: 'Inspirar y acompañar a las personas en su bienestar integral: cuerpo, mente y espíritu, promoviendo salud, crecimiento personal y una conexión profunda con Dios.',
    vision: 'Ser el espacio líder donde el bienestar físico y espiritual se unen para transformar vidas con fe, salud y propósito.'
  },

  // Acciones
  setLoading: (loading) => set({ isLoading: loading }),

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),

  setCurrentSection: (section) => set({ currentSection: section }),

  setUser: (user) => set({ user, isLoggedIn: !!user }),

  logout: () => set({ user: null, isLoggedIn: false }),

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
