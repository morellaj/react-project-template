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
          ['Character', './src/data/character.json'],
          ['Data', './src/data/'],
          ['Common', './src/components/common/'],
          ['Footer', './src/components/common/Footer.jsx'],
          ['Icon', './src/components/common/Icon.jsx'],
          ['Navbar', './src/components/common/Navbar.jsx'],
          ['SocialIcon', './src/components/common/SocialIcon.jsx'],
          ['Error', './src/components/common/Error.jsx'],
          ['Styles', './src/components/common/Styles.jsx'],
          ['Head', './src/components/common/Head.jsx'],
          ['Constants', './src/data/constants.js'],
          ['Actions', './src/redux/actions.js'],
          ['Assets', './assets/'],
        ]
      }
    }
  },

};