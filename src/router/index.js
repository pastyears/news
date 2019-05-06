import Vue from "vue";
import Router from "vue-router";
const Home = () => import("@/views/Home");
const Recommend = () => import("@/views/Recommend");
const Sociology = () => import("@/views/Sociology");
const Science = () => import("@/views/Science");
const Sports = () => import("@/views/Sports");
const Hot = () => import("@/views/Hot");
const Collection = () => import("@/views/Collection");
const Mine = () => import("@/views/Mine");
const Login = () => import("@/views/Login");
const Register = () => import("@/views/Register");
const Forget = () => import("@/views/Forget");
const Detail = () => import("@/views/Detail");
const Search = () => import("@/views/Search");

Vue.use(Router);

const router = new Router({
  // mode: "history",
  mode: "hash",
  scrollBehavior (to,from,savePosition) {
    if(savePosition){
      return savePosition;
    }else{
      return {x:0,y:0}
    }
  },
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
          component: Recommend,
          meta: {
            cate: "recommend"
          }
        },
        {
          path: "sociology",
          name: "Sociology",
          component: Sociology,
          meta: {
            cate: "sociology"
          }
        },
        {
          path: "science",
          name: "Science",
          component: Science,
          meta: {
            cate: "science"
          }
        },
        {
          path: "sports",
          name: "Sports",
          component: Sports,
          meta: {
            cate: "sports"
          }
        }
      ]
    },
    {
      path: "/hot",
      name: "Hot",
      component: Hot,
      meta: {
        cate: "hot"
      }
    },
    {
      path: "/collection",
      name: "Collection",
      component: Collection,
      meta: {
        login: true
      }
    },
    {
      path: "/mine",
      name: "Mine",
      component: Mine,
      meta: {
        login: true
      }
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/forget",
      name: "Forget",
      component: Forget
    },
    {
      path: "/detail",
      name: "Detail",
      component: Detail
    },
    {
      path: "/search",
      name: "Search",
      component: Search
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((item) => item.meta.login)) {
    const info = router.app.$local.fetch('news');
    if (info.login) {
      next();
    } else {
      router.push({
        path: '/login',
        query: {
          redirect: to.path.slice(1)
        }
      })
    }
  } else {
    next();
  }
})

export default router;