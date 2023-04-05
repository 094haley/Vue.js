<template>
  <h4>UComponent1</h4>
  <p>
    name: {{ name }}<br />
    age: {{ age }}<br />
  </p>
</template>

<script>
export default {
  name: "UComponent1",
  // 상위 컴포넌트에서 속성으로 전달하는 값을 수신하기 위한 API
  props: ["name", "age"],
};
</script>

<style scoped></style>
