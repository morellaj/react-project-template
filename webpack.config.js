const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const { GenerateSW } = require('workbox-webpack-plugin');
// const SentryCliPlugin = require('@sentry/webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


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
      Character: path.join(__dirname, 'src/data/character.json'),
      Data: path.join(__dirname, 'src/data/'),
      Common: path.join(__dirname, 'src/components/common/'),
      Footer: path.join(__dirname, 'src/components/common/Footer.jsx'),
      Icon: path.join(__dirname, 'src/components/common/Icon.jsx'),
      Head: path.join(__dirname, 'src/components/common/Head.jsx'),
      Navbar: path.join(__dirname, 'src/components/common/Navbar.jsx'),
      SocialIcon: path.join(__dirname, 'src/components/common/SocialIcon.jsx'),
      Styles: path.join(__dirname, 'src/components/common/Styles.jsx'),
      Error: path.join(__dirname, 'src/components/common/Error.jsx'),
      Constants: path.join(__dirname, 'src/data/constants.js'),
      Actions: path.join(__dirname, 'src/redux/actions.js'),
      Assets: path.join(__dirname, 'assets/'),
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
    // new GenerateSW(),
    new CopyPlugin([
      { from: 'assets', to: 'assets' },
      { from: '_redirects', to: '_redirects', toType: 'file' },
      { from: 'robots.txt', to: 'robots.txt', toType: 'file' },
      { from: 'sitemap.xml', to: 'sitemap.xml', toType: 'file' },
      { from: 'netlify.toml', to: 'netlify.toml', toType: 'file' },
    ]),
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
};
