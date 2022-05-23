<template>
  <div class="box">
    <b-card bg-variant="dark" title="회원가입" class="mb-3 login-form">
      <div class="id-card">
        <label for="user_id">아이디</label>
        <br />
        <input v-model="credentials.username" type="text" id="user_id" />
      </div>
      <div class="id-card">
        <label for="password1">비밀번호</label>
        <br />
        <input v-model="credentials.password1" type="password" id="password1" />
        <br />
        <label for="password2">비밀번호 재확인</label>
        <br />
        <input v-model="credentials.password2" type="password" id="password2" />
      </div>
      <div class="id-card buttons">
        <b-button variant="danger" @click="signup(credentials)"
          >회원가입</b-button
        >
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SignupView",
  data() {
    return {
      credentials: {
        username: "",
        password1: "",
        password2: "",
      },
    };
  },
  methods: {
    ...mapActions(["signup"]),
  },
};
</script>

<style>
</style>