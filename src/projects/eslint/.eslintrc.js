module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'standard',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': [
      'error',
      {
        arrays: 'multiline',
        objects: 'multiline',
        imports: 'multiline',
        exports: 'multiline',
        functions: 'ignore',
      },
    ],
    'keyword-spacing': ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'semi': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
  },
};
