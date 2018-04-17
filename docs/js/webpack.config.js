const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

const config = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          compress: {
  					ie8: true,
  					warnings: false
  				},
  				mangle: {
  					ie8: true
  				},
  				output: {
  					comments: false,
  					ie8: true
  				}
        }
      })
    ]
  },
  entry: 'main.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // env preset is used to avoid getters/setters in Object.defineProperty
            // since this cannot be polyfilled
            // es3 preset is used to avoid keywords such as 'catch' which will break execution
            // in IE8
            presets: ['env', 'es3']
          }
        }
      }
    ]
  },
  output: {
    // output path (e.g. /js/)
    path: './js/',
    filename: '[name]/[name].js', // For example, button/button.js
    library: 'govuk-frontend',
    libraryTarget: 'umd',
    umdNamedDefine: true, // Allows RequireJS to reference `govuk-frontend`
    sourceMapFilename: '[name]/[name].js.map'
  }
}

module.exports = config
