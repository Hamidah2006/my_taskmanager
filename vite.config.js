import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my_taskmanager/', // 👈 update this to match your GitHub repo name exactly
  plugins: [react()],
})
