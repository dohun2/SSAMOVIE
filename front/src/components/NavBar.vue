<template>
  <div>
    <b-navbar type="dark" variant="black">
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'home' }">홈</b-nav-item>
        <b-nav-item :to="{ name: 'recommend' }">영화추천</b-nav-item>
        <b-nav-item :to="{ name: 'community' }">커뮤니티</b-nav-item>
        <b-nav-item-dropdown :text="currentUser.username" right>
          <b-dropdown-item :to="{ name: 'userprofile', params: { username } }"
            >프로필 보기</b-dropdown-item
          >
          <b-dropdown-item @click="logout">로그아웃</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NavBar",
  methods: {
    ...mapActions(["logout"]),
  },
  computed: {
    ...mapGetters(["currentUser"]),
    username() {
      return this.currentUser.username;
    },
  },
};
</script>

<style>
.nav {
  display: flex;
  justify-content: space-around;
}
</style>