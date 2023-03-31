export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ReStore',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "/css/bootstrap.css" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
    '@/assets/css/base.css',
    '@/assets/css/index.css',
    '@/assets/css/faq.css',
    '@/assets/css/contact.css',
    '@/assets/css/about.css',
    '@/assets/css/form.css',
    "@/node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" }
],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  googleFonts: {
    families: {
      // a simple name
      // Roboto: true,
  
      // a name with spaces
      'Josefin+Sans':
        [100,300,400]
      
        
      // specific font weights
      // Lato: [100, 300],
    }
  }
}
