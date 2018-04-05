const dotenv = require('dotenv')
const paths = require('../config/paths')

const isEmpty = val => val === undefined || val === null

const defaultEnvVar = (varName, defaultValue) => {
    const currentVal = process.env[varName]
    if (isEmpty(currentVal)) {
        process.env[varName] = defaultValue
    }
}

exports.initEnvironment = (defaults) => {
    dotenv.config({
        path: paths.dotEnvFile
    })

    Object.keys(defaults).forEach(varName => defaultEnvVar(varName, defaults[varName]))
}
