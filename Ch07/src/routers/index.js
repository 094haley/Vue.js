/**
 * Router 인스턴스 설정
 */
import { createRouter, createWebHistory } from "vue-router";
import AxiosComponent from "../components/sub1/AxiosComponent.vue";
import RestComponent from "../components/sub2/RestComponent.vue";
import JwtComponent from "../components/sub3/JwtComponent.vue";
import Login from "../components/sub3/Login.vue";
import LoginSuccess from "../components/sub3/LoginSuccess.vue";

// router 인스턴스 생성
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/axios", name: "AxiosComponent", component: AxiosComponent },
    { path: "/rest", name: "RestComponent", component: RestComponent },
    {
      path: "/jwt",
      name: "JwtComponent",
      component: JwtComponent,
      children: [
        { path: "", component: Login },
        { path: "login", component: Login },
        { path: "loginSuccess", component: LoginSuccess },
      ],
    },
  ],
});

// router 내보내기 -> main.js 등록
export default router;
