const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  context: path.join(__dirname, 'src/'),
  devtool: '#inline-source-map',
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html'
  })]
}
module.exports = config
