import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const routes = [
  { path: "/:pathMatch(.*)*", redirect: "/" },
  {
    path: "/",
    name: "blocks",
    component: () => import("../views/BlocksPage.vue"),
  },
  {
    path: "/balance",
    name: "balance",
    component: () => import("../views/BalancePage.vue"),
  },
  {
    path: "/paralax",
    name: "paralax",
    component: () => import("../views/ParalaxPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  store.dispatch("resetState");
  next();
});

export default router;
