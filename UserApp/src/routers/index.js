import { createRouter, createWebHistory } from "vue-router";
import User1Main from "../components/user1/Main.vue";
import User1List from "../components/user1/List.vue";
import User1Register from "../components/user1/Register.vue";
import User1Modify from "../components/user1/Modify.vue";
import User2Main from "../components/user2/Main.vue";
import User2List from "../components/user2/List.vue";
import User2Register from "../components/user2/Register.vue";
import User3Main from "../components/user3/Main.vue";
import User4Main from "../components/user4/Main.vue";
import User5Main from "../components/user5/Main.vue";
import User6Main from "../components/user6/Main.vue";
import User7Main from "../components/user7/Main.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/user1",
      name: "User1Main",
      component: User1Main,
      children: [
        { path: "", component: User1List },
        { path: "list", name: "User1List", component: User1List },
        { path: "register", name: "User1Register", component: User1Register },
        {
          path: "modify",
          name: "User1Modify",
          component: User1Modify,
          props: true,
        },
      ],
    },
    {
      path: "/user2",
      name: "User2Main",
      component: User2Main,
      children: [
        { path: "", component: User2List },
        { path: "list", name: "User2List", component: User2List },
        { path: "register", name: "User2Register", component: User2Register },
      ],
    },
    { path: "/user3", name: "User3Main", component: User3Main },
    { path: "/user4", name: "User4Main", component: User4Main },
    { path: "/user5", name: "User5Main", component: User5Main },
    { path: "/user6", name: "User6Main", component: User6Main },
    { path: "/user7", name: "User7Main", component: User7Main },
  ],
});

export default router;
