<template>
  <div>
    <h1>커뮤니티</h1>
    <new-article></new-article>
  </div>
</template>

<script>
import NewArticle from "../components/NewArticle.vue";

export default {
  name: "CommunityView",
  components: {
    NewArticle,
  },
};
</script>

<style>
</style>