import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import routes from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

function navigate(to, from, next, isAuth) {
  if (to.meta.protected && !isAuth) {
    next({
      path: "/login",
      query: { redirect: to.fullPath }
    });
  } else {
    if (isAuth) {
      store.dispatch("navigation/showTab", "logout");
    }

    next();
  }
}

router.beforeEach((to, from, next) => {
  let isAuth = store.getters["authentication/isAuthenticated"];
  if (!isAuth) {
    store.dispatch("authentication/setUserFromToken", "fakeToken").then(
      () => {
        isAuth = store.getters["authentication/isAuthenticated"];
        navigate(to, from, next, isAuth);
      },
      () => {
        isAuth = false;
        navigate(to, from, next, isAuth);
      }
    );
  }
});

export default router;
