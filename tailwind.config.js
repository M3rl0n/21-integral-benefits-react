/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Verde natural - Representa vida, salud, crecimiento y naturaleza
        primary: {
          50: '#f7faf4',
          100: '#ecf4e3',
          200: '#d9e9c8',
          300: '#bdd7a1',
          400: '#98c272',
          500: '#6f9d37', // Verde principal del club
          600: '#5c8129',
          700: '#486622',
          800: '#3a5220',
          900: '#2d3f18',
        },
        // Rosa suave - Representa amor, compasión, cuidado y bienestar emocional
        secondary: {
          50: '#fef8f9',
          100: '#fef0f2',
          200: '#fde2e7',
          300: '#fbc8d2',
          400: '#f6a1b1',
          500: '#f4b2bb', // Rosa principal del club
          600: '#e287a0',
          700: '#c8637f',
          800: '#a54b69',
          900: '#8a3f5a',
        },
        // Verde oliva - Para elementos de sabiduría y estabilidad espiritual
        accent: {
          50: '#f8faf5',
          100: '#f0f4e8',
          200: '#e1e9d1',
          300: '#c9d7b0',
          400: '#adc189',
          500: '#8fa662', // Verde oliva complementario
          600: '#748c4e',
          700: '#5d7040',
          800: '#4b5a35',
          900: '#3e4a2e',
        },
        // Rosa tierra - Para elementos de transformación personal
        spiritual: {
          50: '#fdf8f7',
          100: '#fbf0ee',
          200: '#f5ded9',
          300: '#ecc4bb',
          400: '#dfa194',
          500: '#d07d6d', // Rosa tierra espiritual
          600: '#ba5f4e',
          700: '#9d4d40',
          800: '#824139',
          900: '#6c3835',
        },
        // Grises neutros para balance
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        'sans': ['29LT Riwaya', 'Inter', 'system-ui', 'sans-serif'],
        'serif': ['Scripter', 'Playfair Display', 'serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'scripter': ['Scripter', 'serif'],
        'riwaya': ['29LT Riwaya', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

