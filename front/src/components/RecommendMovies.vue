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
import { mapActions } from "vuex";

export default {
  name: "RecommendMovies",
  data() {
    return {
      url: `https://image.tmdb.org/t/p/original${this.item.poster_path}`,
    };
  },
  methods: {
    ...mapActions(["detailMovie"]),
    goDetail() {
      this.detailMovie(this.item.id);
      this.$bvModal.show("bv-modal-example");
    },
  },
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style>
</style>