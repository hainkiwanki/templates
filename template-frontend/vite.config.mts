import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import path, { resolve } from 'path';

export default defineConfig({
    plugins: [vue(), vuetify({ autoImport: true })],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    build: {
        outDir: resolve(__dirname, 'dist'),
    },
});
