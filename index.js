module.exports = {
  extends: ['eslint:recommended', 'airbnb-base'],
  env: {
    // common environments for current hearst apps
    // feel free to override
    jquery: true,
  },
  globals: {
    sinon: true,
  },
  rules: {
    // override for prettier
    'function-paren-newline': 'off',

    // hearst specific
    // TODO: add js-doc rules & fixes
    'no-bitwise': ['error', { allow: ['~'] }], // allow ~ for integer casting
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
        'no-console': 'off',
        'func-names': 'off',
        'prefer-arrow-callback': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-expressions': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
