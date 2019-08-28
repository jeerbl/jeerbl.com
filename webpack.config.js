const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: devMode ? 'development' : 'production',
  context: __dirname,
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'app.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
      hash: true,
      cache: false,
      minify: {
        html5: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        caseSensitive: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'app.[contenthash].css'
    }),
    new OptimizeCSSAssetsPlugin()
  ],
  optimization: {
    minimizer: [new TerserPlugin()]
  },
}
