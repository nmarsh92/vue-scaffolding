const state = () => ({
  pages: [
    {
      id: "home",
      title: "Home",
      Name: "Home",
      to: "/",
      active: true,
      right: false,
      isTabVisible: true,
    },
    {
      id: "logout",
      title: "Logout",
      to: "logout",
      active: false,
      right: true,
      isTabVisible: false,
    },
    {
      id: "login",
      title: "Login",
      to: "login",
      active: false,
      right: false,
      isTabVisible: false,
    },
  ],
});

const getters = {
  leftTabs: (state) => {
    return state.pages.filter(function(page) {
      return !page.right && page.isTabVisible;
    });
  },
  rightTabs: (state) => {
    return state.pages.filter(function(page) {
      return page.right && page.isTabVisible;
    });
  },
};

const actions = {
  selectPage({ commit }, id) {
    commit("setActive", id);
  },
  showTab({ commit }, id) {
    commit("setVisible", { id: id, isTabVisible: true });
  },
  hideTab({ commit }, id) {
    commit("setVisible", { id: id, isTabVisible: false });
  },
};

const mutations = {
  setActive(state, { id }) {
    state.pages.forEach(function(page) {
      if (page.id != id) {
        page.isActive = false;
      }
    });
    var page = state.pages.find(function(page) {
      return page.id == id;
    });

    page.isActive = true;
  },
  setVisible(state, { id, isTabVisible }) {
    var page = state.pages.find(function(page) {
      return page.id == id;
    });
    page.isTabVisible = isTabVisible;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
