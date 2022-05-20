<template>
  <div class="d-flex justify-content-center">
    <b-card title="로그인" style="max-width: 20rem" class="mb-3">
      <div class="id-card">
        <label for="user_id">아이디</label>
        <br />
        <input type="text" id="user_id" />
      </div>
      <div class="id-card">
        <label for="password">패스워드</label>
        <br />
        <input type="text" id="password" />
      </div>
      <div class="id-card">
        <b-button class="me-1" variant="primary">로그인</b-button>
        <b-button class="ms-1" variant="primary">회원가입</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "LoginView",
};
</script>

<style>
.id-card {
  margin-bottom: 10px;
}
</style>