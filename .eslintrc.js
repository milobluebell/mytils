module.exports = {
  extends: ['./node_modules/@mlz/lint/ts-eslintrc.js', 'airbnb', 'prettier'],
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'markdown', 'prettier'],
};
