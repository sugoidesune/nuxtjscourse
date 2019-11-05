<template>
    <section class="post-list" >
      <PostPreview
        v-for="post in newPosts" :key='post.id'
        :id="post.id"
        :is-admin="isAdmin"
        :thumbnail="post.thumbnail"
        :title="post.title"
        :previewText="post.previewText"/>
    </section>
</template>

<script>
// for getting root folder @ or ~ its the same.
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin : {
      type: Boolean,
      default: false,
    },
    newPosts : {
      type: Array,
      required: true
    }
  },
    data() {
    return {
      loadedPosts : [
        {
          id:'1',
          title: 'First Post',
          previewText: 'This is our first post',
          thumbnail: 'https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA17563-1280x1024.jpg'
        },
          {
          id:'2',
          title: 'FSecond Post',
          previewText: 'This is our second post',
          thumbnail: 'https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA17563-1280x1024.jpg'
          }
      ]
    }
  }

}
</script>

<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
    
</style>