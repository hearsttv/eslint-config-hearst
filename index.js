module.exports = {
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  env: {
    // common environments for current hearst apps
    // feel free to override
    jquery: true,
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
        singleQuote: true,
        trailingComma: 'all',
      },
    ],

    // hearst specific
    'no-bitwise': ['error', { allow: ['~'] }], // allow ~ for integer casting
    'valid-jsdoc': 'error',
    'require-jsdoc': 'warn',
  },
  overrides: [
    {
      // add a common override assuming test files are in `/test` dir
      // and that the application is using chai's assertion library.
      // allows test statements like `expect(foo).to.be.null;` to pass
      env: {
        jasmine: true,
        mocha: true,
      },
      files: ['test/**/*.js'],
      rules: {
        'func-names': 'off',
        'prefer-arrow-callback': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-expressions': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
