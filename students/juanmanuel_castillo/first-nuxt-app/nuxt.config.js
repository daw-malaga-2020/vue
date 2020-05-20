
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
    { src: '@/plugins/embed-youtube', ssr: false }
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
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap',
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
          firestore: true,
          storage: true
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
    extend(config, ctx) {
    }
  }
}
