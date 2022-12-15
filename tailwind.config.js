const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Ubuntu', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}