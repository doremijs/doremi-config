const origin = require('./index')
const monorepo = JSON.parse(JSON.stringify(origin))
monorepo.overrides[0].parserOptions.project = [
  './tsconfig.eslint.json',
  './packages/*/tsconfig.json'
]

/**
 * https://eslint.org/docs/latest/developer-guide/shareable-configs
 */
module.exports = monorepo
