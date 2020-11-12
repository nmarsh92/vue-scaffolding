import Vue from "vue";
import Vuex from "vuex";
import authentication from "./modules/authentication";
import navigation from "./modules/navigation";
import cookie from "./modules/cookie";
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    authentication,
    navigation,
    cookie
  },
  strict: debug
  //plugins: debug ? [createLogger()] : [],
});
