<template>
  <h4>ref()</h4>
  <p>
    message : {{ message }}
    <button @click="changeMessage">수정</button>
  </p>
  <p>
    count : {{ count }}
    <button @click="btnCountUp">증가</button>
  </p>

  <h4>reactive()</h4>
  <p>
    name : {{ user.name }} / age : {{ user.age }}
    <button @click="changeUser">수정</button>
  </p>

  <h4>computed()</h4>
  <p>
    result : {{ result }}<br />
    result2x : {{ result2x }}<br />
    <button @click="btnIncrement">증가</button>
  </p>

  <p>신라</p>
  <ul>
    <li v-for="person in silla">{{ person.name }}</li>
  </ul>
  <p>조선</p>
  <ul>
    <li v-for="person in joseon">{{ person.name }}</li>
  </ul>

  <h4>watch()</h4>
</template>

<script>
import { ref, reactive, computed, watch } from "vue";

export default {
  name: "MyComponent1",
  setup() {
    // 변수 생성(반응성을 갖는 상태값)
    // ref()        -> 기본타입을 반응형으로 처리하는 API
    // reactive()   -> 참조타입을 반응형으로 처리하는 API
    const message = ref("Hello");
    const count = ref(0);
    const user = reactive({
      name: "홍길동",
      age: 21,
    });

    const result = ref(10);
    const users = reactive([
      { uid: 1, name: "김유신" },
      { uid: 2, name: "김춘추" },
      { uid: 3, name: "장보고" },
      { uid: 4, name: "허준" },
      { uid: 5, name: "이순신" },
    ]);

    // computed API
    const result2x = computed(() => {
      return result.value * 2;
    });

    const silla = computed(() => {
      return users.filter((user) => {
        return user.uid <= 3;
      });
    });

    const joseon = computed(() => users.filter((user) => user.uid > 3));

    // watch API
    watch(result, (current, prev) => {
      console.log("이전값 : " + prev);
      console.log("현재값 : " + current);
    });

    // methods API
    function changeMessage() {
      // ref 반응형 변수의 값 참조는 value 속성
      message.value = "Welcome";
    }

    const btnCountUp = function () {
      count.value++;
    };

    const changeUser = () => {
      user.name = "김유신";
      user.age = 23;
    };

    const btnIncrement = () => {
      result.value++;
    };

    return {
      message,
      count,
      user,
      result,
      result2x,
      changeMessage,
      btnCountUp,
      changeUser,
      btnIncrement,
      silla,
      joseon,
    };
  },
};
</script>

<style scoped></style>
