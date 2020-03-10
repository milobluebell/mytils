module.exports = {
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'markdown', 'prettier',],
};
