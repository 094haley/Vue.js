<template>
  <h4>NewComponent</h4>
  <p>카운트 : {{ count }}</p>
  <button v-on:click="countOne">증가</button>
</template>

<script>
export default {
  name: "NewComponent",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    countOne: function () {
      this.count++;
    },
  },
  beforeCreate: function () {
    console.log("beforeCreate...");
  },
  created: function () {
    console.log("created...");
  },
  beforeMount: function () {
    console.log("beforeMount...");
  },
  mounted: function () {
    console.log("mounted...");
  },
  beforeUpdate: function () {
    console.log("beforeUpdate...");
  },
  updated: function () {
    console.log("updated...");
  },
  beforeUnmount: function () {
    console.log("beforeUnmount...");
  },
  unmounted: function () {
    console.log("unmounted...");
  },
};
</script>

<style scoped></style>
