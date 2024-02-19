// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false
  },
  devServer: {
    port: 8888
  },
  modules: [
    '@element-plus/nuxt'
  ],
  css: [
    // 'element-plus/dist/index.css',
  ]
})
