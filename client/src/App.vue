<template>
  <div id="app">
    <b-grid>
      <b-row id="navbar">
        <b-col>
          <Header />
        </b-col>
      </b-row>
      <b-row class="text-center" id="body">
        <b-col>
          <router-view/>
        </b-col>
      </b-row>
    </b-grid>
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

#navbar {
  position: sticky;
  top: 0;
  z-index:2;
}
</style>
