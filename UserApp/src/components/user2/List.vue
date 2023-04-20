<template>
  <h4>User2 목록</h4>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>휴대폰</th>
      <th>나이</th>
      <th>관리</th>
    </tr>
    <tr v-for="user in user.items">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.age }}</td>
      <td>{{ user.age }}</td>
      <td>
        <a href="#">수정</a>/
        <a href="#">삭제</a>
      </td>
    </tr>
  </table>
</template>
<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { onBeforeMount, reactive } from "vue";

const user = reactive({
  items: [],
});

onBeforeMount(() => {
  axios
    .get("http://localhost:8080/Ch09/user1s")
    .then((response) => {
      console.log(response);
      user.items = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
<style scoped></style>
