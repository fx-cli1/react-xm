// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path');
// https://vitejs.dev/config/
module.exports = {
  plugins: [react()],
  "resolve.alias": {
    // 键必须以斜线开始和结束
    '/@/': path.resolve(__dirname, './src')
  },
  hostname: '127.0.0.1',
  port: 3000,
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  /**
  * 在生产中服务时的基本公共路径。
  * @default '/'
   */
  base: './',
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: 'dist',
  // 反向代理，此处应该特别注意，网上很多教程是直接设置proxy，并没有向官网那样添加 server，可能会导致失败，vite官网：https://vitejs.dev/guide/features.html#async-chunk-loading-optimization
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5678',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        // require("autoprefiexr"),
        require('postcss-px-to-viewport')({
          viewportWidth: 750,
          viewportHeight: 1334,
          unitPrecision: 3,
          viewportUnit: 'vw',
          selectorBlackList: ['.ignore', '.hairlines'],
          minPixelValue: 1,
          mediaQuery: false
        })
      ]
    }
  }
}
