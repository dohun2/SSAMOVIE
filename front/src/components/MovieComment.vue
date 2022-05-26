<template>
  <div>
    <p>{{ comment.user.username }}</p>
    <h2>{{ comment.content }}</h2>
    <button @click="deleteMovieComment(payload)">삭제</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MovieComment",
  props: {
    comment: {
      type: Object,
    },
  },
  data() {
    return {
      payload: {
        movieId: this.comment.movie,
        commentPk: this.comment.pk,
        content: this.comment.content,
      },
    };
  },
  methods: {
    ...mapActions(["deleteMovieComment"]),
  },
};
</script>

<style>
</style>