import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    hmr: { host: process.env.REPLIT_DEV_DOMAIN },
  }
})