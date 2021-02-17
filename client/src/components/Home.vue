<template>
    <div>
        <b-grid>
            <b-row>
                <b-col>
                    <img :src="getPath" alt="picture"/>
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

const PATH = '../../../testData/pics/'

export default {
    name: 'Home',
    data() {
        return{
            url: Object
        }
    },
    computed:{
        getPath(){
            return (PATH + this.url.path)
        }
    },
    methods:{
        async getImage(){
            await fetch('http://localhost:3000/asd')
              .then(response => response.json())
              .then(data => this.url = data)//console.log(data));
        }
    },
    created(){
        this.getImage()
    },
}
</script>
<style scoped>

</style>