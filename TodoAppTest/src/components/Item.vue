<template>
  <li v-for="(todo, index) in todos">
    <i class="fa fa-check" aria-hidden="true"></i>
    <span>{{ todo }}</span>
    <button @click="btnDeleteTodo(index)">삭제</button>
  </li>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Item",
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters.todos);

    const btnDeleteTodo = (index) => {
      store.dispatch("removeTodo", index);
    };

    return {
      todos,
      btnDeleteTodo,
    };
  },
};
</script>

<style scoped></style>
