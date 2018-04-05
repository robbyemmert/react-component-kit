const path = require('path')
const paths = require('./paths')

module.exports = {
    entry: paths.libRoot,
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js',
            '.scss',
            '.css'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: paths.outputDirectory
    }
}