import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 깃허브 저장소 이름을 정확히 넣어주어 주소 경로를 맞춥니다.
  base: '/t-autodoor/', 
  build: {
    // 빌드된 파일들이 저장될 위치를 명시합니다.
    outDir: 'dist',
  }
})
