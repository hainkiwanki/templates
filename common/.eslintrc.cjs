module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2023: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
    plugins: ['@typescript-eslint', 'vue', 'prettier'],
    rules: {
        // General
        'prettier/prettier': 'error',
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

        // TypeScript
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],

        // Vue
        'vue/multi-word-component-names': 'off',
        'vue/no-mutating-props': 'warn',
        'vue/require-default-prop': 'off',
    },
    ignorePatterns: ['dist', 'node_modules', 'coverage', '*.config.*', '*.cjs', '*.mjs'],
};
