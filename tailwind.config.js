const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Ubuntu', ...defaultTheme.fontFamily.sans],
      }
    },
    backgroundImage: {
      'sidebar': "url('../public/assets/bg-sidebar-desktop.svg')",
    }
  },
  plugins: [],
}