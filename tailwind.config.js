/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.slate,
        accent: colors.teal,
        neon: {
          cyan: '#01F5C3',
          orange: '#FF6B6B',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(0, 0, 0, 0.2)',
          border: {
            light: 'rgba(255, 255, 255, 0.2)',
            dark: 'rgba(0, 0, 0, 0.3)',
          }
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['clamp(0.65rem, 1vw, 0.75rem)', { lineHeight: '1.4' }],
        'sm': ['clamp(0.75rem, 1.2vw, 0.875rem)', { lineHeight: '1.5' }],
        'base': ['clamp(0.875rem, 1.5vw, 1rem)', { lineHeight: '1.6' }],
        'lg': ['clamp(1rem, 1.6vw, 1.1rem)', { lineHeight: '1.6' }],
        'xl': ['clamp(1.1rem, 1.8vw, 1.2rem)', { lineHeight: '1.5' }],
        '2xl': ['clamp(1.2rem, 2.2vw, 1.4rem)', { lineHeight: '1.4' }],
        '3xl': ['clamp(1.4rem, 2.8vw, 1.6rem)', { lineHeight: '1.3' }],
        '4xl': ['clamp(1.6rem, 3.2vw, 1.8rem)', { lineHeight: '1.2' }],
        '5xl': ['clamp(1.8rem, 4vw, 2.2rem)', { lineHeight: '1.1' }],
        '6xl': ['clamp(2rem, 4.5vw, 2.8rem)', { lineHeight: '1.1' }],
        '7xl': ['clamp(2.2rem, 5vw, 3.2rem)', { lineHeight: '1' }],
        '8xl': ['clamp(2.5rem, 5.5vw, 3.5rem)', { lineHeight: '1' }],
        '9xl': ['clamp(2.8rem, 6vw, 3.8rem)', { lineHeight: '1' }],
      },
      spacing: {
        '18': 'clamp(1rem, 2vw, 1.5rem)',
        '22': 'clamp(1.25rem, 2.5vw, 2rem)',
        '26': 'clamp(1.5rem, 3vw, 2.5rem)',
        '30': 'clamp(2rem, 4vw, 3rem)',
        '34': 'clamp(2.5rem, 5vw, 3.5rem)',
        '38': 'clamp(3rem, 6vw, 4rem)',
        '42': 'clamp(3.5rem, 7vw, 4.5rem)',
        '46': 'clamp(4rem, 8vw, 5rem)',
        '50': 'clamp(4.5rem, 9vw, 5.5rem)',
        '54': 'clamp(5rem, 10vw, 6rem)',
        '58': 'clamp(5.5rem, 11vw, 6.5rem)',
        '62': 'clamp(6rem, 12vw, 7rem)',
        '66': 'clamp(6.5rem, 13vw, 7.5rem)',
        '70': 'clamp(7rem, 14vw, 8rem)',
        '74': 'clamp(7.5rem, 15vw, 8.5rem)',
        '78': 'clamp(8rem, 16vw, 9rem)',
        '82': 'clamp(8.5rem, 17vw, 9.5rem)',
        '86': 'clamp(9rem, 18vw, 10rem)',
        '90': 'clamp(9.5rem, 19vw, 10.5rem)',
        '94': 'clamp(10rem, 20vw, 11rem)',
        '98': 'clamp(10.5rem, 21vw, 11.5rem)',
        '102': 'clamp(11rem, 22vw, 12rem)',
        '106': 'clamp(11.5rem, 23vw, 12.5rem)',
        '110': 'clamp(12rem, 24vw, 13rem)',
        '114': 'clamp(12.5rem, 25vw, 13.5rem)',
        '118': 'clamp(13rem, 26vw, 14rem)',
        '122': 'clamp(13.5rem, 27vw, 14.5rem)',
        '126': 'clamp(14rem, 28vw, 15rem)',
        '130': 'clamp(14.5rem, 29vw, 15.5rem)',
        '134': 'clamp(15rem, 30vw, 16rem)',
      },
      maxWidth: {
        'container': 'min(1200px, 90vw)',
        'container-sm': 'min(640px, 90vw)',
        'container-md': 'min(768px, 90vw)',
        'container-lg': 'min(1024px, 90vw)',
        'container-xl': 'min(1200px, 90vw)',
        'container-2xl': 'min(1400px, 90vw)',
      },
      width: {
        'icon-sm': 'clamp(0.875rem, 2vw, 1.25rem)',
        'icon-md': 'clamp(1.25rem, 3vw, 1.75rem)',
        'icon-lg': 'clamp(1.5rem, 4vw, 2.25rem)',
        'icon-xl': 'clamp(2rem, 5vw, 2.75rem)',
        'icon-2xl': 'clamp(2.5rem, 6vw, 3.25rem)',
        'icon-3xl': 'clamp(3rem, 7vw, 3.75rem)',
        'icon-4xl': 'clamp(3.5rem, 8vw, 4.25rem)',
      },
      height: {
        'icon-sm': 'clamp(0.875rem, 2vw, 1.25rem)',
        'icon-md': 'clamp(1.25rem, 3vw, 1.75rem)',
        'icon-lg': 'clamp(1.5rem, 4vw, 2.25rem)',
        'icon-xl': 'clamp(2rem, 5vw, 2.75rem)',
        'icon-2xl': 'clamp(2.5rem, 6vw, 3.25rem)',
        'icon-3xl': 'clamp(3rem, 7vw, 3.75rem)',
        'icon-4xl': 'clamp(3.5rem, 8vw, 4.25rem)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(1, 245, 195, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(1, 245, 195, 0.8)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-light': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'glass-dark': 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(1, 245, 195, 0.3)',
        'glow-lg': '0 0 40px rgba(1, 245, 195, 0.4)',
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'neon-cyan': '0 0 20px rgba(1, 245, 195, 0.4)',
        'neon-orange': '0 0 20px rgba(255, 107, 107, 0.4)',
        'neon-cyan-lg': '0 0 40px rgba(1, 245, 195, 0.6)',
        'neon-orange-lg': '0 0 40px rgba(255, 107, 107, 0.6)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-light': '0 8px 32px rgba(255, 255, 255, 0.1)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
} 