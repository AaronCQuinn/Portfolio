module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '424px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
    fontFamily: {
      'poppins': ['Poppins']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}