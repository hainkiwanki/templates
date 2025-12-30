import eslint from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    prettierRecommended,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // General
            'no-unused-vars': 'off',
            'no-undef': 'off',
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

            // TypeScript
            '@typescript-eslint/no-unused-vars': ['warn'],
            '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
        },
    },
    {
        ignores: ['dist/', 'node_modules/', 'coverage/', '*.config.*'],
    }
    
)