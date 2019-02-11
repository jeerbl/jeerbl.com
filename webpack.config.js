const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

module.exports = {
  context: __dirname,
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    hot: true,
    https: true,
    inline: true,
    port: '8080'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inlineSource: '.(css)$'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
}
