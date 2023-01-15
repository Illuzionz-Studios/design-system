import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import * as packageJson from './package.json';

export default defineConfig((configEnv) => ({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "./src/design-system-utils.scss";
                `,
            },
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
                    src: 'src/design-system-utils.scss',
                    dest: '.',
                },
                {
                    src: 'src/design-system.scss',
                    dest: '.',
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
            external: [...Object.keys(packageJson.peerDependencies)],
        },
    },
}));
