import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    todos: [],
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    REMOVE_TODO(state, index) {
      state.todos.splice(index, 1);
    },
    CLEAR_TODO(state) {
      state.todos = [];
    },
    GET_TODOS(state, todos) {
      todos.forEach((todo, index) => {
        state.todos.push(todo.content);
      });
    },
  },
  actions: {
    addTodo(context, todo) {
      context.commit("ADD_TODO", todo);
    },
    removeTodo(context, index) {
      context.commit("REMOVE_TODO", index);
    },
    clearTodo(context) {
      context.commit("CLEAR_TODO");
    },
    getTodos(context) {
      axios
        .get("http://localhost:8080/todos")
        .then((response) => {
          console.log(response);
          const todos = response.data;
          context.commit("GET_TODOS", todos);
        })
        .catch((error) => {
          throw error;
        });
    },
  },
  getters: {
    todos(state) {
      return state.todos;
    },
  },
});

export default store;
