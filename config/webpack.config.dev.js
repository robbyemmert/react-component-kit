const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

const paths = require('./paths')
const settings = require('./settings')
const package = require('../package.json')

module.exports = {
    entry: [
        paths.exampleRoot,
        'webpack-hot-middleware/client?reload=true'
    ],
    devtool: 'inline-source-map',
    stats: 'normal',
    module: {
        rules: [
            {
                test: /\.html?$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        onlyCompileBundledFiles: true
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.resolve(__dirname, "./lib")]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: settings.supportedExtensions,
        alias: {
            [package.name]: paths.libRoot
        }
    },
    output: {
        filename: settings.fileNames.jsBundle,
        path: paths.exampleOutputDirectory,
        publicPath: '/'
    }
}