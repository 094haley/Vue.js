<template>
  <h4>FormResult1</h4>
  <p>
    name : {{ user.name }}<br />
    age : {{ user.age }}<br />
    addr : {{ user.addr }}<br />
  </p>
</template>

<script setup>
import { useRoute } from "vue-router";

// route 생성
const route = useRoute();

// query 데이터 수신
const user = route.query;
</script>

<style scoped></style>
