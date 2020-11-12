import Vue from "vue";
const state = () => ({
  token: -1
});

const getters = {
  token: (state) => {
    return state.token;
  }
};

const actions = {
  setTokenCookie({ commit }, token) {
    commit("setTokenCookie", token);
    commit("setToken");
  },
  setToken({ commit }) {
    commit("setToken");
  }
};

const mutations = {
  setTokenCookie(state, token) {
    Vue.$cookies.set("token", token);
  },
  setToken(state) {
    state.token = Vue.$cookies.get("token");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
