import { toMilliseconds } from "../assets/utils"

const getInitialState = () => ({
	nextID: 1,
	timers: []
})

export default {
	namespaced: true,

	state: getInitialState(),

	getters: {},

	mutations: {
		initTimer(state, _milliseconds) {

		}
	},

	actions: {
		createTimer({ commit }, { hour, minute, second }) {
			const milliseconds = toMilliseconds({ hour, minute, second })
			commit("initTimer", milliseconds)
		}
	}
}
