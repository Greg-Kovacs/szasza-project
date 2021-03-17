<template>
    <div>
        <b-row class="imageRow">
            <b-col name="ImageList">
                <div>
                    <ImageList @showImg="showImageModal"/>
                    <ImageModal ref="choosedImg" :imageUrl="choosedImgName"  v-if="showModal" />
                 </div>
             </b-col>
        </b-row>
        <b-row>
            <b-col name="test text">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
            </b-col>
        </b-row>
    </div>
    
</template>
<script>
import ImageList from './image_components/ImageList.vue'
import ImageModal from './image_components/ImageModal'


export default {
    name: 'Home',
    data() {
        return{
            showModal: false,
            choosedImgName: String
        }
    },
    computed:{
    },
    methods:{
        showImageModal(imageName) {
            this.choosedImgName = imageName
            this.showModal = true
            this.$refs.choosedImg.showModal()
        }
    },
    components: {
        ImageModal,
        ImageList
    }

}
</script>
<style scoped>
.imageRow {
    content: center;
    margin-left: 120px;
    margin-top: 25px;
    margin-bottom: 25px;

}
</style>