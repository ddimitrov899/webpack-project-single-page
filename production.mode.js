const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const glob = require('glob-all');
const webpack = require('webpack');
const autoPrecixer = require('autoprefixer');
const cssNano = require('cssnano');
const postCssPresetEnv = require('postcss-preset-env');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const Critters = require('critters-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = () => {
  return ({

    mode: 'production',
    entry: path.resolve(__dirname, 'src/index'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    optimization: {

      minimize: true,
      minimizer: [
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
          exclude: /node_modules/,
          cache: true,
          parallel: true,
          terserOptions: {
            warnings: true,
            output: {
              comments: false
            }
          }
        })
      ],
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(sa|sc|c)ss$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
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
          use: ['babel-loader']

        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                ignoreOrder: true,
                sourceMap: true,
                publicPath: (resourcePath, context) => {
                  // publicPath is the relative path of the resource to the context
                  // e.g. for ./css/admin/main.css the publicPath will be ../../
                  // while for ./css/main.css the publicPath will be ../
                  return path.relative(path.dirname(resourcePath), context) + '/'
                }
              }
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss-2',
                minimize: true,
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
                plugins: [
                  postCssPresetEnv()
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
      new CleanWebpackPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        popper: 'popper.js'

      }),
      new PurgeCSSPlugin({
        paths: glob.sync(`${path.resolve(__dirname, 'src')}/**/*`, { nodir: true })
      }),
      new MiniCssExtractPlugin({
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        title: 'Jollie Bridal'
      }),
      new Critters({
        preload: 'swap'
      })
    ]
  })
};
