const helpers = require("./helpers");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  entry: helpers.root('src/main.ts'),
  output: {
    path: helpers.root( 'dist'),
    filename: 'bundle.min.js',
  },
  devServer: {
    port: 5000,
    contentBase: helpers.root( 'dist'),
    compress: true
  },
  // devServer: {
  //   historyApiFallback: true,
  //   stats: 'minimal',
  //   watchContentBase: true,
  // },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      // {
      //   test: /\.tsx?$/,
      //   loaders: [
      //     'babel-loader',
      //     {
      //       loader: 'awesome-typescript-loader',
      //       options: {
      //         configFileName: helpers.root('tsconfig.json')
      //       }
      //     },
      //     'angular2-template-loader',
      //     'angular-router-loader'
      //   ],
      //   exclude: [/node_modules/]
      // },
      {
        test: /\.(scss|sass)$/,
        use: [
          'to-string-loader',
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
        ],

      },
      { test: /\.tsx?$/,exclude: /node_modules/, loader: "ts-loader" },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limite: 15000
            }
          }
        ]
      }
    ]
  },
  // devtool: "eval-cheap-module-source-map",
  plugins: [
    // new CleanWebpackPlugin(
    //   {
    //     verbose: true,
    //     cleanStaleWebpackAssets: true,
    //     protectWebpackAssets: true
    //   }
    // ),
    // new HtmlWebpackPlugin({
    //   template: helpers.root('src/index.html')
    // })
  ]
};
