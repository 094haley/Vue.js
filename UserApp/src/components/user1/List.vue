<template>
  <h4>User1 목록</h4>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>휴대폰</th>
      <th>나이</th>
      <th>관리</th>
    </tr>
    <tr v-for="user in state.users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
      <td>
        <a href="#" @click.prevent="modifyUser1(user)">수정</a>/
        <a href="#" @click.prevent="deleteUser1(user)">삭제</a>
      </td>
    </tr>
  </table>
</template>
<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { onBeforeMount, reactive, ref } from "vue";

const router = useRouter();

const state = reactive({
  users: [],
});

const modifyUser1 = (user) => {
  router.push({ name: "User1Modify", params: user });
};
const deleteUser1 = (user) => {
  const result = confirm("정말 삭제하시겠습니까?");
  if (!result) {
    return;
  }

  axios
    .delete(`http://localhost:8080/Ch09/user1/${user.uid}`)
    .then((response) => {
      console.log(response);
      state.users = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

onBeforeMount(() => {
  axios
    .get("http://localhost:8080/Ch09/user1s")
    .then((response) => {
      console.log(response);
      state.users = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
<style scoped></style>
