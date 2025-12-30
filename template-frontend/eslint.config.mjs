import js from '@eslint/js';
import ts from 'typescript-eslint';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default ts.config(
    js.configs.recommended,
    ...ts.configs.recommended,
    ...vuePlugin.configs['flat/recommended'],
    {
        ignores: ['dist', 'node_modules', 'coverage', '*.config.*', '*.mjs'],
    },
    {
        files: ['**/*.{js,ts,mts,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parser: vueParser,
            parserOptions: {
                parser: tsParser,
                extraFileExtensions: ['.vue'],
                sourceType: 'module',
            },
        },
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            ...prettierConfig.rules,
            'prettier/prettier': ['error', { endOfLine: 'auto' }],

            'no-unused-vars': 'off',
            'no-undef': 'off',
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

            '@typescript-eslint/no-unused-vars': ['warn'],
            '@typescript-eslint/explicit-function-return-type': [
                'error', 
                { allowExpressions: true }
            ],

            'vue/multi-word-component-names': 'off',
            'vue/no-mutating-props': 'warn',
            'vue/require-default-prop': 'off',
        },
    }
);