module.exports = {
  env: {
    browser: true,
    es2020: true,
    'jest/globals': true
  },
  extends: [
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jest'
  ],
  rules: {
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}