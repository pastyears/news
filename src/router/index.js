import Vue from "vue";
import Router from "vue-router";
const Home = () => import("@/views/Home");
const Recommend = () => import("@/views/Recommend");
const Sociology = () => import("@/views/Sociology");
const Science = () => import("@/views/Science");
const Sports = () => import("@/views/Sports");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "",
          name: "Recommend",
          component: Recommend
        },
        {
          path: "sociology",
          name: "Sociology",
          component: Sociology
        },
        {
          path: "science",
          name: "Science",
          component: Science
        },
        {
          path: "sports",
          name: "Sports",
          component: Sports
        }
      ]
    }
  ]
});
