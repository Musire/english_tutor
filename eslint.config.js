import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react,
    },
    rules: {
      // Tells ESLint to ignore any resolved path that has a query string attached
      'import/no-unresolved': ['error', { ignore: ['\\.(jpg|jpeg|png|webp|avif|svg)\\?.*$'] }],
      'import-x/no-unresolved': ['error', { ignore: ['\\.(jpg|jpeg|png|webp|avif|svg)\\?.*$'] }]
    },
  },
])
