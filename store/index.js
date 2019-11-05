import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context){
                return new Promise((resolve, reject)=>{
                    //console.log(context)
                setTimeout(() => {
                   vuexContext.commit('setPosts', [
                        {
                          id:'1',
                          title: 'First Post',
                          previewText: 'This is our first post333',
                          thumbnail: 'https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA17563-1280x1024.jpg'
                        },
                        {
                          id:'2',
                          title: 'FSecond Post123123',
                          previewText: 'This is our second post222',
                          thumbnail: 'https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA17563-1280x1024.jpg'
                        }
                    ])
                 resolve()
                },1000)
            })
                },
            setPosts(vuexContext, posts){
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore

//LEFT 0.4/11