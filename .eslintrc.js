module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier', // eslint-config-prettier 8 以后的写法
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  rules: {
    'no-unused-vars': 'off',
    /* Note: While it is possible to pass options to Prettier via your ESLint configuration file,
     it is not recommended because editor extensions such as prettier-atom and prettier-vscode will read .prettierrc,
     but won't read settings from ESLint, which can lead to an inconsistent experience. */
    // This option will merge and override any config set with .prettierrc.* files
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'typescript',
        endOfLine: 'lf',
      },
    ],
  },
}
