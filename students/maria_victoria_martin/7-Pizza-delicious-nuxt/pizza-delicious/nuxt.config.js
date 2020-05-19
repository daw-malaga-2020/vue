
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vue-notifications',
    '@/plugins/filters'

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/moment',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-sweetalert2',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyB7B_plmn-CjHz6C6ueVe6meY03b7UNbeA",
          authDomain: "pizza-delicious-96c19.firebaseapp.com",
          databaseURL: "https://pizza-delicious-96c19.firebaseio.com",
          projectId: "pizza-delicious-96c19",
          storageBucket: "pizza-delicious-96c19.appspot.com",
          messagingSenderId: "937513632491",
          appId: "1:937513632491:web:3e55617d1f2c3279c134ae",
          measurementId: "G-P8KLH0KVEE"
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          firestore: true,
          storage: true,
        }
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
