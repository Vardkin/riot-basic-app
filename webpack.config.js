const path           = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env']
        }
      },
      {
        test: /\.tag$/,
        loader: 'tag-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      //...
    })
  ]
}
