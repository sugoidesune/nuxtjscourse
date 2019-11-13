const bodyParser = require('body-parser')
const axios = require('axios')

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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans&display=swap"}
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
    "~assets/styles/main.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
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
    '@nuxtjs/axios'
    // Doc: https://bootstrap-vue.js.org
    //'bootstrap-vue/nuxt',
  ],
axios: {
  baseURL: process.env.FIREBASE,
},


  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    firebase: process.env.FIREBASE ,
    firebaseAPIKey : process.env.FIREBASE_APIKEY 
  },

  //rootDir: "/",

  // vue router
  router: {
    // base: "/",
    // extendRoutes(routes, resolve){ // dynamically create routes
    //   routes.push({
    //     path: '*',
    //     component: resolve(__dirname, "pages/index.vue")
    //   })
    // },
    // linkActiveClass: 'active'
  },

  transition: {
    name: 'fade',
    mode: "out-in"
  },

  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ],

  generate: {
    routes: function(){
      return axios.get(process.env.FIREBASE+'/posts.json')
      .then(res=>{
        const postRoutes = []
        for(const key in res.data){
          postRoutes.push({
            route : '/posts/' + key,
            payload:  {postData: res.data[key]}
        })
        }
        return postRoutes
      })
    }
  }

}
