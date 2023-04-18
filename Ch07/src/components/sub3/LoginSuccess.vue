<template>
  <h4>로그인 성공</h4>
  <p>
    {{ user.nick }} 님 반갑습니다.
    <a href="#" @click.prevent="logout">로그아웃</a>
  </p>
</template>
<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const user = computed(() => {
  return store.getters.getUser;
});

const logout = () => {
  localStorage.removeItem("accessToken");
  router.push("/jwt/login");
};
</script>
<style scoped></style>
