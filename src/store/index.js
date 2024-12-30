import { createStore } from "vuex";

const store = createStore({
  state: {
    initTitle: "",
  },
  getters: {
    getTitle(state) {
      return state.initTitle;
    },
  },
  mutations: {
    setTitle(state, value) {
      state.initTitle = value;
    },
  },
});
export default store;