<template>
    <div class="single-post-page">
        <section class="post">
            <h1>{{loadedPost.title}}</h1>
            <div class="post-details">
                <div>Last updated on {{loadedPost.updatedDate | date }}</div>
                <div>Written by{{loadedPost.author}}</div>
            </div>
            <p>{{loadedPost.content}}</p>
        </section>
        <section class="post-feedback">
            <p>let me know what you think<a href="/" class="href"> Feedback</a></p>
        </section>
    </div>
</template>


<script>
import axios from "axios"

export default {
  asyncData(context){
    if(context.payload){ // inserted only for generating files
      return { loadedPost: context.payload.postData } // reduce http request but passing payload during generating
    }
      return axios.get(`https://nuxtdb-8e40b.firebaseio.com/posts/${context.params.id}.json`)
  .then(res=> {
    return {
      loadedPost: res.data
    }
  })
  .catch(e=>context.error(e))

  }
}
</script>


<style lang="css">
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
    
</style>