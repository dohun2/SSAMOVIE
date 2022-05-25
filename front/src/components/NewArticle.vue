<template>
  <div>
    <div class="mb-3">
      <b-button v-b-toggle.my-collapse>게시글 작성하기</b-button>
    </div>

    <b-collapse id="my-collapse">
      <b-card class="text-black" title="새로운 게시글">
        <form @submit.prevent="created">
          <label for="title">제목</label>
          <br />
          <input
            id="title"
            placeholder="제목을 입력하세요"
            required
            type="text"
            v-model="article.title"
          />
          <br />
          <label for="content">내용</label>
          <br />
          <textarea
            id="contant"
            placeholder="내용을 입력하세요"
            cols="100"
            rows="10"
            required
            v-model="article.content"
          >
          </textarea>
          <br />
          <input type="submit" value="작성하기" />
        </form>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NewArticle",
  data() {
    return {
      article: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    ...mapActions(["createArticle"]),
    created() {
      this.createArticle(this.article);
    },
  },
};
</script>

<style>
</style>