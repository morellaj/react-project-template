const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: '[name][chunkhash:4].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      Colors: path.join(__dirname, 'src/data/colors.json'),
    },
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(pdf|png|svg|jpg|gif|woff(2)?|ttf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|webp)$/,
        use: [
          'webp-loader',
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
    }),
    new CopyPlugin([
      { from: 'assets', to: 'assets' },
      { from: '_redirects', to: '_redirects', toType: 'file' },
      { from: 'robots.txt', to: 'robots.txt', toType: 'file' },
    ]),
    new CleanWebpackPlugin(),
  ],
};
