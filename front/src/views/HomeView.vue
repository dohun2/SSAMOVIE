<template>
  <div class="home">
    <h1>인기영화</h1>
    <div class="movie row">
      <home-movies
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        class="col-2"
      >
      </home-movies>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HomeMovies from "../components/HomeMovies.vue";

export default {
  name: "HomeView",
  components: {
    HomeMovies,
  },
  computed: {
    ...mapGetters(["movies"]),
  },
  methods: {
    ...mapActions(["fetchMovies"]),
  },
  created() {
    this.fetchMovies();
  },
};
</script>

<style>
.home {
  background-color: black;
}
.movie {
  display: flex;
}
</style>