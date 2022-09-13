/**
 * @type import('stylelint').Config
 * @link https://stylelint.io/user-guide/configure
 */
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
    'stylelint-no-unsupported-browser-features',
    'stylelint-config-standard-scss'
  ],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'no-descending-specificity': null,
    'function-url-quotes': 'always',
    'font-family-no-missing-generic-family-keyword': null, // iconfont
    'plugin/declaration-block-no-ignored-properties': true,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'selector-type-no-unknown': [
      true,
      {
        // 需要忽略的特定的选择器
        ignoreTypes: ['page'],
      },
    ],
    // 'unit-allowed-list': []
  },
  ignoreFiles: ['**/*.{js,jsx,ts,tsx}', '{public,dist,libs}/**/*.*'],
  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
      rules: {
        'at-rule-no-unknown': null
      },
    },
    {
      files: ['**/*.module.{css,less,scss}'],
      rules: {
        'selector-class-pattern': '^[a-zA-Z0-9-]+$'
      }
    }
  ],
}
