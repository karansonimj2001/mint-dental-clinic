import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves the site from /mint-dental-clinic/, so production
// builds use that base while the dev server stays at the root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/mint-dental-clinic/' : '/',
  plugins: [react(), tailwindcss()],
}))
