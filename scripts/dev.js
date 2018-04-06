const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')

const webpackConfig = require('../config/webpack.config.dev')
const paths = require('../config/paths')
const settings = require('../config/settings')

const Env = require('./environment-variables')

Env.initEnvironment({
    ENVIRONMENT: 'development'
})

const config = {
    mode: process.env.ENVIRONMENT,
    ...webpackConfig
}

console.log('Starting dev server...')

const compiler = webpack(config)
const server = express()
server.use(webpackMiddleware(compiler, {
    ...webpackConfig
}))
server.use(webpackHotMiddleware(compiler))

server.listen(settings.devServerPort, settings.devServerHost, () => {
    console.log(`Webpack Dev Server running at http://${settings.devServerHost}:${settings.devServerPort}`)
})
