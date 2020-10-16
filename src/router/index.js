import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      protected: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.protected && !store.getters["authentication/isAuthenticated"]) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else {
    if (store.getters["authentication/isAuthenticated"]) {
      store.dispatch("navigation/showTab", "logout");
    }

    next();
  }
});

export default router;
