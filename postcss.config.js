
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')
const postcssNested = require('postcss-nested')
const postcssAdvancedVariables = require('postcss-advanced-variables')

let plugins = [postcssImport, postcssNested, postcssAdvancedVariables]

if (process.env.NODE_ENV === 'production') {
  plugins = [
    ...plugins,
    autoprefixer,
    cssnano({
      preset: 'advanced',
    }),
  ]
}

module.exports = {
  plugins,
}
