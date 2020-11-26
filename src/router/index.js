import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BlogArticle from "../views/BlogArticle.vue";
import BlogArchive from "../views/BlogArchive.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/article/:code",
    name: "article",
    component: BlogArticle,
    props: true
  },
  {
    path: "/archive/",
    name: "archive",
    component: BlogArchive
  },
  {
    path: "*",
    name: "not found",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
