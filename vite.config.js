/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
// import visualizer from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
    // visualizer({
    //   open: true,
    //   filename: 'dist/stats.html',
    //   gzipSize: true,
    //   brotliSize: true,
    // }),
  ],
  optimizeDeps: {
    include: ['msw'],
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.indexOf('node_modules') !== -1) {
            const module = id.split('node_modules/').pop().split('/')[0];
            return `vendor-${module}`;
          }
        },
      },
    },
  },
});
