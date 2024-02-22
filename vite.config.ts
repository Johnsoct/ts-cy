import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@cypress': path.resolve(__dirname, './cypress'),
      '@src': path.resolve(__dirname, './src'),
      '@ts': path.resolve(__dirname, './types'),
    }
  }
})
