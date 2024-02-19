// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,       // 禁用服务器端渲染
  devtools: {
    enabled: false
  },
  devServer: {
    port: 3000
  },
  modules: [
    '@element-plus/nuxt'
  ],
  css: [
    // 这是全局引入的
    // 'element-plus/dist/index.css',
    '@/assets/less/main.less'
  ],
})
