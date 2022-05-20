<template>
  <div class="box">
    <b-card title="로그인" class="mb-3 login-form">
      <div class="id-card">
        <label for="user_id">아이디</label>
        <br />
        <input type="text" id="user_id" />
      </div>
      <div class="id-card">
        <label for="password">패스워드</label>
        <br />
        <input type="password" id="password" />
      </div>
      <div class="id-card buttons">
        <b-button class="me-1" variant="primary">로그인</b-button>
        <router-link :to="{ name: 'signup' }">11</router-link>
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
.box {
  height: 100vh;
  widows: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 50%;
  max-width: 20rem;
}
.id-card {
  margin-bottom: 10px;
}

.buttons {
  text-align: center;
}
</style>