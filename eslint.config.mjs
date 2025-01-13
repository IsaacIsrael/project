import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';

const compat = new FlatCompat();

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    ignores: ['*.config.*'],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...compat.extends('plugin:react-hooks/recommended'),
  {
    rules: {},
  },
  // * This configuration should be in the end as mention here -
  // * https://github.com/prettier/eslint-config-prettier?tab=readme-ov-file#what-and-why
  eslintConfigPrettier,
];
