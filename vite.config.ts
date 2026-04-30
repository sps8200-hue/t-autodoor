import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/t-autodoor/', // 반드시 저장소 이름인 t-autodoor를 앞뒤로 /와 함께 써주세요!
})
