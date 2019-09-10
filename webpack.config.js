const glob = require('glob');
const path = require('path');

const autoPrecixer = require('autoprefixer');
const cssNano = require('cssnano');
const postCssPresetEnv = require('postcss-preset-env');

const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPluagin = require('purgecss-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Critters = require('critters-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: path.resolve(__dirname, './src/scripts/views/index')
  },
  output: {
    filename: 'scripts/[name].min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 5000,
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{loader: "babel-loader"}]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss-2',
              sourceMap: true,
              minimize: true,
              plugins: [
                autoPrecixer(),
                cssNano()
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss-1',
              sourceMap: true,
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
            loader: "file-loader",
            options: {
              name: '[contenthash].[ext]',
              context: path.resolve(__dirname, 'src/assets/images/'),
              outputPath: 'assets/images',
              publicPath: '../images',
              useRelativePath: true
            }
          }
        ]
      },
      {
        test: /\.(woff2?)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[contenthash].[ext]',
              context: path.resolve(__dirname, 'src/assets/fonts/'),
              outputPath: 'assets/fonts',
              publicPath: '../fonts',
              useRelativePath: true
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new PurgecssPluagin({
      paths: glob.sync(`${path.resolve(__dirname, 'src')}/**/*`, {nodir: true}),
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].min.css'
    }),
    // new CopyPlugin([
    //   {
    //     from: path.resolve(__dirname, 'src', 'archtecture.md'),
    //     to: path.resolve(__dirname, 'dist')
    //   }
    // ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/views/index.html'),
      title: 'Home'
    }),
    new Critters({
      preload: 'swap'
    })
  ]
};
