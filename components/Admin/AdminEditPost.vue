<template>
    <div>
        <form @submit.prevent="onSave">
                <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
                <AppControlInput v-model="editedPost.title">Title</AppControlInput>
                <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>

                <AppControlInput
                control-type="textarea"
                v-model="editedPost.content">Content</AppControlInput>
                <AppControlInput
                control-type="textarea"
                v-model="editedPost.previewText">Preview Text</AppControlInput>
    
                <AppButton type="submit">Save</AppButton>
    
                <AppButton
                    type="button"
                    style="margin-left: 10px"
                    btn-style="cancel"
                    @click="onCancel">Cancel</AppButton>
        </form>
    </div>
</template>

<script>


export default {
    props: {
        post: {
            type: Object,
            required: false
        }
    },
    methods: {
        onSave(){
            console.log(this.editedPost)
            this.$emit('submit', this.editedPost)
        },
        onCancel(){
            this.$router.push('/admin')
        }
    },
        data(){
        return {
            editedPost: this.post
            ? {...this.post}
            : {
                author: '',
                title: '',
                thumbnail: '',
                content: '',
                previewText: ''
            }
        }
    }
    
}
</script>



