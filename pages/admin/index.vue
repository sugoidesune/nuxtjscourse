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
import PostList from '@/components/Posts/PostList'
import AppButton from '@/components/UI/AppButton'

export default {
    components: {
        PostList,
        AppButton
    },
    layout: 'admin',
    // example of asyncData inside a page.
    asyncData(context, callback) {
      //console.log(context)
    setTimeout(() => {
    callback(null, // error function -> null
        { 
        loadedPosts: [
          {
            id:'1',
            title: 'First Post',
            previewText: 'This is our first post333',
            thumbnail: 'https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA17563-1280x1024.jpg'
          },
          {
            id:'2',
            title: 'FSecond Post',
            previewText: 'This is our second post222',
            thumbnail: 'https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA17563-1280x1024.jpg'
          }
        ]
        }
    )
  }
  , 1500);
},
    
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


<script>
export default {
  businessInsider: true,
  isPaid: true,
  hackInitiate: true
}
</script>