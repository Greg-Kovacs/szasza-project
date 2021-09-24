<template>
    <b-modal id="imageModalId" :hide-footer="true" :hide-header="true" size="custom" ref="imageModal" v-model="isActive">
        <div>
            <vueHoverZoom class="image" :imageUrl="getImageFromAPI"/>
        </div>
    </b-modal>
</template>
<script>
import  vueHoverZoom  from  'vue-hover-zoom'

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
            if(this.imageUrl.includes('album/')) {
                const datas = this.imageUrl.split('/')
                return `http://localhost:3000/albums/${datas[1]}/${datas[2]}`
            }
            return URL + this.imageUrl
        }
    },
    methods: {
        showModal() {
            this.$refs['imageModal'].show()
        }
    },
    mounted () {
        this.showModal()
    },
    components: {
        vueHoverZoom
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