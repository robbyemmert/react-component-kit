const serve = require('webpack-serve')

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

serve({ config })
.then(server => server.on('listening', () => {
    console.log(`Webpack Dev Server running at http://${settings.devServerHost}:${settings.devServerPort}`)
    if(settings.clipboard) {
        console.log('Copied the URL to the clipboard')
    }
}))
.catch(error => console.error('There was an error starting the server', error))
