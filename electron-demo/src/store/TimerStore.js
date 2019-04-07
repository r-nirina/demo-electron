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

	},
	
	actions: {
		createTimer({ commit }, { _hour, _minute, _second }) {
			const milliseconds = toMilliseconds({ _hour, _minute, _second })
			commit("initTimer", milliseconds)
		}
	}
}
