<template>
  <div>
    <ul>
      <comment-list-item
        v-for="comment in comments"
        :comment="comment"
        :key="comment.pk"
      >
      </comment-list-item>
    </ul>

    <comment-list-form></comment-list-form>
  </div>
</template>

<script>
import CommentListItem from "@/components/CommentListItem.vue";
import CommentListForm from "@/components/CommentListForm.vue";

export default {
  name: "CommentList",
  components: { CommentListForm, CommentListItem },
  props: { comments: Array },
};
</script>

<style>
</style>