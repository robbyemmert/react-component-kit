const fs = require('fs')
const path = require('path')
const settings = require('./settings')

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    libRoot: resolveApp('lib/index.ts'),
    outputDirectory: resolveApp('dist'),
    dotEnvFile: resolveApp('.env')
}