import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',          // allow external connections
    port: process.env.PORT,    // use the port Render assigns
    allowedHosts: ['week2-mkun.onrender.com'] // add your Render host
  }
})
