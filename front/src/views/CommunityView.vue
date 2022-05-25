<template>
  <div>
    <h1>커뮤니티</h1>
    <new-article></new-article>
    <div v-for="article in articles" :key="article.id">
      <router-link
        :article="article"
        :to="{ name: 'article', params: { articleId: article.id } }"
      >
        {{ article.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import NewArticle from "../components/NewArticle.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "CommunityView",
  components: {
    NewArticle,
  },
  methods: {
    ...mapActions(["fetchArticles"]),
  },
  computed: {
    ...mapGetters(["articles"]),
  },
  created() {
    this.fetchArticles();
  },
};
</script>

<style>
</style>