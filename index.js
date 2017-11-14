module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    // prettier config overwrites any conflicting rules in airbnb's config
    'prettier',
  ],
  env: {
    // common environments for current hearst apps
    // feel free to overwrite
    amd: true,
    jasmine: true,
    jquery: true,
    mocha: true,
  },
  globals: {
    sinon: true,
  },
  plugins: [
    'prettier'
  ],
  rules: {
    'prettier/prettier': ['error', {
      // certain rules that we want to line up with airbnb we specify here
      bracketSpacing: true,
      singleQuote: true,
      semi: true,
      trailingComma: 'all',
    }],

    // hearst specific
    'import/no-amd': 'off', // allow amd
    'no-bitwise': ['error', { allow: ['~'] }], // allow ~ bitwise char, for int casting
  },
  overrides: [
    {
      files: [ "tester/**/*.js" ],
      rules: {
        // allow test statements like `expect(grid.foo).to.be.null;` to pass
        'no-unused-expressions': 'off',
      }
    }
  ],
};
