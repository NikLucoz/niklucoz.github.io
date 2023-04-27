/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      'sm': {'max': '667px'},
      // => @media (min-width: 640px) { ... }

      'md': {'max': '767px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'max': '1023px'},

      // => @media (min-width: 1024px) { ... }

      'xl': {'max': '1279px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': {'max': '1535px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero.png')",
      }
    },
  },
  plugins: [],
}
