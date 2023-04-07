<template>
  <h3>Ch04.Composition API 실습</h3>

  <h4>1)setup</h4>
  <Component1 />
  <Component2 name="홍길동" age="21" addr="부산" />
  <Component3 v-on:myEvent="receiveUser"></Component3>
  <hr />

  <h4>2)reactivity</h4>
  <MyComponent1 />
  <hr />

  <h4>3)Lifecycle Hooks</h4>
  <hr />

  <h4>4)Dependency Inject</h4>
  <hr />
</template>

<script>
import Component1 from "./components/sub1/Component1.vue";
import Component2 from "./components/sub1/Component2.vue";
import Component3 from "./components/sub1/Component3.vue";
import MyComponent1 from "./components/sub2/MyComponent1.vue";

export default {
  name: "App",
  components: { Component1, Component2, Component3, MyComponent1 },
  setup() {
    const receiveUser = (data) => {
      console.log("receiveUser name : " + data.name);
      console.log("receiveUser age : " + data.age);
    };
    return { receiveUser };
  },
};
</script>
