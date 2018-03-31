const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
      // entry point of our app
      entry: './src/app.js',
      // output file containing all our js code
      output: {
          path: path.join(__dirname, 'public', 'dist'),
          filename: 'bundle.js'
      },
      module: {
          // different rules for webpack
          rules: [
              // rule for using babel to compile js files
              {
                  loader: 'babel-loader',
                  test: /\.js$/,
                  exclude: /node_modules/
              },
              // rule for serving css and scss files
              {
                  test: /\.s?css$/,
                  use: CSSExtract.extract({
                      use: [
                          {
                              loader: 'css-loader',
                              options: {
                                  sourceMap: true
                              }
                          },
                          {
                              loader: 'sass-loader',
                              options: {
                                  sourceMap: true
                              }
                          }
                      ]
                  })
              }
          ]
      },
      plugins: [
          CSSExtract
      ],
      // source map to efficiently track errors in devTools browser console
      devtool: isProduction ? 'source-map' : 'inline-source-map',
      // development server specific to webpack
      devServer: {
          contentBase: path.join(__dirname, 'public'),
          historyApiFallback: true,
          publicPath: '/dist/'
      }
  }
};
