import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/:pathMatch(.*)*", redirect: "/" },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
