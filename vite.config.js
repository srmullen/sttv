import { defineConfig } from 'vite'
import svelte from '@svitejs/vite-plugin-svelte'

console.log(process.env.NODE_ENV);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()]
});
