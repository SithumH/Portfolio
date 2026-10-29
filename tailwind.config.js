/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:      { DEFAULT: '#07070f', 2: '#0d0d1a', 3: '#12122b' },
        violet:  { 300:'#c4b5fd', 400:'#a78bfa', 500:'#8b5cf6', 600:'#7c3aed', 700:'#6d28d9' },
        pink:    { 400:'#f472b6', 500:'#ec4899' },
        indigo:  { 400:'#818cf8', 500:'#6366f1' },
        surface: 'rgba(255,255,255,0.04)',
      },
      backgroundImage: {
        'glow-v':   'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 70%)',
        'card-grad':'linear-gradient(135deg,rgba(255,255,255,0.055) 0%,rgba(255,255,255,0.01) 100%)',
      },
      fontFamily: {
        sans: ['Inter','system-ui','sans-serif'],
        mono: ['Fira Code','monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.55s ease both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity:'0', transform:'translateY(18px)' },
          to:   { opacity:'1', transform:'translateY(0)' },
        },
        marquee:         { from:{transform:'translateX(0)'}, to:{transform:'translateX(-50%)'} },
        'marquee-rev':   { from:{transform:'translateX(-50%)'}, to:{transform:'translateX(0)'} },
      },
    },
  },
  plugins: [],
}
