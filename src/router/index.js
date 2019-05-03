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
<<<<<<< HEAD
const Register = () => import("@/views/Register");
const Forget = () => import("@/views/Forget");
=======
>>>>>>> c1406a78b6db8339d710939c0a8f1f6ca51c994d

Vue.use(Router);

const router = new Router({
  mode: "history",
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
      path: "/discover",
      name: "Discover",
      component: Discover
    },
    {
      path: "/mine",
      name: "Mine",
<<<<<<< HEAD
      component: Mine,
      meta: {
        login: true
      }
=======
      component: Mine
>>>>>>> c1406a78b6db8339d710939c0a8f1f6ca51c994d
    },
    {
      path: "/login",
      name: "Login",
      component: Login
<<<<<<< HEAD
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
=======
>>>>>>> c1406a78b6db8339d710939c0a8f1f6ca51c994d
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