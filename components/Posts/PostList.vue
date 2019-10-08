<template>
    <section class="post-list" >
      <PostPreview
        id="1"
        :is-admin="isAdmin"
        thumbnail="https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA17563-1280x1024.jpg"
        title="Greeat title"
        previewText="This is a great first blogpost about space"/>
            <PostPreview
        id="2"
        :is-admin="isAdmin"
        thumbnail="https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA17563-1280x1024.jpg"
        title="Greeat title"
        previewText="This is a great second blogpost about space"/>
            <PostPreview
        id="3"
        :is-admin="isAdmin"
        thumbnail="https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA17563-1280x1024.jpg"
        title="Greeat title"
        previewText="This is a great third blogpost about space"/>
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