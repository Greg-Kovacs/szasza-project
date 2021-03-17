<template>
    <div v-if="!fetching">
        <ImageBlock v-for="fileName in fileNames" :key="fileName.id" :imageURL="getImageFromAPI + fileName" :id="fileNames.indexOf(fileName)" @choosedImg="choosedImg" alt="picture"/>
    </div>
</template>
<script>
import ImageBlock from './ImageBlock'

const URL = 'http://localhost:3000/image/'

export default {
    name: 'ImageList',
    data () {
        return {
            fileNames: [],
            fetching: Boolean
        }
    },
    computed:{
        getImageFromAPI(){
            return URL
        }
    },
    methods: {
        async getImageNames(){
            this.fetching = true
            await fetch('http://localhost:3000/images')
                .then(response => response.json())
                .then(data => {
                    this.fileNames = data.files
                    this.fetching = false
                })
        },
        choosedImg(id) {
            this.$emit('showImg',this.fileNames[id])
        }
    },
    created(){
        this.getImageNames()
    },
    components: {
        ImageBlock
    }
    
}
</script>
<style scoped>

</style>