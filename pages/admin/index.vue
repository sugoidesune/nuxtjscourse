<template>
    <div class="admin-page">
        <section class="new-post">
            <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
        </section>
        <section>
                <h1>Existing Posts</h1>
                <PostList isAdmin :newPosts='loadedPosts' />
        </section>
    </div>
</template>

<script>

export default {
    layout: 'admin',
    computed: {
      loadedPosts(){
        //console.log(this.$store.getters.loadedPosts)
       return this.$store.getters.loadedPosts
      }
    }
    
}
</script>

<style>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>