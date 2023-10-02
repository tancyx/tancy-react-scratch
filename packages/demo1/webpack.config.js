const path = require('path')
const webpack = require('webpack')
const babel = require('../../babel.config')

module.exports = {
  entry: './src/index.tsx', // our entry point, as mentioned earlier
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/, // matches .js, .ts, and .tsx files
        loader: 'babel-loader', // uses babel-loader for the specified file types (no ts-loader needed)
        exclude: /node_modules/,
        options: {
          presets: babel.presets,
        },
      },
      {
        test: /\.css$/, // matches .css files only (i.e. not .scss, etc)
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // our output bundle
    publicPath: '/',
  },
  devServer: {
    // 这是 webpack5 的配置写法，之前的版本稍有不同注意区分
    static: {
      directory: path.join(__dirname, 'public'), // Tell the server where to serve the content from. This is only necessary if you want to serve static files.
      publicPath: '/', // Tell the server at which URL to serve {static.directory} content.
    },
    port: 3000,
    hot: false,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()], // used for hot reloading when developing
  devtool: 'eval-source-map', // builds high quality source maps
}
