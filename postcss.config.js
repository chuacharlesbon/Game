module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
    autoprefixer: {},
  },
  theme: {
    extend: {
      screens: {
      phone: '0px',
      medium: '768px',
      tablet: '800px',
      tabletWide: '1000px',
      laptop: '1500px',
      desktop: '1880px',
    }
    }
  },
}
