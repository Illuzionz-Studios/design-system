import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig((configEnv) => ({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "./src/styles/design-system-utils.scss";
                `,
            },
        },
        modules: {
            localsConvention: 'camelCase',
        },
    },
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            include: ['src/'],
        }),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/styles/design-system-utils.scss',
                    dest: 'styles',
                },
                {
                    src: 'src/styles/design-system.scss',
                    dest: 'styles',
                },
                {
                    src: 'src/styles/color-scale.scss',
                    dest: 'styles',
                },
                {
                    src: 'src/styles/theme-colors.scss',
                    dest: 'styles',
                },
            ],
        }),
    ],
    build: {
        sourcemap: true,
        lib: {
            entry: resolve('src', 'index.ts'),
            name: 'design-system',
            formats: ['es', 'umd'],
            fileName: (format) => `design-system.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
}));
