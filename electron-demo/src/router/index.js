import Vue from "vue"
import Router from "vue-router"

// import MapView from "../components/pages/MapView"
import ChronoView from "../components/views/ChronoView.vue"

Vue.use(Router)

const router = new Router({
	routes: [
		{ path: "/", redirect: { name: "ChronoView" } },
		{ path: "/chrono", name: "ChronoView", component: ChronoView }
	]
})

export default router
