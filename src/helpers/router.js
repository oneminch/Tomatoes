import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import Unfound from "@/views/404.vue";
import Settings from "@/views/Settings.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		alias: "/home",
		component: Home,
	},
	{
		path: "/settings",
		name: "Settings",
		component: Settings,
	},
	{ path: "*", name: "404", component: Unfound },
];

const router = new VueRouter({
	routes: routes,
	mode: "history",
});

export default router;
