module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
  },
};
