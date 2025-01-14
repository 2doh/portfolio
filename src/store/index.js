import { getCookie, setCookie } from "@/utils/cookies";
import { createStore } from "vuex";

const initTitle = getCookie("title") || "목록1";

const store = createStore({
  state: {
    title: initTitle,
  },
  getters: {
    getTitle(state) {
      return state.title;
    },
  },
  mutations: {
    setTitle(state, value) {
      state.title = value;
      setCookie("title", value);
    },
  },
});
export default store;
