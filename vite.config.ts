import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // <-- 이 부분을 '/t-autodoor/' 대신 './' 로 바꿔보세요. 
})
