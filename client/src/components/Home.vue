<template>
    <div>
        <b-grid>
            <b-row>
                <b-col>
                    <img v-for="fileName in fileNames" :key="fileName.id" :src="getImageFromAPI + fileName" alt="picture"/>
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

</style>