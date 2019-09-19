const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const path = require('path');
const glob = require('glob-all');
const webpack = require('webpack')
const autoPrecixer = require('autoprefixer');
const cssNano = require('cssnano');
const postCssPresetEnv = require('postcss-preset-env');

const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const PurgecssPluagin = require('purgecss-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Critters = require('critters-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.(sa|sc|c)ss$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: ["babel-loader"]

            },
            {
                test: /\.(sa|sc|c)ss$/i,
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
                            minimize: true,
                            plugins: [
                                autoPrecixer(),
                                cssNano()
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss-1',
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
                test: /\.(ico|svg)$/,
                use: [
                    {
                        loader: "url-loader",
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
                        loader: "file-loader",
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
                        loader: "file-loader",
                        options: {
                            name: '[hash].[ext]',
                            context: path.resolve(__dirname, 'public/assets/fonts/'),
                            outputPath: 'assets/fonts',
                            publicPath: '/assets/fonts',
                            useRelativePath: true
                        }
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss', '.jsx', ".sass", ".css"]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            popper: 'popper.js'

        }),
        new PurgecssPluagin({
            paths: glob.sync(`${path.resolve(__dirname, 'src')}/**/*`, {nodir: true}),
        }),

        new MiniCssExtractPlugin({
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] },
            files: ['./dist/*', '**/*.html']
        }),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            title: "Jollie Bridal",
        }),
        new Critters({
            preload: 'swap'
        }),
    ],
    watch: true,
    devtool: "cheap-source-map"
};
