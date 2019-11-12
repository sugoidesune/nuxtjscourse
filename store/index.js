import Vuex from 'vuex'
import cookie from "js-cookie"

const createStore = () => {
    return new Vuex.Store({
      state: {
        loadedPosts: [],
        token: null
      },
      mutations: {
        setPosts(state, posts) {
          state.loadedPosts = posts;
        },
        addPost(state, post) {
          state.loadedPosts.push(post);
        },
        editPost(state, editedPost) {
          const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
          state.loadedPosts[postIndex] = editedPost;
        },
        setToken(state, token){
          state.token = token
        },
        clearToken(state){
          state.token = null
        }
      },
      actions: {
        nuxtServerInit(vuexContext, context) {
          return context.app.$axios
            .$get( process.env.firebase + "/posts.json")
            .then(data => {
              const postsArray = [];
              for (const key in data) {
                postsArray.push({ ...data[key], id: key });
              }
              context.store.commit("setPosts", postsArray);
            })
            .catch(context.error);
        },
        setPosts(vuexContext, posts) {
          vuexContext.commit("setPosts", posts);
        },
        addPost(vuexContext, post) {
            var postData = {
              ...post,
              updatedDate: new Date()
            }
          return this.$axios
            .$post(process.env.firebase + `/posts.json?auth=${vuexContext.state.token}`, postData)
            .then(data => 
                vuexContext.commit('addPost', {...postData, id: data.name}), 
                )
            .catch(e=> console.log(e));
        },
        editPost(vuexContext, editedPost) {
            return this.$axios
              .$put(process.env.firebase +`/posts/${editedPost.id}.json?auth=${vuexContext.state.token}`, editedPost)
              .then(res => 
                  vuexContext.commit('editPost', editedPost), 
                  )
              .catch(e=> console.log(e));
        },
        authenticateUser(vuexContext, authData){
          var authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.firebaseAPIKey}`
          if(authData.isLogin){ 
            authUrl= `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.firebaseAPIKey}`
          } 
          return this.$axios.$post(authUrl,
            {
              email: authData.email,
              password: authData.password,
              returnSecureToken: true,
            }).then(res=>{
              vuexContext.commit('setToken', res.idToken)
              localStorage.setItem('myToken', res.idToken)
              localStorage.setItem('tokenExpiration', new Date().getTime + res.expiresIn * 1000)
              cookie.set('jwt', res.idToken)
              cookie.set('expirationDate', new Date().getTime() + res.expiresIn * 1000)
            }).catch(console.warn)
        },
        initAuth(vuexContext, req){
          var expirationDate, token;
          if(req){
            if(req.headers.cookie){
              const jwtCookie = req.headers.cookie.split(';').find(c=> c.trim().startsWith('jwt='))
              if(jwtCookie){
                token = jwtCookie.split('=')[1]
                expirationDate = req.headers.cookie.split(';').find(c=> c.trim().startsWith('expirationDate=')).split('=')[1]
              }
            }
          }else {
            token = localStorage.getItem('myToken');
            expirationDate = localStorage.getItem('tokenExpiration')
          }
          if(new Date().getTime() > +expirationDate || !token) {
            vuexContext.dispatch('logout')
            return 
          } else {
            vuexContext.commit('setToken', token)
          }
        },
        logout(vuexContext){
          vuexContext.commit('clearToken')
          cookie.remove('jwt')
          cookie.remove('expirationDate')
          if(process.client){
            localStorage.removeItem('token')
            localStorage.removeItem('tokenExpiration')
          }
        }
      },
      getters: {
        loadedPosts(state) {
          return state.loadedPosts;
        },
        isAuthenticated(state){
          return state.token != null
        }
      }
    });
}

export default createStore