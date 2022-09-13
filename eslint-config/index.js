/**
 * https://eslint.org/docs/latest/developer-guide/shareable-configs
 */
 module.exports = {
  parser: '@typescript-eslint/parser',
  "parserOptions": {
    ecmaVersion: 2020,
    "project": "./tsconfig.json"
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
    'plugin:node/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'unused-imports/no-unused-imports': 'warn',
    'node/no-unpublished-import': 'off',
    'import/no-unresolved': 'error',
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
  settings: {
    node: {
      tryExtensions: ['.js', '.json', '.node', '.ts', '.tsx']
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json', 'packages/*/tsconfig.json']
      },
      node: {
        project: ['tsconfig.json', 'packages/*/tsconfig.json']
      }
    }
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json', './packages/*/tsconfig.json']
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn'
      }
    },
    {
      files: ['test/**', '*.spec.{js,ts}'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'jest/prefer-expect-assertions': 'off' }
    }
  ],
  ignorePatterns: ['dist', 'node_modules', 'public', 'lib', 'libs']
}
