// vite.config.ts
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteSSG } from 'vite-plugin-ssg';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: { port: 3000, host: '0.0.0.0' },
    plugins: [
      react(),
      // Active SSG sur la route "/"
      ViteSSG({
        script: 'async',
        formatting: 'minify',
        includedRoutes: () => ['/']
      })
    ],
    base: '/',
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: { alias: { '@': path.resolve(__dirname, '.') } },
  };
});
