// Colores del tema
export const COLORS = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  accent: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  }
}

// Animaciones predefinidas
export const ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  slideDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  slideLeft: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  slideRight: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  stagger: {
    container: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.1
        }
      }
    },
    item: {
      initial: { opacity: 0, y: 30 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
      }
    }
  }
}

// Breakpoints responsive
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

// Configuración de la aplicación
export const APP_CONFIG = {
  name: 'Club De Enfoque Integral',
  description: 'Transformando vidas a través del bienestar integral: cuerpo, mente y espíritu',
  version: '1.0.0',
  author: 'Club Integral Team',
  contact: {
    email: 'info@clubintegral.com',
    phone: '+1 (555) 123-4567',
    address: 'Ciudad, País'
  },
  social: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
    twitter: '#'
  }
}

// Mensajes del sistema
export const MESSAGES = {
  success: {
    contactForm: '¡Mensaje enviado correctamente! Te contactaremos pronto.',
    subscription: '¡Te has suscrito exitosamente!',
    joinClub: '¡Bienvenido al Club Integral!'
  },
  error: {
    contactForm: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    network: 'Error de conexión. Verifica tu internet.',
    general: 'Algo salió mal. Por favor, inténtalo de nuevo.'
  },
  loading: {
    sending: 'Enviando...',
    loading: 'Cargando...',
    processing: 'Procesando...'
  }
}

// Validaciones
export const VALIDATIONS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\+]?[1-9][\d]{0,15}$/,
  required: (value) => value && value.trim().length > 0,
  minLength: (min) => (value) => value && value.length >= min,
  maxLength: (max) => (value) => value && value.length <= max
}
