import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
<<<<<<< HEAD
import api from "./api";
import path from "./config/path";
import utils from "./lib/utils";

import "@/common/stylus/reset.styl";
import "@/common/stylus/layout.styl";

// import "@/common/stylus/common.styl";

=======
import '@/common/stylus/reset.styl';
import '@/common/stylus/layout.styl';
// import '@/common/stylus/common.styl';
>>>>>>> c1406a78b6db8339d710939c0a8f1f6ca51c994d
Vue.config.productionTip = false;

Vue.use(api);
Vue.use(path);
Vue.use(utils);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
