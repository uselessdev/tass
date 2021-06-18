module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        techlidies: 'url(/images/techlidies.svg)',
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
