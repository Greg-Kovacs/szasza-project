<template>
<div>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse-"></b-navbar-toggle>
    <b-navbar-brand class="text-left">Make Up by<br><span>Alexandra Szabó</span></b-navbar-brand>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-text><br>Napi bölcsesség: {{bolcsesseg}}</b-nav-text>
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
            bolcsesseg: "",
            bolcsesegek: ["valami","haha","fasz","nem tudom","haha szandra kaka","sziamia cica fiú"]
        }
    },
    methods: {
        napibolcsessegGeneralas() {
            this.bolcsesseg = this.bolcsesegek[Math.floor(Math.random() * this.bolcsesegek.length)];
        }
    },
    created() {
        this.napibolcsessegGeneralas()
    }
}
</script>
<style scoped>
</style>