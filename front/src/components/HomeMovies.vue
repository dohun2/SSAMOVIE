<template>
  <div class="movie-item">
    <b-card
      :img-src="url"
      img-alt="Image"
      img-top
      tag="movie"
      style="max-width: 12rem"
      class="mb-2 bg-black"
    >
    </b-card>
  </div>
</template>

<script>
export default {
  name: "HomeMovies",
  data() {
    return {
      url: `https://image.tmdb.org/t/p/original${this.movie.poster_path}`,
    };
  },
  props: {
    movie: {
      type: Object,
    },
  },
};
</script>

<style>
</style>