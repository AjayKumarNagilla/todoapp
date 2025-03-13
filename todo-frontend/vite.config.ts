import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Optional: Enable SWC-specific options if needed
      jsxImportSource: 'react', // Default, can be omitted
      tsDecorators: true, // Enable experimental support for TypeScript decorators
    }),
  ],
  server: {
    port: 3000, // Set the development server port
    open: true, // Automatically open the app in the browser
  },
  build: {
    outDir: 'dist', // Output directory for the production build
    sourcemap: true, // Generate source maps for debugging
  },
});
