<template>
  <router-view></router-view>
</template>

<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { onBeforeMount } from "vue";

const router = useRouter();
const store = useStore();

onBeforeMount(() => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken != null) {
    axios
      .get("http://localhost:8080/Voard/user", {
        headers: { "X-AUTH-TOKEN": accessToken },
      })
      .then((response) => {
        console.log(response);
        const user = response.data;
        store.dispatch("setUser", user);
        router.push("/list");
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    router.push("/user/login");
  }
});
</script>
