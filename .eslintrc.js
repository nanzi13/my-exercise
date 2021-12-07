const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/extensions': [
      ERROR,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        json: 'never',
        js: 'never',
      },
    ],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    // 'sort-imports': ['error'],
    '@typescript-eslint/no-var-requires': OFF,
    'react/jsx-filename-extension': [ERROR, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/function-component-definition':OFF,
    'arrow-body-style': ['error', 'always'],
  },
}
