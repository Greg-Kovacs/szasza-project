<template>
<div id="header">
  <b-navbar toggleable="sm" type="dark" variant="dark">
    <b-navbar-toggle target="nav-text-collapse-"></b-navbar-toggle>
    <b-navbar-brand class="text-left">Make Up by<br><span>Alexandra Szabó</span></b-navbar-brand>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-text></b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
    name: "Header",
    data() {
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
#header {
  width:  100%;
  height: 100%;
}
</style>