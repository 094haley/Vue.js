<template>
  <div>
    <h4>Parent</h4>
    <router-link to="/parent/child1">Child1</router-link> /
    <router-link to="/parent/child2">Child2</router-link>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Parent",
  setup() {
    return {};
  },
};
</script>
<style scoped>
div {
  border: 1px solid red;
}
</style>
