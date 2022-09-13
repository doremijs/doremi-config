# Doremi configuration for workspace

## Shared configurations
- @doremijs/prettier-config
- @doremijs/eslint-config
- @doremijs/stylelint-config

## Simple usage

```json5
# package.json
{
  // ...rest
  "prettier": "@doremijs/prettier-config",
  "eslintConfig": {
    "root": true,
    "extends": "@doremijs"
  },
  "stylelint": {
    "extends": "@doremijs/stylelint-config"
  }
}
```
