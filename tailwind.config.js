/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep dark glass base
        surface: {
          950: '#03050a',
          900: '#060b14',
          800: '#0b1220',
          700: '#0f1a2e',
          600: '#152038',
        },
        // Teal/cyan primary
        cyan: {
          50:  '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        // Emerald accent
        emerald: {
          400: '#34d399',
          500: '#10b981',
        },
        // Glass tints
        glass: {
          white: 'rgba(255,255,255,0.04)',
          border: 'rgba(255,255,255,0.08)',
          hover:  'rgba(255,255,255,0.07)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'glass-card': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        'hero-glow':  'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6,182,212,0.12) 0%, transparent 70%)',
        'cyan-glow':  'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glass':     '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-lg':  '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
        'cyan-glow': '0 0 30px rgba(6,182,212,0.2)',
        'card-hover':'0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(6,182,212,0.15)',
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'pulse-slow':   'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'slide-up':     'slideUp 0.5s ease forwards',
        'fade-in':      'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
