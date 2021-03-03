<template>
    <b-modal v-model="showModal" id="imageModal">Hello From My Modal!</b-modal>
</template>
<script>
export default {
    props: {
        showModal: Boolean
    },
    data () {
        return {

        }
    },
    methods: {
    },
    created() {

    }
}
</script>
<style scoped>

</style>