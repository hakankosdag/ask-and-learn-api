module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['google'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'object-curly-spacing': 0,
    'indent': ['error', 2],
  },
};
