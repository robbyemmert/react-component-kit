const fs = require('fs')
const path = require('path')
const settings = require('./settings')

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    libRoot: resolveApp('lib/index.ts'),
    exampleRoot: resolveApp('example'),
    exampleOutputDirectory: resolveApp('example-dist'),
    outputDirectory: resolveApp('dist'),
    dotEnvFile: resolveApp('.env'),
    exampleHtmlTemplate: resolveApp('example/index.html')
}