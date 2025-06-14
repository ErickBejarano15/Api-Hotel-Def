// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Api-Hotel-Def/', // nombre exacto del repo en GitHub
  plugins: [react()],
})
