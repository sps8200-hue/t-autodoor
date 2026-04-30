import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // <-- 이 부분이 핵심입니다. 모든 파일을 현재 위치에서 찾게 합니다.
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
