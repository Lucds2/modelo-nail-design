/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          black: '#0A0A0B',
          dark: '#121215',
          card: '#1A1A1E',
          gold: '#D4AF37',
          'gold-light': '#F3E5AB',
          muted: '#8E8E93',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}