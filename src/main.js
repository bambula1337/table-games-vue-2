import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//Global Components
import ButtonOrangeDefault from "@/components/Global/Buttons/ButtonOrangeDefault.vue";

Vue.config.productionTip = false;

Vue.component("button-orange-default", ButtonOrangeDefault);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
