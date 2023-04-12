import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store/index.js";

const app = createApp(App);

// vuex 전역 스토어 사용
app.use(store);

app.mount("#app");
