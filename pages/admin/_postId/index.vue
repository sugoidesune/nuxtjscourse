<template>
    <div class="admin-post-page">
        <section class="update-form">
            <h1>adminpostid</h1>
            <AdminEditPost :post="loadedPost" @submit="onSubmitted"/>
        </section>
    </div>
</template>

<script>
import AdminEditPost from "@/components/Admin/AdminEditPost"
import axios from "axios";

export default {
    components: {
        AdminEditPost
    },
    asyncData(context){
        return axios.get(`https://nuxtdb-8e40b.firebaseio.com/posts/${context.params.postId}.json`)
    .then(res=> {
        return {
        loadedPost: { ...res.data, id: context.params.postId }
        }
    })
    .catch(e=>context.error(e))

    },
    methods: {
        onSubmitted(editedPost){
            this.$store.dispatch('editPost', editedPost)
            .then(()=> this.$router.push('/admin'))
        }
    },
    middleware: ['check-auth','auth']
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
