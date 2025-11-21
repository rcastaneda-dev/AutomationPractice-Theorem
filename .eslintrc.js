module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['import'],
  globals: {
    fixture: 'readonly',
    test: 'readonly',
  },
  rules: {
    'no-console': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_|^t$' }],
    'max-len': ['warn', { code: 120, ignoreComments: true }],
    'no-await-in-loop': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': ['error', { allow: ['t'] }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'max-classes-per-file': 'off',
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    // Disable rules that conflict with Prettier
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@pages', './src/pages'],
          ['@pageActions', './src/pages/pageActions'],
          ['@tests', './tests'],
          ['@config', './config'],
          ['@constants', './src/constants'],
          ['@utils', './src/utils'],
          ['@fixtures', './src/fixtures'],
        ],
        extensions: ['.js', '.json'],
      },
    },
  },
};
