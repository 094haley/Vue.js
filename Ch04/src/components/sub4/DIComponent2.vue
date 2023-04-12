<template>
  <h4>DIComponent2</h4>

  <p>
    user1 name : {{ user1.name }}<br />
    user1 age : {{ user1.age }}<br />
    user1 addr : {{ user1.addr }}<br />
  </p>
  <p>
    user2 name : {{ user2.name }}<br />
    user2 age : {{ user2.age }}<br />
    user2 addr : {{ user2.addr }}<br />
  </p>
</template>

<script setup>
import { inject } from "vue";

const user1 = inject("user1");
const user2 = inject("user2");
</script>

<style scoped></style>
