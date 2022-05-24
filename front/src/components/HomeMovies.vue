<template>
  <div class="movie-item">
    <b-card
      :img-src="url"
      img-alt="Image"
      img-top
      tag="movie"
      style="max-width: 12rem"
      class="mb-2 bg-black"
      @click="goDetail"
    >
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "HomeMovies",
  components: {},
  methods: {
    ...mapActions(["detailMovie"]),
    goDetail() {
      this.detailMovie(this.movie.id);
      this.$bvModal.show("bv-modal-example");
    },
  },
  props: {
    movie: {
      type: Object,
    },
  },
  computed: {
    url() {
      return `https://image.tmdb.org/t/p/original${this.movie.poster_path}`;
    },
  },
};
</script>

<style>
</style>