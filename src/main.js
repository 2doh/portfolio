import { createApp } from "vue";
import App from "./App.vue";
// import 를 이용한 css 불러들이기
import "./assets/reset.css";
import "./assets/global.css";
import store from "./store/index";
const app = createApp(App);
app.use(store); // vuex 사용
app.mount("#app");
