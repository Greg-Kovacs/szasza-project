<template>
    <b-modal id="imageModalId" :hide-footer="true" :hide-header="true" size="custom" ref="imageModal" v-model="isActive">
        <div>
            <VueHoverZoom class="image" :imageUrl="getImageFromAPI"/>
        </div>
    </b-modal>
</template>
<script>
import  VueHoverZoom  from  'vue-hover-zoom'

const URL = 'http://localhost:3000/image/'

export default {
    name: 'ImageModal',
    props: {
        imageUrl: String
    },
    data () {
        return {
            isActive: false
        }
    },
    computed: {
        getImageFromAPI(){
            return URL + this.imageUrl
        }
    },
    methods: {
        setIsActiveToTrue() {
        },
        showModal() {
            this.$refs['imageModal'].show()
        }
    },
    mounted () {
        this.showModal()
    },
    created() {
        this.setIsActiveToTrue()

    },
    components: {
        VueHoverZoom
    }
}
</script>
<style scoped>
.image{
    width: 100%;
    height: 100%;
}
</style>
<style>
#imageModalId .modal-custom{
    max-width: 650px;
    max-height: 650px;
}
</style>