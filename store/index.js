import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
      state: {
        loadedPosts: []
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
            .$post(process.env.firebase + "/posts.json", postData)
            .then(data => 
                vuexContext.commit('addPost', {...postData, id: data.name}), 
                )
            .catch(e=> console.log(e));
        },
        editPost(vuexContext, editedPost) {
            return axios
              .put(process.env.firebase +`/posts/${editedPost.id}.json`, editedPost)
              .then(res => 
                  vuexContext.commit('editPost', editedPost), 
                  )
              .catch(e=> console.log(e));
        }
      },
      getters: {
        loadedPosts(state) {
          return state.loadedPosts;
        }
      }
    });
}

export default createStore