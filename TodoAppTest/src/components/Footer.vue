<template>
  <footer>
    <button @click="btnClearAll">Clear All</button>
  </footer>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "Footer",
  setup() {
    const store = useStore();

    const btnClearAll = () => {
      store.dispatch("clearTodo");
    };

    return { btnClearAll };
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  height: auto;
  text-align: center;
  box-sizing: border-box;
}
footer > button {
  width: 100px;
  height: 30px;
  color: #e20303;
}
</style>
