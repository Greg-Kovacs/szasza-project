<template>
    <div >
        <b-row v-if="!fetching">
            <b-col cols="4" v-for="album in albumNames" :key="album" class="album" @click="navigateToAlbum(album)">
                <b-carousel
                    id="carousel-fade"
                    style="text-shadow: 0px 0px 2px #000;max-height:650px;max-width:500px;"
                    fade
                    indicators
                    img-height="650"
                    img-width="500"
                >
                    <b-carousel-slide v-for="file in filesPerAlbums[album]" :key="file"
                    :caption="album"
                    :img-src="getImageFromAPI+album+'/'+file"
                    />
                </b-carousel>
            </b-col>
        </b-row>
    </div>
</template>
<script>

const URL = 'http://localhost:3000/albums/'


export default {
    name: 'Albums',
    data() {
        return {
            fetching: true,
            albumNames: [],
            filesPerAlbums:{}
        }
    },
    computed:{
        getImageFromAPI(){
            return URL
        }
    },
    methods: {
        navigateToAlbum(album) {
            this.$router.push(`albums/${album}`)
        },
        async fetchData() {
            await this.fetchAlbums()
            await this.fetchAlbumsPictures()
            this.fetching = false
        },
        async fetchAlbums() {
            this.fetching = true
            await fetch('http://localhost:3000/albums')
                .then(response => response.json())
                .then(data => {
                    this.albumNames = data.albums
                })
            this.fetchAlbumsPictures()
        },
        async fetchAlbumsPictures() {
            this.fetching = true
            for(const album of this.albumNames){
                await fetch(`http://localhost:3000/albums/${album}`)
                    .then(response => response.json())
                    .then(data => {
                        this.filesPerAlbums[album] = data.files
                })
            }
        }
    },
    created() {
        this.fetchData()
    }
}
</script>
<style scoped>

.carousel-item
{
    max-height: 650px;
    max-width: 500px;

}
.carousel-inner{
    max-height: 650px;
    max-width: 500px;
}
.album{

    margin-top: 25px;
    padding: 0;
    margin-left: 110px;
    margin-right: -160px;
    margin-bottom: 20px;
}
#carousel-fade:hover{
    cursor: pointer;
}

</style>