const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const autoPrecixer = require('autoprefixer');
const cssNano = require('cssnano');
const postCssPresetEnv = require('postcss-preset-env');
const postcssCustomMedia = require('postcss-custom-media');
const minmax = require('postcss-media-minmax');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
module.exports = () => {
  return ({

    mode: 'development',
    entry: path.resolve(__dirname, 'src/index'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'script/[name].bundle.js'
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      stats: 'errors-only',

      port: 5000,

      // CopyWebpackPlugin: This is required for webpack-dev-server.
      // The path should be an absolute path to your build destination.
      contentBase: path.join(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            { loader: 'cache-loader' },
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true
              }
            }
          ]

        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
                url: true,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss-2',
                sourceMap: true,
                plugins: [
                  autoPrecixer(),
                  cssNano()
                ]
              }
            },
            {
              loader: 'sass-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                sourceMap:true,
                plugins: [
                  postCssPresetEnv(),
                  postcssCustomMedia(),
                  minmax()
                ]
              }
            },
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[hash].[ext]',
                context: path.resolve(__dirname, 'public/assets/images/'),
                outputPath: 'assets/images',
                publicPath: '/assets/images',
                useRelativePath: true
              }
            }
          ]
        },
        {
          test: /\.ico$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                context: path.resolve(__dirname, 'public/assets/images/'),
                outputPath: 'assets/images',
                publicPath: '/assets/images',
                useRelativePath: true
              }
            }
          ]
        },
        {
          test: /\.(svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 25000
              }
            }
          ]
        },
        {
          test: /\.(pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[hash].[ext]',
                context: path.resolve(__dirname, 'public/assets/files/'),
                outputPath: 'assets/elections',
                publicPath: '/assets/elections',
                useRelativePath: true
              }
            }
          ]
        },
        {
          test: /\.(woff2?|otf|ttf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[hash].[ext]',
                context: path.resolve(__dirname, 'public/assets/fonts/'),
                outputPath: 'assets/fonts',
                publicPath: '/assets/fonts',
                useRelativePath: true
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.scss', '.jsx', '.sass', '.css']
    },
    plugins: [
      new HardSourceWebpackPlugin(),
      new CleanWebpackPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        popper: 'popper.js'

      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        title: 'Jollie Bridal'
      })
    ],
    devtool: 'eval-source-map'
  })
};
