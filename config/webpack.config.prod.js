const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const paths = require('./paths')
const settings = require('./settings')

module.exports = {
    entry: paths.libRoot,
    devtool: 'inline-source-map',
    stats: 'normal',
    module: {
        rules: [
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
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
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(settings.fileNames.styleBundle)
    ],
    resolve: {
        extensions: settings.supportedExtensions
    },
    output: {
        filename: settings.fileNames.jsBundle,
        path: paths.outputDirectory
    }
}