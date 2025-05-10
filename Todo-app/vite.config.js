// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/routine-todo/", // 👈 ye line zaroori hai
  plugins: [react()],
})

