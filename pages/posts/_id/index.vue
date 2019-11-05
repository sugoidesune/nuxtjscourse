<template>
    <div class="single-post-page">
        <section class="post">
            <h1>{{loadedPost.title}}</h1>
            <div class="post-details">
                <div>Last updated on {{loadedPost.updateDate}}</div>
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
export default {
  asyncData(context){
 // new Promise().catch(e=> context.error(e)) // error with nuxt with promises
 return new Promise((resolve, reject)=>{

   setTimeout(()=>{
    // callback(new Error(),{ // on eror nuxt redirects to error page. 
      resolve({
       loadedPost: {
         id: '1',
         title: 'First Post (ID:' + context.params.id + ")",
         previewText: 'This is our first post',
         author: 'Timar',
         updateDate: new Date(),
         content: 'THis is the amazing content of this post it should be pretty clear its superior to anything out there',
         thumbnail: 'https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA17563-1280x1024.jpg'
       }
      })
   },1500)
 })
 .then(data=> {
   return data
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