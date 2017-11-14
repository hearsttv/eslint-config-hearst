module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    // prettier config override's any conflicting rules in airbnb's config
    'prettier',
  ],
  env: {
    // common environments for current hearst apps
    // feel free to override
    amd: true,
    jasmine: true,
    jquery: true,
    mocha: true,
  },
  globals: {
    sinon: true,
  },
  // when running `eslint --fix` this plugin steps in and runs prettier on the
  // code first, then it runs `eslint --fix`
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        // override prettier's default rules that we want to line up with airbnb
        // instead. airbnb style should be followed as closely as possible.
        // We're leveraging the added formatting power of prettier rather than
        // rules like this.
        bracketSpacing: true,
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
      },
    ],

    // hearst specific
    'import/no-amd': 'off', // allow amd
    'no-bitwise': ['error', { allow: ['~'] }], // allow ~ for integer casting
  },
  overrides: [
    {
      // add a common override assuming test files are in `/test` dir
      // and that the application is using chai's assertion library.
      // allows test statements like `expect(foo).to.be.null;` to pass
      files: ['test/**/*.js'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
};
