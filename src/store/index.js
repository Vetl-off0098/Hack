import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMainPage: true,
    isListPage: false,
  },
  mutations: {
    goToMainPage(state) {
      state.isListPage = false;
      state.isMainPage = true;
    },
    goToListPage(state) {
      state.isMainPage = false;
      state.isListPage = true;
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    isMainPage: (s) => s.isMainPage,
    isListPage: (s) => s.isListPage,
  },
});
