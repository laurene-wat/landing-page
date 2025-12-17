// vite.config.ts
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import Prerender from 'vite-plugin-prerender';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: { port: 3000, host: '0.0.0.0' },
    plugins: [
      react(),
      Prerender({
        routes: ['/'],
        staticDir: 'dist',
        renderAfterDocumentEvent: 'app-mounted',
        rendererOptions: {
          // Attend que les ressources réseau se calment
          renderAfterTime: 0,
          maxConcurrentRoutes: 1
        },
        headless: true
      }),
    ],
    base: '/',
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: { alias: { '@': path.resolve(__dirname, '.') } },
  };
});
