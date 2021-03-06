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
        { src: '@/plugins/youtube-embed', ssr: false }
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
        'bootstrap-vue/nuxt', [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: "AIzaSyAyu3Wu87r9M0G1_xXQHHmToZ2qm9gHK4w",
                    authDomain: "project-nuxt.firebaseapp.com",
                    databaseURL: "https://project-nuxt.firebaseio.com",
                    projectId: "project-nuxt",
                    storageBucket: "project-nuxt.appspot.com",
                    messagingSenderId: "917911723861",
                    appId: "1:917911723861:web:66535bb7d452cf5788d9dc"
                },
                services: {
                    auth: true,

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