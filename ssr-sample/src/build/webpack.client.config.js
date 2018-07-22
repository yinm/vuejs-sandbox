const webpack = require('webpack')
const base = require('./webpack.base.config')
const HTMLPlugin = require('html-webpack-plugin')

const config = Object.assign({}, base, {
  plugins: (base.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env.VUE_ENV': '"client"'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HTMLPlugin({
      template: 'src/index.template.html'
    })
  ])
})

module.exports = config
