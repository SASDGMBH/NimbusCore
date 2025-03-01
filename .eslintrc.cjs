export default {
  env: {
    browser: false,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    eqeqeq: ['error', 'always'],
    curly: ['error', 'all'],
    'no-unused-vars': ['warn'],
    strict: ['error', 'global'],
  },
};
