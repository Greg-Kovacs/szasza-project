<template>
    <div>
        <b-grid>
            <b-row class="imageRow">
                <b-col>
                    <div>
                        <b-img class="image" @click="showImageModal" v-for="fileName in fileNames" :key="fileName.id" :src="getImageFromAPI + fileName" alt="picture"/>
                        <ImageModal :showModal="showModal"  v-if="showModal"/>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
                </b-col>
            </b-row>
        </b-grid>
    </div>
    
</template>
<script>

import ImageModal from './ImageModal'

const URL = 'http://localhost:3000/image/'

export default {
    name: 'Home',
    data() {
        return{
            fileNames: [],
            showModal: false
        }
    },
    computed:{
        getImageFromAPI(){
            return URL
        }
    },
    methods:{
        async getImage(){
            await fetch('http://localhost:3000/images')
              .then(response => response.json())
              .then(data => this.fileNames = data.files)//console.log(data));
        },
        showImageModal() {
            this.showModal = !this.showModal
        }
    },
    created(){
        this.getImage()
    },
    components: {
        ImageModal
    }

}
</script>
<style scoped>
    .image {
        display: block;
        max-height: 600px;
        max-width: 600px;
        margin-right: 20px;
        margin-left: 30px;
        margin-bottom: 25px;
        box-shadow: 10px 10px 5px grey;
        float: left;
    }
    .image:hover {
        filter: grayscale(100%);
        cursor: pointer;
    }
    .imageRow {
        content: center;
        margin-left: 120px;
        margin-top: 25px;
        margin-bottom: 25px;

    }
</style>