<template>
    <div>
        <b-alert show variant="danger" dismissible>
            {{error}}
        </b-alert>
    </div>
</template>
<script>
export default {
    props: {
        error: String
    }
    
}
</script>
<style scoped>

</style>