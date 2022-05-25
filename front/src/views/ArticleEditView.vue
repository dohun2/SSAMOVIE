<template>
  <div>
    <b-card class="text-black" title="게시글 수정">
      <form @submit.prevent="updateArticle(updateDate)">
        <label for="title">제목</label>
        <br />
        <input id="title" v-model="updateDate.title" required type="text" />
        <br />
        <label for="content">내용</label>
        <br />
        <textarea
          id="contant"
          v-model="updateDate.content"
          cols="100"
          rows="10"
          required
        >
        </textarea>
        <br />
        <input type="submit" value="수정하기" />
      </form>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AritcleEditView",
  data() {
    return {
      updateDate: {
        id: this.$route.params.articleId,
        title: "",
        content: "",
      },
    };
  },
  computed: {
    ...mapGetters(["article"]),
  },
  methods: {
    ...mapActions(["updateArticle"]),
  },
};
</script>

<style>
</style>