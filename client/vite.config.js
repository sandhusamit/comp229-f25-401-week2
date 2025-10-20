import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx",
    },
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT,
    allowedHosts: ['week2-mkun.onrender.com']
  }
});
