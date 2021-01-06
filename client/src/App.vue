<template>
  <div id="app">
    <b-grid>
      <b-row>
        <b-col>
          <Header />
        </b-col>
      </b-row>
      <b-row class="text-center">
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
</style>
