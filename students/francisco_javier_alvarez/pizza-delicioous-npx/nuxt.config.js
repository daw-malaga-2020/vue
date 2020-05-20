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
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/vue-moment'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        '@nuxtjs/pwa',
        'vue-sweetalert2/nuxt', [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: "AIzaSyCaD6XZ2tGYGiexJbDmjrle2XP_wWlKnic",
                    authDomain: "pizza-delicious-a4319.firebaseapp.com",
                    databaseURL: "https://pizza-delicious-a4319.firebaseio.com",
                    projectId: "pizza-delicious-a4319",
                    storageBucket: "pizza-delicious-a4319.appspot.com",
                    messagingSenderId: "630046184489",
                    appId: "1:630046184489:web:ba48f4a63cf9a64c9b7838",
                    measurementId: "G-PF413QBTV8"
                },
                services: {
                    auth: true,
                    firestore: true
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
        extend(config, ctx) {}
    }
}