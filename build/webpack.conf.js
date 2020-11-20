var path = require('path')

module.exports = {
  entry: [
    './src'
  ],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'vue-facebook-pixel.js',
    libraryTarget: 'umd'
  },
  eslint: {
    configFile: '.eslintrc.js',
    formatter: require('eslint-friendly-formatter')
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2']
        },
        exclude: /node_modules/
      }
    ]
  }
}
