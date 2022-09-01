import Vue from "vue";
import store from "@/store";
// Global Components
import ButtonOrangeDefault from "@/components/AppButtonOrange.vue";
import axios from "axios";
import router from "./router";
import App from "./App.vue";

Vue.prototype.axios = axios;

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    srcFixer(src) {
      return require(`@/assets${src}`);
    },
  },
});

Vue.component("button-orange-default", ButtonOrangeDefault);

new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");
