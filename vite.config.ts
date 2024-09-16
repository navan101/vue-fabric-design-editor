import { fileURLToPath, URL } from 'node:url'
import { createHash } from 'node:crypto'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/vue-fabric-design-editor/' : '/',
  build: {
    // cssCodeSplit: false,
    // sourcemap: false,
    // target: "esnext",
    // minify: "esbuild", 
    minify: true,
    rollupOptions: {
      output: {
        chunkFileNames: chunkInfo => {
          const hash = createHash('md5')
            .update(chunkInfo.name)
            .digest('hex').substring(0, 16);
          return `assets/js/${hash}.js`
        },
        entryFileNames: entryInfo => {
          const hash = createHash('md5')
            .update(entryInfo.name)
            .digest('hex').substring(0, 16);
          return `assets/js/${hash}.js`
        },
        assetFileNames: assetInfo => {
          const hash = createHash('md5')
            .update(assetInfo.name)
            .digest('hex').substring(0, 16);
          return `assets/[ext]/${hash}.[ext]`
        }
      },
      // input: {
      //   main: fileURLToPath(new URL('index.html', import.meta.url)),
      // },
    },
  },
})
