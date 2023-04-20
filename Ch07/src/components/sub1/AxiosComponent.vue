<template>
  <h4>Axios 실습</h4>

  <h4>Get 예제</h4>
  <button @click="btnGetUsers">Users 요청하기</button>
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

  <h4>Get 전송 파라미터 예제</h4>
  <input type="text" v-model="inputText" />
  <button v-on:click="btnGetUser">User 요청하기</button>
  <p>
    아이디 : {{ user.uid }}<br />
    이름 : {{ user.name }}<br />
    휴대폰 : {{ user.hp }}<br />
    나이 : {{ user.age }}<br />
  </p>

  <h4>Get 단축함수 예제</h4>
  <input type="text" v-model="inputText" placeholder="아이디 입력" />
  <button @click="btnGetUser1">User1 요청</button>
  <button @click="btnGetUser2">User2 요청</button>
  <p>
    아이디 : {{ user.uid }}<br />
    이름 : {{ user.name }}<br />
    휴대폰 : {{ user.hp }}<br />
    나이 : {{ user.age }}<br />
  </p>

  <h4>Post 예제</h4>
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
</template>

<script setup>
import axios from "axios";
import { ref, reactive } from "vue";

const users = ref([]);
const inputText = ref("");
const user = reactive({
  uid: "",
  name: "",
  hp: "",
  age: 0,
});

function btnGetUsers() {
  axios({
    url: "http://localhost:8080/Ch09/user1s",
    method: "get",
    responseType: "json",
  })
    .then((response) => {
      console.log(response.data);
      users.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

const btnGetUser = function () {
  const jsonData = {
    uid: inputText.value,
  };

  axios({
    url: "http://localhost:8080/Ch09/user1",
    method: "get",
    params: jsonData,
    resposeType: "json",
  })
    .then((response) => {
      console.log(response.data);
      const data = response.data;
      user.uid = data.uid;
      user.name = data.name;
      user.hp = data.hp;
      user.age = data.age;
    })
    .catch((error) => {
      console.log(error);
    });
};

const btnGetUser1 = () => {
  const jsonData = { uid: inputText.value };

  axios
    .get("http://localhost:8080/Ch09/user1", { params: jsonData })
    .then((response) => {
      console.log(response.data);
      const data = response.data;
      user.uid = data.uid;
      user.name = data.name;
      user.hp = data.hp;
      user.age = data.age;
    })
    .catch((error) => {
      console.log(error);
    });
};
const btnGetUser2 = async () => {
  const jsonData = { uid: inputText.value };

  try {
    const response = await axios.get("http://localhost:8080/Ch09/user1", {
      params: jsonData,
    });

    console.log(response.data);
    const data = response.data;
    user.uid = data.uid;
    user.name = data.name;
    user.hp = data.hp;
    user.age = data.age;
  } catch (error) {
    console.log(error);
  }
};

const registerUser = () => {
  const jsonData = {
    uid: user.uid,
    name: user.name,
    hp: user.hp,
    age: user.age,
  };

  axios({
    url: "http://localhost:8080/Ch09/user1",
    method: "post",
    data: jsonData,
    responseType: "json",
  })
    .then((response) => {
      console.log(response.data);
      const data = response.data;

      if (data.result > 0) {
        alert("등록 완료!");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style scoped></style>
