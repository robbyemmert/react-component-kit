const webpack = require('webpack')

const config = require('../config/webpack.config.prod')
const paths = require('../config/paths')
const Env = require('./environment-variables')

Env.initEnvironment({
    ENVIRONMENT: 'production'
})

console.log('Compiling to output folder...')

webpack({
    mode: process.env.ENVIRONMENT,
    ...config
}, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.error('There was an error compiling the output', err && err.message)
        console.error(stats && stats.toString({
            color: true
        }))
    } else {
        console.log(`Wrote output to ${paths.outputDirectory}`)
    }
    console.log('Finished.')
})