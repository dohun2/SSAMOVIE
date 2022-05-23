<template>
  <div class="box">
    <b-card bg-variant="dark" title="로그인" class="mb-3 login-form">
      <error-list v-if="authError"></error-list>
      <div class="id-card">
        <label for="user_id">아이디</label>
        <br />
        <input v-model="credentials.username" type="text" id="user_id" />
      </div>
      <div class="id-card">
        <label for="password">비밀번호</label>
        <br />
        <input v-model="credentials.password" type="password" id="password" />
      </div>
      <div class="id-card buttons">
        <b-button @click="login(credentials)" class="me-1" variant="danger"
          >로그인</b-button
        >
        <b-button @click="goSignup" class="me-1" variant="danger"
          >회원가입</b-button
        >
      </div>
    </b-card>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions, mapGetters } from "vuex";
import ErrorList from "../components/ErrorList.vue";

export default {
  name: "LoginView",
  components: {
    ErrorList,
  },
  data() {
    return {
      credentials: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters(["authError"]),
  },
  methods: {
    goSignup() {
      router.push("signup");
    },
    ...mapActions(["login"]),
  },
};
</script>

<style>
.box {
  height: 100vh;
  widows: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
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