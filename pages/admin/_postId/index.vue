<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminEditPost :post="loadedPost"/>
        </section>
    </div>
</template>

<script>
import AdminEditPost from "@/components/Admin/AdminEditPost"

export default {
    components: {
        AdminEditPost
    },
    data() {
        return {
            loadedPost: {
                author: 'Tdog',
                title: "awesome post",
                content: 'amazong content',
                thumbnailLink : '~assets/images/background.jpg'
            }
        }
    },
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
