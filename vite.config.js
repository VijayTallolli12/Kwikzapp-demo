import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Kwikzapp-demo/',
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 5173,
    open: true,
    host: true
  },
  preview: {
    port: 5173,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
});
