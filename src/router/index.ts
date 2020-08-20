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
      import(/* webpackChunkName: "movie" */ "../views/Movie.vue")
  },
  {
    path: "*",
    name: "PageNotFound",
    component: () =>
      import(
        /* webpackChunkName: "page-not-found" */ "../views/PageNotFound.vue"
      )
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

export default router;
