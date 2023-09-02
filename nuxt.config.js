export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hairy Ghost - Twin Cities Official Guide to Halloween',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:description', content: 'Welcome to Hairy Ghost! Your guide to Halloween, Haunted Houses, Movies and Attractions in the Twin Cities.' },
      { property: 'og:title', content: 'Hairy Ghost - Twin Cities Official Guide to Halloween' },
      { property: 'og:url', content: 'https://www.hairyghost.com' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image', content: 'https://www.hairyghost.com/images/hg-sticker.png'  }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
    '~assets/scss/vars.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  
  buildModules: [
    '@nuxtjs/google-analytics'
  ],

  
  googleAnalytics: {
    id: 'UA-83361586-1'
  },

    
  

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/proxy',
    'nuxt-mq'
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  axios: {
    // Do away with the baseUrl when using proxy
    //baseURL: 'https://demo.jaredfuller.com/',
    proxyHeaders: false,
    credentials: false
   },
 
  //  proxy: {
  //   '/api/': {
  //     target: 'https://demo.jaredfuller.com/hg/',
  //     pathRewrite: { '^/api/': '/posts/1' }
  //   },
  //  },
}
