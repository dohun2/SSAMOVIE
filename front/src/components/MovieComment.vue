<template>
  <div>
    <h1>{{ comment.content }}</h1>
  </div>
</template>

<script>
export default {
  name: "MovieComment",
  props: {
    comment: {
      type: Object,
    },
  },
};
</script>

<style>
</style>