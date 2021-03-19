import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import "./assets/styles/index.css";
import { vueStore } from "@/store";
import router from "@/helpers/router";
import VueEllipseProgress from "vue-ellipse-progress";

Vue.use(Vuex);
Vue.use(VueEllipseProgress, "vep");

Vue.config.productionTip = false;

export const eventBus = new Vue();

const store = new Vuex.Store(vueStore);

new Vue({
	store,
	router,
	render: (h) => h(App),
}).$mount("#app");
