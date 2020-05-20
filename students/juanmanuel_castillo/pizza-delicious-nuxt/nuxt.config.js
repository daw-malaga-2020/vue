
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
    '@static/css/bootstrap.min.css',
    '@static/css/style.css',
    '@static/css/flaticon.css',
    '@static/css/icomoon.css',
    '@static/css/ionicons.min.css',
    '@static/css/open-iconic-bootstrap.min.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/filters',
    '@/plugins/vue-moment'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    'vue-sweetalert2/nuxt',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBp7DOqXg2hQS3Trj3iz9l6y7h9YFOkNWk",
          authDomain: "pizza-delicious-56543.firebaseapp.com",
          databaseURL: "https://pizza-delicious-56543.firebaseio.com",
          projectId: "pizza-delicious-56543",
          storageBucket: "pizza-delicious-56543.appspot.com",
          messagingSenderId: "858521662065",
          appId: "1:858521662065:web:a145e1ef3dcbe4f8a0a1d0",
          measurementId: "G-FLWDRV8XRE"
        },
        services: {
          auth: true,
          firestore: true
        }
      }
    ]
  ],
  router: {
    middleware: ['authenticated']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
