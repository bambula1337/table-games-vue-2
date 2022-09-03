import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CatalogView from "../views/CatalogView.vue";
import ErrorView from "@/views/ErrorView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      layout: "default",
    },
  },
  {
    path: "/catalog",
    name: "catalog",
    component: CatalogView,
    meta: {
      layout: "default",
    },
  },
  {
    path: "/error",
    name: "error",
    component: ErrorView,
    meta: {
      layout: "error",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
