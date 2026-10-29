import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import 'dotenv/config';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
