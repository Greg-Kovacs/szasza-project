<template>
    <div v-if="!fetching" >
        <imageBlock v-for="fileName in fileNames" :key="fileName.id" :imageURL="getImageFromAPI + fileName" :id="fileNames.indexOf(fileName)" @choosedImg="choosedImg" alt="picture"/>
    </div>
</template>
<script>
import imageBlock from './ImageBlock'

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
            const albumName = this.$route.params.album_name
            if(albumName) {
                return `http://localhost:3000/albums/${albumName}/`
            }
            return URL
        }
    },
    methods: {
        async getImageNames(){
            const albumName = this.$route.params.album_name
            if(albumName) {
                this.fetching = true
                await fetch('http://localhost:3000/albums/' + albumName)
                    .then(response => response.json())
                    .then(data => {
                        this.fileNames = data.files
                        this.fetching = false
                    })
            }
            else {
                this.fetching = true
                await fetch('http://localhost:3000/images')
                    .then(response => response.json())
                    .then(data => {
                        this.fileNames = data.files
                        this.fetching = false
                    })
            }
        },
        choosedImg(id) {
            const albumName = this.$route.params.album_name
            if(albumName) {
                this.$emit('showImg', 'album/' + albumName + '/' +this.fileNames[id])
            }
            else {
                this.$emit('showImg',this.fileNames[id])
            }
        }
    },
    created(){
        this.getImageNames()
    },
    components: {
        imageBlock
    }
    
}
</script>
<style scoped>

</style>