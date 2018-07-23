const webpack = require('webpack')
const base = require('./webpack.base.config')
const HTMLPlugin = require('html-webpack-plugin')

const config = Object.assign({}, base, {
  resolve: {
    alias: Object.assign({}, base.resolve.alias, {
      'create-api': './create-api-client.js'
    })
  },
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
