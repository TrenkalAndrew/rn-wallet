module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'plugin:react-hooks/recommended',
    '@react-native-community',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js', 'babel.config.js', 'metro.config.js'],
  plugins: ['@typescript-eslint', 'react', 'react-native', 'prettier'],
  overrides: [{ files: ['*.tsx'], rules: { 'no-undef': 'off' } }],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  globals: {
    __DEV__: false,
    jasmine: false,
    beforeAll: false,
    afterAll: false,
    beforeEach: false,
    afterEach: false,
    test: false,
    expect: false,
    describe: false,
    jest: false,
    it: false,
  },
  rules: {
    'prettier/prettier': ['error'],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-shadow': 'off',
  },
}
