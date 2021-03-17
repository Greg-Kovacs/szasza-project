<template>
  <div id="app">
    <Header id="navbar"/>
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

import Header from "./components/Header"

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
<style scoped>
#app {
  background:gray;
}

#navbar {
  width: 100%;
  position: sticky;
  top: 0;
  z-index:2;
}
</style>
