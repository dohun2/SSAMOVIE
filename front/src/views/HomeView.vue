<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
import { getActions } from "vuex";

export default {
  name: "HomeView",
  methods: {
    ...getActions([fetchMovies]),
  },
  created: {
    fetchMovies()
  },
};
</script>

<style>
</style>