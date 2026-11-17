import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves the site from a /mint-dental-clinic/ subpath, so the
// Pages workflow sets DEPLOY_BASE_PATH for its build. Vercel, the dev server
// and local preview all serve from the root and get the default '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? (process.env.DEPLOY_BASE_PATH ?? '/') : '/',
  plugins: [react(), tailwindcss()],
}))
