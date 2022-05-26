<template>
  <div class="movie-comment">
    <p>{{ comment.user.username }}</p>
    <h2>{{ comment.content }}</h2>

    <span v-if="currentUser.username === comment.user.username">
      <button @click="OnClick">삭제</button>
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MovieComment",
  props: {
    comment: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  data() {
    return {
      payload: {
        movieId: "",
        commentPk: "",
      },
    };
  },
  methods: {
    ...mapActions(["deleteMovieComment"]),
    OnClick() {
      this.payload.commentPk = this.comment.pk;
      this.payload.movieId = this.comment.movie;
      this.deleteMovieComment(this.payload);
    },
  },
};
</script>

<style>
.movie-comment {
  border: 1px solid black;
}
</style>