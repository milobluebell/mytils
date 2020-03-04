module.exports = {
  extends: ['./node_modules/@mlz/lint/ts-eslintrc.js', 'airbnb', 'prettier'],
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      version: '16.9',
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'markdown', 'react', 'prettier', 'react-hooks'],
};
