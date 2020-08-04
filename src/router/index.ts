import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Movies from "../views/Movies.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Movies",
    component: Movies
  },
  {
    path: "/movie/:key",
    name: "Movie",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Movie.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
