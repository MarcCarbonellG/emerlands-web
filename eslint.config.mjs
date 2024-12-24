import pluginJs from '@eslint/js';
import eslintPluginPrettier from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  eslintPluginPrettier,
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'no-unused-vars': 'off',
      'prettier/prettier': ['error'],
    },
  },
  {
    plugins: {
      prettier,
    },
  },
];
