# eslint-config-hearst

This package provides a consistent ESLint configuration for Hearst Projects. It
uses a combination of [airbnb](https://github.com/airbnb/javascript) &
[Prettier](https://prettier.io/).

Using the combination is the ideal solution. While it adds more dependencies, it
covers many more scenarios. Prettier is much less overarching (it doesn't care
about a lot of eslints "code quality" rules, just formatting rules ... see this
doc https://prettier.io/docs/en/comparison.html).

There are conflicting rules between Prettier's defaults (double quotes, no
trailing commas) that are overridden here in order to fall in line with airbnb.
HOWEVER where Prettier really shines is their ability to format/fix lines that
are greater than 80 columns in an extremely consistant way, and its ability to
autofix a lot of issues that eslint doesn't handle yet.

## Install

```sh
yarn add --dev eslint eslint-config-hearst
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
