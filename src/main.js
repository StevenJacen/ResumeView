// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import axios from 'axios';

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalDirectives from "./globalDirectives";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";

import iView from 'iview';
import 'iview/dist/styles/iview.css';
// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});

Vue.prototype.$Chartist = Chartist;
Vue.use(iView);
Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalDirectives);
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
});
