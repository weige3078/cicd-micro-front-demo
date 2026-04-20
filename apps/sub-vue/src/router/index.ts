import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

export default createRouter({
  history: createWebHistory("/vue"),
  routes: [{ path: "/:pathMatch(.*)*", name: "home", component: Home }],
});
