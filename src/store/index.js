import { createStore } from "vuex";
import { getCookie, setCookie } from "@/utils/cookies";

const featureCardStore = {
  namespaced: true,
  state: {
    featureSelected: null,
  },
  getters: {
    getSelected(state) {
      return state.featureSelected;
    },
  },
  mutations: {
    setSelected(state, value) {
      state.featureSelected = value;
    },
  },
  actions: {},
};

const titleStore = {
  state: {
    title: getCookie("title") || "프로필",
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
};

const store = createStore({
  modules: {
    featureCard: featureCardStore,
    title: titleStore,
  },
});

export default store;
