<template>
    <div>
        <b-img @click="showImageModal()" class="image" :src="imageURL" alt="picture" />
    </div>
</template>
<script>

export default {
    name: 'ImageBlock',
    props: {
        imageURL: String,
        id: Number,
    },
    data () {
        return {
            imageString: ""
        }
    },
    methods: {
        showImageModal() {
            this.$emit('choosedImg', this.id)
        }
    },
    created(){
    }
    
}
</script>
<style scoped>
    .image {
        display: block;
        max-height: 500px;
        max-width: 500px;
        margin-right: 20px;
        margin-bottom: 25px;
        box-shadow: 10px 10px 5px black;
        float: left;
    }
    .image:hover {
        filter: grayscale(100%);
        cursor: pointer;
    }
</style>