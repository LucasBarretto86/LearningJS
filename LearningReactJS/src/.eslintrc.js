module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
  },
  globals: {
    process: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  plugins: ['react'],
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
    'jsx-quotes': ['error', 'single'],
    'keyword-spacing': ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'warn',
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'quote-props': ['error', 'consistent'],
    'react/prop-types': ['off'],
    semi: ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'no-restricted-modules': [
      'error',
      {
        paths: ['config/webpack'],
      },
    ],
  },
};
