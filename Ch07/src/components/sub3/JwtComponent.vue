<template>
  <h4>JWT API 실습</h4>

  <router-view></router-view>
</template>

<script setup>
import axios from "axios";
import Login from "./Login.vue";
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

const store = useStore();

onBeforeMount(() => {
  const accessToken = localStorage.getItem("accessToken");
  console.log("accessToken : " + accessToken);

  axios
    .get("http://localhost:8080/Voard/user", {
      headers: { "X-AUTH-TOKEN": accessToken },
    })
    .then((response) => {
      console.log(response);
      const user = response.data;
      store.dispatch("setUser", user);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<style scoped></style>
