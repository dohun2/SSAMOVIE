<template>
  <div>
    <b-modal size="lg" id="bv-modal-example" hide-footer>
      <template #modal-title> Detail </template>
      <div class="d-block text-center">
        <img :src="url" alt="" />
        <h3>{{ movie.title }} / {{ movie.genre }}</h3>
        <h4>개봉일: {{ movie.release_date }}</h4>
        <h4>평점: {{ movie.vote_average }}</h4>
        <p>{{ movie.overview }}</p>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MovieDetail",
  methods: {},
  computed: {
    ...mapGetters(["movie"]),
    url() {
      return "https://image.tmdb.org/t/p/w400" + this.movie.poster_path;
    },
  },
};
</script>

<style scope>
b-modal {
  background-color: black;
}
</style>