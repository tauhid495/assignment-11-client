module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        'hotpink': '#d00a2b',
        'base-black': '#14212b',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
