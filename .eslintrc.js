export default {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
  parser: 'eslint-parser',
  // parserOptions: {
  //   sourceType: 'module',
  //   allowImportExportEverywhere: false,
  //   ecmaFeatures: {
  //     globalReturn: false,
  //   },
  //   babelOptions: {
  //     configFile: 'path/to/config.js',
  //   },
  // },
};
