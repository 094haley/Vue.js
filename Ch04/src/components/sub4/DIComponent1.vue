<template>
  <h4>DIComponent1</h4>
  <p>
    name : {{ user1.name }}<br />
    age: {{ user1.age }}<br />
    addr: {{ user1.addr }}<br />
  </p>

  <DIComponent2></DIComponent2>
</template>

<script setup>
import { inject, reactive, provide } from "vue";
import DIComponent2 from "./DIComponent2.vue";

const user1 = inject("user1");
const user2 = reactive({
  name: "김유신",
  age: 23,
  addr: "김해시",
});

provide("user2", user2);
</script>

<style scoped></style>
