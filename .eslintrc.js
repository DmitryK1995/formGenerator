module.exports = {
  plugins: [
    '@typescript-eslint',
  ],

  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true },
    ],
  },
  overrides: [
    {
      extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      files: ['*.ts', '*tsx'],
      rules: {},
    },
  ],
};
