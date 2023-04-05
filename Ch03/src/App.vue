<template>
  <h3>Ch03.Component 실습</h3>

  <h4>1) 컴포넌트 기본</h4>
  <Component1></Component1>
  <Component2 />
  <Component3 />
  <hr />

  <h4>2) Options API</h4>
  <ApiComponent1 />
  <ApiComponent2 />
  <ApiComponent3 />
  <ApiComponent4 />
  <hr />

  <h4>3) 컴포넌트 통신</h4>
  <UComponent1 :name="name" />
  <UComponent1 :name="name" :age="age" />
  <ul>
    <UComponent2 v-for="city in cities" :city="city" />
  </ul>
  <UComponent3 c3Name="김유신" c3Age="23" />
  <UComponent5 v-on:myShow="showMyData" />
  <p v-if="value1 && value2">
    value1 : {{ value1 }}<br />
    value2 : {{ value2 }}<br />
  </p>
  <hr />

  <h4>4) 컴포넌트 생명주기</h4>
  <NewComponent v-if="isShow" />
  <button @click="btnRemove">컴포넌트 {{ tit }}</button>
  <hr />
</template>

<script>
/**
 * 날짜 : 2023/04/05
 * 이름 : 이해빈
 * 내용 : Ch03.컴포넌트
 *
 * 컴포넌트(Component)
 *  - 화면 구성요소를 독립적인 모듈형태로 구성하기위한 SFC 구조체
 *  - Options API를 이용한 컴포넌트 기능 구현
 */

import Component1 from "./components/sub1/Component1.vue";
import Component2 from "./components/sub1/Component2.vue";
import Component3 from "./components/sub1/Component3.vue";
import ApiComponent1 from "./components/sub2/ApiComponent1.vue";
import ApiComponent2 from "./components/sub2/ApiComponent2.vue";
import ApiComponent3 from "./components/sub2/ApiComponent3.vue";
import ApiComponent4 from "./components/sub2/ApiComponent4.vue";
import UComponent1 from "./components/sub3/UComponent1.vue";
import UComponent2 from "./components/sub3/UComponent2.vue";
import UComponent3 from "./components/sub3/UComponent3.vue";
import UComponent5 from "./components/sub3/UComponent5.vue";
import NewComponent from "./components/sub4/NewComponent.vue";

export default {
  name: "App",
  data() {
    return {
      name: "홍길동",
      age: 21,
      cities: ["서울", "대전", "대구", "부산", "광주"],
      value1: "",
      value2: 0,
      isShow: true,
      tit: "제거",
    };
  },
  components: {
    Component1,
    Component2,
    Component3,
    ApiComponent1,
    ApiComponent2,
    ApiComponent3,
    ApiComponent4,
    UComponent1,
    UComponent2,
    UComponent3,
    UComponent5,
    NewComponent,
  },
  methods: {
    showMyData: function (data) {
      this.value1 = data.name;
      this.value2 = data.age;
    },
    btnRemove: function () {
      if (this.isShow) {
        this.isShow = false;
        this.tit = "생성";
      } else {
        this.isShow = true;
        this.tit = "제거";
      }
    },
  },
};
</script>
