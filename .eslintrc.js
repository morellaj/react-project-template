module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: "babel-eslint",
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': "off",
    "import/named" : "off",
    "strict":0,
    "react/prop-types":"off",
    'max-len': 'off',
    'radix': 'off',
    'comma-dangle': 'off',
    'quote-props' : 'off',
    'quotes' : 'off',
    'object-curly-newline': 'off',
    'import/order': 'off',
    'import/first': 'off',
    'import/newline-after-import': 'off'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['Colors', './src/data/colors.json'],
        ]
      }
    }
  },

};