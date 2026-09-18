import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"
import { imagetools } from 'vite-imagetools'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    Pages({
      dirs: 'src/pages', 
      resolver: 'react', 
      routeStyle: 'next', 
      extensions: ['jsx', 'js'], 
    }),
    imagetools(),
    ViteImageOptimizer({
      jpg: { quality: 80 },
      png: { quality: 80 },
      webp: { lossy: true, quality: 80 },
      avif: { quality: 70 },
    }),
  ],
  server: {
    host: true
  },    
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})