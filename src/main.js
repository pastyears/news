import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "./api";
import path from "./config/path";
import utils from "./lib/utils";

import "@/common/stylus/reset.styl";
import "@/common/stylus/layout.styl";

// import "@/common/stylus/common.styl";

Vue.config.productionTip = false;

Vue.use(api);
Vue.use(path);
Vue.use(utils);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
