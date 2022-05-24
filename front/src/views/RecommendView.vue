<template>
  <div class="recommend">
    <h1>추천영화</h1>
    <div>
      <b-button-group>
        <b-button @click="getRandom()">랜덤</b-button>
        <b-dropdown right text="장르별">
          <b-dropdown-item>액션</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>로맨스</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>판타지</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>코미디</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>애니매이션</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>공포</b-dropdown-item>
        </b-dropdown>
      </b-button-group>
    </div>
    <br />
    <div class="row">
      <recommend-movies
        v-for="item in recommend"
        :key="item.id"
        :item="item"
        class="col-2"
      ></recommend-movies>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import RecommendMovies from "../components/RecommendMovies.vue";
export default {
  name: "RecommendView",
  components: {
    RecommendMovies,
  },
  computed: {
    ...mapGetters(["recommend"]),
  },
  methods: {
    ...mapActions(["getRandom"]),
  },
};
</script>

<style>
.recommend {
  background-color: black;
}
</style>