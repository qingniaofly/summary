import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from "vite-plugin-mock";

const PORT = Number(process.env.PORT ?? '3000')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: './mock',
      supportTs: true,
      localEnabled: process.env.USE_MOCK === 'true' || false,
    })
  ],
  publicDir: false,
  server: {
    proxy: {
      "/member-api": {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },
})
