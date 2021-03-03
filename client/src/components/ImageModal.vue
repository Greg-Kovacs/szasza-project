<template>
    <b-modal v-model="isActive" size="lg" id="imageModal">
        <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            img-height="480"
        >
            <b-carousel-slide
                v-for="fileName in fileNames" :key="fileName.id"
                caption="First slide"
                :img-src="getImageFromAPI + fileName"
            />
        </b-carousel>
    </b-modal>
</template>
<script>

const URL = 'http://localhost:3000/image/'

export default {
    props: {
        fileNames: Array,
        showModal: Boolean
    },
    data () {
        return {
            isActive: Boolean
        }
    },
    computed: {
        getImageFromAPI(){
            return URL
        }
    },
    methods: {
        setIsActiveToTrue() {
            this.isActive = this.showModal
        }

    },
    created() {
        this.setIsActiveToTrue()

    }
}
</script>
<style scoped>

</style>