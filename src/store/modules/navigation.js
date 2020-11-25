const state = () => ({
  pages: [
    {
      id: "home",
      title: "Home",
      Name: "Home",
      to: "/",
      isActive: true,
      right: false,
      isTabVisible: true
    },
    {
      id: "profile",
      title: "Profile",
      Name: "Profile",
      to: "/profile",
      isActive: false,
      right: false,
      isTabVisible: true
    },
    {
      id: "logout",
      title: "Logout",
      to: "logout",
      isActive: false,
      right: true,
      isTabVisible: false
    },
    {
      id: "login",
      title: "Login",
      to: "login",
      isActive: false,
      right: false,
      isTabVisible: false
    }
  ]
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
  }
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
  }
};

const mutations = {
  setActive(state, id) {
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
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
