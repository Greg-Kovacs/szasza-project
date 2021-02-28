<template>
    <div>
        <b-grid>
            <b-row >
                <b-col class="imageRow">
                    <img class="image" v-for="fileName in fileNames" :key="fileName.id" :src="getImageFromAPI + fileName" alt="picture"/>
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

const URL = 'http://localhost:3000/image/'

export default {
    name: 'Home',
    data() {
        return{
            fileNames: []
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
        }
    },
    created(){
        this.getImage()
    },
}
</script>
<style scoped>
    .image {
        display: block;
        max-width: 300px;
        max-height: 300px;
        min-width: 300px;
        min-height: 300px;
        margin-right: 20px;
        margin-left: 30px;
        box-shadow: 10px 10px 5px grey;
        float: left;
    }
    .imageRow {
        content: center;
    }
</style>