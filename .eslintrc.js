/* eslint-env node */

/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: [
    'universe/native',
    'universe/shared/typescript-analysis',
    'plugin:tailwindcss/recommended',
    'plugin:@tanstack/query/recommended',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    tailwindcss: {
      callees: ['classnames', 'clsx', 'ctl', 'cva', 'cx', 'twMerge'],
    },
  },
  rules: {
    'import/order': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  ignorePatterns: ['/.expo', 'node_modules', '*.d.ts', 'ios', 'android'],
};

module.exports = config;
