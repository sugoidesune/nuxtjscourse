<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <AdminEditPost @submit="onSubmitted"/>
        </section>
    </div>
</template>

<script>
import axios from "axios"
import AdminEditPost from "@/components/Admin/AdminEditPost"

export default {
    components: {
        AdminEditPost
    },
    methods: {
      onSubmitted(postData) {
        this.$store.dispatch('addPost', postData)
        .then(()=>this.$router.push('/admin'))
      }
    }
}
</script>

<style scoped>
.admin-new-post-page {
    padding: 25px 0;
    background: rgb(204, 247, 204);
}

.new-post-form {
  width: 90%;
  margin: 20px auto;
  background: rgb(137, 214, 176);
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>