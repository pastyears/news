import Vue from "vue";
import Router from "vue-router";
const Home = () => import("@/views/Home");
const Recommend = () => import("@/views/Recommend");
const Sociology = () => import("@/views/Sociology");
const Science = () => import("@/views/Science");
const Sports = () => import("@/views/Sports");
const Hot = () => import("@/views/Hot");
const Discover = () => import("@/views/Discover");
const Mine = () => import("@/views/Mine");
const Login = () => import("@/views/Login");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: "/home",
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
    },
    {
      path: "/hot",
      name: "Hot",
      component: Hot
    },
    {
      path: "/discover",
      name: "Discover",
      component: Discover
    },
    {
      path: "/mine",
      name: "Mine",
      component: Mine
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});
