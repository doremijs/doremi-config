/**
 * https://eslint.org/docs/latest/developer-guide/shareable-configs
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    tsconfigRootDir: process.cwd(),
    project: ['./tsconfig.json', './packages/*/tsconfig.json']
  },
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
    mocha: true,
    jasmine: true,
    'jest/globals': true
  },
  plugins: ['@typescript-eslint', 'unused-imports', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:node/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        alphabetize: {
          order: 'asc'
        }
      }
    ]
  },
  overrides: [
    {
      files: ['test/**', '*.spec.{js,ts}'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'jest/prefer-expect-assertions': 'off' },
    },
  ],
}
