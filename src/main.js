// import Vue from "vue";
// import App from "./App.vue";
// import router from "./router";

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount("#app");

import "./firebase";
import Vue from "vue";
import App from "./App.vue";
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);

new Vue({
  el: "#app",
  render: h => h(App)
});
