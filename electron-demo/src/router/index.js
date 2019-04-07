import Vue from "vue"
import Router from "vue-router"

import ChronoView from "../components/views/ChronoView.vue"
import TimerView from "../components/views/TimerView.vue"

Vue.use(Router)

const router = new Router({
	routes: [
		{ path: "/", redirect: { name: "Chronomètre" } },
		{ path: "/chrono", name: "Chronomètre", component: ChronoView },
		{ path: "/timer", name: "Minuteur", component: TimerView }
	]
})

export default router
