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
      <form @submit.prevent="onVote()">
        <input v-model="content" type="text" placeholder="평점 남기기" />
        <input type="submit" value="작성" />
      </form>
      <movie-comment
        v-for="comment in movie.comments"
        :key="comment.pk"
      ></movie-comment>
    </b-modal>
  </div>
</template>

<script>
import MovieComment from "@/components/MovieComment.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MovieDetail",
  components: {
    MovieComment,
  },
  data() {
    return {
      content: "",
    };
  },
  methods: {
    ...mapActions(["createMovieComment"]),
    onVote() {
      this.createMovieComment({
        movieId: this.movie.id,
        content: this.content,
      });
      this.content = "";
    },
  },
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