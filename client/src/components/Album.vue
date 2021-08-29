<template>
    <div>
        <b-row class="imageRow">
            <b-col name="ImageList">
                <div>
                    <imageList @showImg="showImageModal"/>
                    <imageModal ref="choosedImg" :imageUrl="choosedImgName"  v-if="showModal" />
                 </div>
             </b-col>
        </b-row>
    </div> 
</template>
<script>
import imageList from './image_components/ImageList.vue'
import imageModal from './image_components/ImageModal'
export default {
    name: 'Album',
    data(){
        return {
            showModal: false,
            choosedImgName: String
        }
    },
    methods:{
        showImageModal(imageName) {
            this.choosedImgName = imageName
            this.showModal = true
            this.$refs.choosedImg.showModal()
        }
    },
    components: {
        imageList,
        imageModal
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