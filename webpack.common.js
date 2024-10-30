const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    poster: './src/poster.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Landing page
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/izbushka-na-kurih-nozhkah.html',
      filename: './izbushka-na-kurih-nozhkah.html',
      chunks: ['poster']
    }),
    new HtmlWebpackPlugin({
      template: './src/katakomby.html',
      filename: './katakomby.html',
      chunks: ['poster']
    }),
    new HtmlWebpackPlugin({
      template: './src/limozh-rynok.html',
      filename: './limozh-rynok.html',
      chunks: ['poster']
    }),
    new HtmlWebpackPlugin({
      template: './src/skot.html',
      filename: './skot.html',
      chunks: ['poster']
    }),
    new HtmlWebpackPlugin({
      template: './src/staryj-zamok-1.html',
      filename: './staryj-zamok-1.html',
      chunks: ['poster']
    }),
    new HtmlWebpackPlugin({
      template: './src/staryj-zamok-2.html',
      filename: './staryj-zamok-2.html',
      chunks: ['poster']
    }),
    new HtmlWebpackPlugin({
      template: './src/tyuilrijskij-sad.html',
      filename: './tyuilrijskij-sad.html',
      chunks: ['poster']
    }),
    new HtmlWebpackPlugin({
      template: './src/balet-nevylupivshihsya-ptencov.html',
      filename: './balet-nevylupivshihsya-ptencov.html',
      chunks: ['poster']
    }),
    new HtmlWebpackPlugin({
      template: './src/bogatyrskie-vorota.html',
      filename: './bogatyrskie-vorota.html',
      chunks: ['poster']
    }),
    new HtmlWebpackPlugin({
      template: './src/dva-evreya-bogatyj-i-bednyj.html',
      filename: './dva-evreya-bogatyj-i-bednyj.html',
      chunks: ['poster']
    }),
    new HtmlWebpackPlugin({
      template: './src/gnom.html',
      filename: './gnom.html',
      chunks: ['poster']
    }),

    //Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/header.html'),
        location: 'header',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
