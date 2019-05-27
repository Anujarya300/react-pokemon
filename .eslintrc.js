module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
      'plugin:@typescript-eslint/recommended',
      'react-app',
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/no-use-before-define": 0,
  },
};
