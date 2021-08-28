<template>
<div id="header">
  <b-navbar sticky id="navbar" toggleable="sm" type="dark" variant="dark">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-navbar-brand class="logo">
      <span @click="navigateToFacebook()" id="header_name">Alexandra Szabó</span>
    </b-navbar-brand>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-nav-text>
        <div id="paths">
          <span @click="navigateToHome()" id="home"><u>Home</u></span>
          <span @click="navigateToAbout()" id="about"><u>About</u></span>
          <span @click="navigateToAlbums()" id="albums"><u>Albums</u></span>
        </div>
      </b-nav-text>
      <b-navbar-nav class="ml-auto">
        <b-nav-form id="social_media">
          <BIconFacebook @click="navigateToFacebook()" id="facebook_logo" />
          <BIconInstagram @click="navigateToInstagram()"  id="instagram_logo" /> 
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>

import { BIconFacebook, BIconInstagram } from 'bootstrap-vue'

export default {
    name: "Header",
    data() {
        return {

        }
    },
    methods: {
      navigateToFacebook () {
        window.location.href = "https://www.facebook.com/makeupbyalexandraszabo"
      },
      navigateToInstagram () {
        window.location.href = "https://www.instagram.com/makeupbyalexandraszabo/"
      },
      navigateToAbout() {
        this.$router.push({ name: 'About'}).catch(error => {
            if (error.name != "NavigationDuplicated") {
              throw error;
            }
        });
      },
      navigateToHome() {
        this.$router.push({ name: 'Home'}).catch(error => {
            if (error.name != "NavigationDuplicated") {
              throw error;
            }
        });
      },
      navigateToAlbums () {
        this.$router.push({ name: 'Albums'}).catch(error => {
            if (error.name != "NavigationDuplicated") {
              throw error;
            }
        });
      }

    },
    created() {
        
    },
    components: {
      BIconFacebook,
      BIconInstagram
    }
}
</script>
<style scoped>
#header {
  width:  100%;
  height: 100%;
}
.logo_img {
  width: 25%;
  height: 25%;
}
.logo{
  width: 20%;
  height: 20%;
}
.logo_link {
  margin-left: 150px;
}
#header_name {
  cursor: pointer;
}
#facebook_logo {
  width: 30px;
  height: 30px;
}
#facebook_logo:hover {
  cursor: pointer;
}
#instagram_logo {
  width: 30px;
  height: 30px;
}
#instagram_logo:hover {
  cursor: pointer;
}
#social_media {
  
  margin-right: 100px;
}
#navbar {
  max-height: 75px;
}
#about:hover {
  cursor: pointer;
}
#paths {
  margin-left: 350px;
}
#home, #about, #albums {
  margin-right: 25px;
}
#home:hover {
  cursor: pointer;
}
#albums:hover {
  cursor: pointer;
}
</style>