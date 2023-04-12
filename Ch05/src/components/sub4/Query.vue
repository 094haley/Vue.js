<template>
  <h4>Query</h4>
  <p>
    query : {{ user }}<br />
    uid : {{ user.uid }}<br />
    name : {{ user.name }}<br />
    age : {{ user.age }}<br />
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
