<template>
  <div>
    <b-card
      :img-src="url"
      img-alt="Image"
      img-top
      style="max-width: 12rem"
      class="mb-2 bg-black"
      @click="goDetail"
    >
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeMovies",
  components: {},
  methods: {
    ...mapActions(["detailMovie"]),
    goDetail() {
      this.detailMovie(this.item.id);
      console.log(this.movie);
      this.$bvModal.show("bv-modal-example");
    },
  },
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    url() {
      return `https://image.tmdb.org/t/p/original${this.item.poster_path}`;
    },
    ...mapGetters(["isMovies", "movie"]),
  },
};
</script>

<style>
</style>