# eslint-config-hearst

This package provides a consistent ESLint configuration for Hearst Projects. It
extends from [airbnb's configuration](https://github.com/airbnb/javascript).

## Install

```sh
yarn add --dev eslint
```

then add the following to your `package.json`:

```json
"devDependencies": {
  "eslint-config-hearst": "git+ssh://git@github.com:Hearst-Hatchery/eslint-config-hearst.git#<version>",
}
```

## Usage

**Example `.eslintrc.yml`**
```yml
extends: hearst
# now you can override what you need to for your project
env:
  node: true
rules:
  no-undefined: error
```

## Overrides

By default the `hearst` config specifies some overrides for test files. It
assumes test files are in `/test` directory and turns off some problematic rules
that are typically broken in tests:

```js
'func-names': 'off',
'prefer-arrow-callback': 'off',
'no-underscore-dangle': 'off',
'no-unused-expressions': 'off',
'import/no-extraneous-dependencies': 'off',
```

The test override also exposes jasmine & mocha globals by default.
