<template>
  <div id="app">
    <movie-detail></movie-detail>
    <nav-bar v-if="isLoggedIn"></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MovieDetail from "./components/MovieDetail.vue";

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    NavBar,
    MovieDetail,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  height: 100vh;
  width: 100vw;
  background-color: black;
}
</style>
