const paths = require('./paths')

exports.supportedExtensions = [
    '.tsx',
    '.ts',
    '.js',
    '.jsx',
    '.scss',
    '.css'
]

exports.fileNames = {
    jsBundle: 'index.js',
    styleBundle: 'index.css',
}

exports.devServerSettings = {
    hot: true,
    publicPath: paths.exampleRoot,
    stats: { color: true },
    inline: true,
    historyApiFallback: {
        disableDotRule: true
    }
}

exports.devServerPort = 8080
exports.devServerHost = 'localhost'