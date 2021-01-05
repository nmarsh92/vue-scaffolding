import userService from '../../api/userService';
import store from '../';
const state = () => ({
  user: {
    firstName: null,
    lastName: null,
    email: null,
    isAuthenticated: false
  }
});

const getters = {
  getUser: state => {
    return state.user;
  },
  isAuthenticated: state => {
    return state.user && state.user.isAuthenticated;
  }
};

const actions = {
  login({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      //todo call api with email and password
      userService.login(credentials).then(
        response => {
          commit('setUser', { user: response.user });
          store.dispatch('cookie/setTokenCookie', response.token);
          resolve();
        },
        function(response) {
          reject(response);
        }
      );
    });
  },
  setUserFromToken({ commit }, token) {
    return new Promise((resolve, reject) => {
      userService.getUserFromToken({ token }).then(
        user => {
          if (user) {
            commit('setUser', { user: user });
          }

          resolve();
        },
        function(response) {
          reject(response);
        }
      );
    });
  }
};

const mutations = {
  setUser(state, { user }) {
    state.user.firstName = user.firstName;
    state.user.lastName = user.lastName;
    state.user.email = user.email;
    state.user.isAuthenticated = true;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
