// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically opens the browser on server start
  },
  alias:{
    '@': '/src',
  },
  // Add any other custom configuration here
});
