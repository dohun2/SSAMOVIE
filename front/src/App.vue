<template>
  <div id="app">
    <login-view></login-view>
  </div>
</template>

<script>
import LoginView from "@/views/LoginView.vue";

export default {
  name: "App",
  components: {
    LoginView,
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
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
</style>
