<template>
  <div id="app">
    <navBarHeader id="navbar"/>
    <b-container fluid name="basegrid">
      <b-row id="body">
         <b-col>
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>

import navBarHeader from "./components/Header"

export default {
  name: 'App',
  components: {
    navBarHeader
  }
}
</script>
<style scoped>
#app {
  background:gray;
  position: relative;
}

#navbar {
  width: 100%;
  position: sticky;
  top: 0;
  z-index:2;
}
</style>
