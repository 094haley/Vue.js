<template>
  <h4>REST API 실습</h4>
  <h4>GET</h4>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>휴대폰</th>
      <th>나이</th>
    </tr>
    <tr v-for="user in users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
    </tr>
  </table>

  <h4>POST</h4>
  <form v-on:submit.prevent="registerUser">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" /></td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user.name" /></td>
      </tr>
      <tr>
        <td>휴대폰</td>
        <td><input type="text" v-model="user.hp" /></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="number" v-model="user.age" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="등록" />
        </td>
      </tr>
    </table>
  </form>

  <h4>PUT</h4>
  <input type="text" v-model="inputText" />
  <button v-on:click="btnGetUser">수정 데이터 출력</button>
  <form v-on:submit.prevent="modifyUser">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" readonly /></td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user.name" /></td>
      </tr>
      <tr>
        <td>휴대폰</td>
        <td><input type="text" v-model="user.hp" /></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="number" v-model="user.age" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="등록" />
        </td>
      </tr>
    </table>
  </form>

  <h4>DELETE</h4>
  <input type="text" v-model="inputText" />
  <button v-on:click="btnDeleteUser">User 삭제</button>
</template>

<script setup>
import axios from "axios";
import { onBeforeMount, ref, reactive } from "vue";

const inputText = ref(null);
const users = ref([]);
const user = reactive({
  uid: "",
  name: "",
  hp: "",
  age: 0,
});

const btnGetUser = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8080/Ch09/user1/${inputText.value}`
    );

    const data = response.data;
    user.uid = data.uid;
    user.name = data.name;
    user.hp = data.hp;
    user.age = data.age;
  } catch (error) {
    console.log(error);
  }
};

const btnDeleteUser = async () => {
  axios
    .delete(`http://localhost:8080/Ch09/user1/${inputText.value}`)
    .then((response) => {
      console.log(response.data);
      users.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const registerUser = () => {
  axios
    .post("http://localhost:8080/Ch09/user1", user)
    .then((response) => {
      console.log(response.data);
      const data = response.data;

      if (data.result > 0) {
        alert("등록 완료!");

        users.value.push(user);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const modifyUser = () => {
  axios
    .put("http://localhost:8080/Ch09/user1", user)
    .then((response) => {
      console.log(response.data);
      users.value = response.data;
      alert("수정 완료!");
    })
    .catch((error) => {
      console.log(error);
    });
};

onBeforeMount(() => {
  axios
    .get("http://localhost:8080/Ch09/user1s")
    .then((response) => {
      users.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<style scoped></style>
