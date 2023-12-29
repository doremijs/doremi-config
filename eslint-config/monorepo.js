/**
 * https://eslint.org/docs/latest/developer-guide/shareable-configs
 */
const createEslintConfig = require('./config')
module.exports = createEslintConfig([
  './tsconfig.eslint.json',
  './packages/*/tsconfig.json'
])
