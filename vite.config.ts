import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/t-autodoor/", // <-- 이 줄이 제일 중요해요! 깃허브 주소를 알려주는 역할을 합니다.
})
