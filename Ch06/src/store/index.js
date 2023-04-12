/**
 * Vuex 전역스토어 인스턴스 생성
 */

import { createStore } from "vuex";

const store = createStore({
  // state : store에서 관리하는 상태 (전역변수)를 정의
  state: {
    value: "Hello Vuex",
    count: 0,
    todos: [
      { no: 1, text: "코딩하기", done: true },
      { no: 2, text: "공부하기", done: false },
      { no: 3, text: "운동하기", done: true },
      { no: 4, text: "청소하기", done: false },
      { no: 5, text: "게임하기", done: false },
    ],
  },
  // mutations : store의 상태값을 변경하는 메서드를 정의
  mutations: {
    INCREMENT: function (state) {
      state.count++;
    },
    DECREMENT: function (state) {
      state.count--;
    },
    ADD_ITEM(state, data) {
      state.todos.push(data);
    },
    CLEAR_ITEM: (state) => {
      state.todos = [];
    },
  },
  // actions : 비동기 처리를 수행하고 mutations 메서드를 실행하는 메서드 정의
  actions: {
    increment: function (context) {
      context.commit("INCREMENT");
    },
    decrement: function (context) {
      context.commit("DECREMENT");
    },
    addItem(context, data) {
      context.commit("ADD_ITEM", data);
    },
    clearItem: function (context) {
      context.commit("CLEAR_ITEM");
    },
  },
  // getters : 외부에 상태값을 반환하는 메서드 정의
  getters: {
    getValue: function (state) {
      return state.value;
    },
    getCount: function (state) {
      return state.count;
    },
    getTodos: function (state) {
      return state.todos;
    },
  },
});

// store 내보내기 > main.js 등록
export default store;
