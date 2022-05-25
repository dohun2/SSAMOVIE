<template>
  <div>
    <h1>{{ profile.username }}의 프로필</h1>

    <h2>작성한 글</h2>
    <ul>
      <li v-for="article in profile.articles" :key="article.pk">
        <router-link
          :to="{ name: 'article', params: { articleId: article.pk } }"
        >
          {{ article.title }}
        </router-link>
      </li>
    </ul>
    <h2>평점을 남긴 영화</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "UserProfileView",
  computed: {
    ...mapGetters(["profile"]),
  },
  methods: {
    ...mapActions(["fetchProfile"]),
  },
  created() {
    const payload = { username: this.$route.params.username };
    this.fetchProfile(payload);
  },
};
</script>

<style>
</style>