/**
 * https://eslint.org/docs/latest/developer-guide/shareable-configs
 */
 module.exports = {
  // parser: '@typescript-eslint/parser',
  "parserOptions": {
    // ecmaVersion: 2020,
    "project": "./tsconfig.json"
  },
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
    mocha: true,
    jasmine: true,
    jest: true
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:node/recommended',
    'plugin:n/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
  // settings: {
  //   node: {
  //     tryExtensions: ['.js', '.json', '.node', '.ts', '.tsx']
  //   },
  //   react: {
  //     version: 'detect'
  //   },
  //   'import/parsers': {
  //     '@typescript-eslint/parser': ['.ts', '.tsx']
  //   },
  //   'import/resolver': {
  //     typescript: {
  //       project: ['tsconfig.json', 'packages/*/tsconfig.json']
  //     },
  //     node: {
  //       project: ['tsconfig.json', 'packages/*/tsconfig.json']
  //     }
  //   }
  // },
  // overrides: [
  //   {
  //     files: ['*.ts', '*.tsx'],
  //     parserOptions: {
  //       tsconfigRootDir: process.cwd(),
  //       project: ['./tsconfig.json', './packages/*/tsconfig.json']
  //     },
  //     extends: [
  //     ],
  //     rules: {
  //       '@typescript-eslint/no-unused-vars': 'warn',
  //       '@typescript-eslint/no-unsafe-assignment': 'warn',
  //       '@typescript-eslint/no-unsafe-call': 'warn',
  //       '@typescript-eslint/no-unsafe-return': 'warn',
  //       '@typescript-eslint/no-unsafe-member-access': 'warn'
  //     }
  //   },
  //   {
  //     files: ['test/**', '*.spec.{js,ts}'],
  //     plugins: ['jest'],
  //     extends: ['plugin:jest/recommended'],
  //     rules: { 'jest/prefer-expect-assertions': 'off' }
  //   }
  // ],
  ignorePatterns: ['dist', 'node_modules', '**/{public,lib,libs}/**/*.js']
}
