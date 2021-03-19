import Vue from "vue";
import VueRouter from "vue-router";

import Chat from "@/views/Chat.vue";
import Home from "@/views/Home.vue";
// import Stats from "@/views/Stats.vue";
import Unfound from "@/views/404.vue";
import Settings from "@/views/Settings.vue";
import Test from "@/components/Test.vue";
// import route from "@/views/route.vue";
// import route from "@/views/route.vue";
// import route from "@/views/route.vue";
// import route from "@/views/route.vue";

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
	{ path: "/chat", name: "Chat", component: Chat },
	// { path: "/stats", name: "Stats", component: Stats },
	{ path: "/stats", name: "Test", component: Test },
	// { path: "/failure", name: "FormFailure", component: FormFailure },
	// { path: "/excluded", name: "Excluded", component: Excluded },
	// { path: "/watchlist", name: "Watchlist", component: Watchlist },
	{ path: "*", name: "404", component: Unfound },
];

const router = new VueRouter({
	routes: routes,
	mode: "history",
});

export default router;
