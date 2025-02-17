import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';
import perfectionist from 'eslint-plugin-perfectionist';

const compat = new FlatCompat();

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    ignores: [
      '**/*.config.*',
      '**/.docusaurus',
      'docs/docs/api/**',
      'docs/static/storybook-static/**',
      'docs/build/**',
      '.storybook.ondevice/storybook.requires.ts',
    ],
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
  ...compat.extends('plugin:react-native/all'),
  reactRefresh.configs.recommended,
  {
    plugins: {
      perfectionist,
    },
  },
  {
    rules: {
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'variable',
          // Specify PascalCase for React components
          format: ['PascalCase', 'camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'import',
          // Specify PascalCase for React components
          format: ['PascalCase', 'camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'parameter',
          format: ['PascalCase', 'camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'property',
          format: null,
          leadingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
    },
  },
  {
    rules: {
      'no-console': ['error', { allow: ['error'] }],
      'arrow-body-style': 'warn',
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-require-imports': [
        'error',
        {
          allow: ['\\.png', '\\.svg'],
        },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
  {
    rules: {
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/prefer-stateless-function': 'error',
      'react/no-unused-prop-types': 'error',
      'react/jsx-pascal-case': 'error',
      'react/no-children-prop': 'error',
      'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
      'react/jsx-fragments': 'error',
      'react/destructuring-assignment': ['error', 'always', { destructureInSignature: 'always' }],
      'react/jsx-no-leaked-render': ['error', { validStrategies: ['coerce', 'ternary'] }],
      'react/jsx-max-depth': ['error', { max: 5 }],
      'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
      'react/jsx-key': [
        'error',
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-curly-brace-presence': ['warn', { props: 'always', children: 'always' }],
      'react/display-name': 'warn',
      'react/self-closing-comp': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prefer-read-only-props': 'warn',
      'react/no-array-index-key': 'error',
      'react/no-multi-comp': 'error',
      'react-native/sort-styles': 'off',
      'react-native/no-raw-text': 'off',
    },
  },
  {
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          internalPattern: ['^(@|/)+'],
          groups: [
            ['external', 'builtin'],
            ['parent', 'sibling', 'index'],
            'internal',
            'object',
            ['type', 'internal-type', 'parent-type', 'sibling-type', 'index-type'],
            'unknown',
          ],
        },
      ],
      'perfectionist/sort-array-includes': [
        'error',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-classes': [
        'error',
        {
          type: 'natural',
          groups: [
            'index-signature',
            'static-block',

            ['private-static-property', 'private-static-accessor-property'],
            ['protected-static-property', 'protected-static-accessor-property'],
            ['static-property', 'static-accessor-property'],

            ['private-property', 'private-accessor-property'],
            ['protected-property', 'protected-accessor-property'],
            ['property', 'accessor-property'],

            ['private-static-get-method', 'private-static-set-method'],
            ['protected-static-get-method', 'protected-static-set-method'],
            ['static-get-method', 'static-set-method'],

            ['private-get-method', 'private-set-method'],
            ['protected-get-method', 'protected-set-method'],
            ['public-get-method', 'public-set-method'],

            'constructor',

            ['private-static-method', 'private-static-function-property'],
            ['protected-static-method', 'protected-static-function-property'],
            ['static-method', 'static-function-property'],

            ['private-method', 'private-function-property'],
            ['protected-method', 'protected-function-property'],
            ['method', 'function-property'],

            'unknown',
          ],
        },
      ],
      'perfectionist/sort-enums': [
        'error',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-heritage-clauses': [
        'error',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-interfaces': [
        'error',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-intersection-types': [
        'error',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          type: 'natural',
          groups: ['id', 'multiline', 'unknown', 'shorthand', 'callback'],
          customGroups: {
            id: '^id$',
            callback: '^on.+',
          },
        },
      ],
      'perfectionist/sort-maps': [
        'error',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-modules': [
        'error',
        {
          type: 'natural',
          groups: [
            'declare-enum',
            'enum',
            'export-enum',
            ['declare-interface', 'declare-type'],
            ['export-interface', 'export-type'],
            ['interface', 'type'],
            'declare-function',
            'function',
            'export-function',
            'declare-class',
            'class',
            'export-class',
          ],
        },
      ],
      'perfectionist/sort-named-exports': [
        'error',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-named-imports': [
        'error',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-object-types': [
        'error',
        {
          type: 'natural',
          groups: ['id', 'unknown'],
          customGroups: {
            id: '^id$',
          },
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'natural',
          groups: ['id', 'unknown'],
          customGroups: {
            id: '^id$',
          },
          ignorePattern: ['style'],
        },
      ],
      'perfectionist/sort-sets': [
        'error',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-switch-case': [
        'error',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-union-types': [
        'error',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-variable-declarations': [
        'error',
        {
          type: 'natural',
        },
      ],
    },
  },
  // * This configuration should be in the end as mention here -
  // * https://github.com/prettier/eslint-config-prettier?tab=readme-ov-file#what-and-why
  eslintConfigPrettier,
];
