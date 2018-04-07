const jest = require('jest');

const argv = process.argv.slice(2);

const Env = require('./environment-variables')

// Inject defaults for environment variables
Env.initEnvironment({
    ENVIRONMENT: 'test'
})

// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0) {
    argv.push('--watch');
}

jest.run(argv);