module.exports = {
  parser: 'babel-eslint',
  env: {
    jest: true
  },
  plugins: ['react', 'prettier', 'jsx-a11y'],
  extends: ['standard', 'eslint:recommended', 'plugin:jsx-a11y/recommended'],
  rules: {
    'no-unused-vars': 'error',
    'react/jsx-wrap-multilines': 0,
    'react/jsx-filename-extension': 0,
    'no-use-before-define': 0,
    'react/prop-types': 0,
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'react/react-in-jsx-scope': 'error',
    'standard/no-callback-literal': 'off'
  }
}
