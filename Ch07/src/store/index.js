/**
 * Vuex 전역스토어 인스턴스 생성
 */

import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    user: null,
  },

  mutations: {
    SET_USER: function (state, data) {
      state.user = data;
    },
  },

  actions: {
    setUser: function (context, data) {
      context.commit("SET_USER", data);
    },
    login: function (context, user) {
      axios
        .post("http://localhost:8080/Voard/user/login", user)
        .then((response) => {
          console.log(response);
          const token = response.data.accessToken;
          const user = response.data.user;
          console.log("actions user : " + user);

          localStorage.setItem("accessToken", token);
          context.commit("SET_USER", user);
          //router.push("/jwt/loginSuccess");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  getters: {
    getUser: function (state) {
      return state.user;
    },
  },
});

// store 내보내기 > main.js 등록
export default store;
