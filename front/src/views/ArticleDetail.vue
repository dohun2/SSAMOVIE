<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>

    <div v-if="isAuthor">
      <router-link :to="{ name: 'articleEdit', params: { articleId } }">
        <button>수정하기</button>
      </router-link>
      <button @click="deleteArticle(articleId)">삭제하기</button>
    </div>

    <comment-list :comments="article.comments"></comment-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CommentList from "@/components/CommentList.vue";

export default {
  name: "ArticleDetailView",
  components: {
    CommentList,
  },
  data() {
    return {
      articleId: this.$route.params.articleId,
    };
  },
  computed: {
    ...mapGetters(["article", "isAuthor"]),
  },
  methods: {
    ...mapActions(["fetchArticle", "deleteArticle"]),
  },
  created() {
    this.fetchArticle(this.articleId);
  },
};
</script>

<style>
</style>