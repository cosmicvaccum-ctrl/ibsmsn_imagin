import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config} */
export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'src/components/ui/**',
      'prettier.config.js',
      'eslint.config.js',
    ],
  },
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      'unused-imports/no-unused-imports': 'error',
    },
  },
)
