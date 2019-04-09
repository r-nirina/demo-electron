import { toMilliseconds, toTime } from "../assets/utils"

const getID = (id) => `id_${id}`

const getInitialState = () => ({
	nextID: 1,
	timers: {}
})

export default {
	namespaced: true,

	state: getInitialState(),

	getters: {
		isRunning: (state) => (id) => {
			return state.timers[getID(id)].intervalID !== null
		},
		isFinished: (state) => (id) => {
			const { initial, current } = state.timers[getID(id)]
			return toMilliseconds(initial) < toMilliseconds(current)
		},
		progress: (state) => (id) => {
			const { initial, current } = state.timers[getID(id)]
			return toMilliseconds(current) / toMilliseconds(initial)
		},
		timersArray: (state) => {
			const arr = []
			for (let i = 1; i < state.nextID; i++) {
				arr.push(state.timers[getID(i)])
			}
			return arr
		}
	},

	mutations: {
		registerTimer(state, _timer) {
			state.timers[getID(_timer.id)] = _timer
		},

		clearTimer(state, _id) {
			state.timers[getID(_id)] = null
		},

		incrementTimer(state, _id) {
			const milliseconds = toMilliseconds(state.timers[getID(_id)].current)
			state.timers[getID(_id)].current = toTime(milliseconds + 100)
		},
		
		setIntervalID(state, { _id, _intervalID }) {
			state.timers[getID(_id)].intervalID = _intervalID
		},

		resetIntervalID(state, _id) {
			state.timers[getID(_id)].intervalID = null
		},

		incrementID(state) {
			state.nextID = state.nextID + 1
		}
	},

	actions: {
		createTimer({ state, commit, dispatch }, { hour, minute, second }) {
			const id = state.nextID
			const timer = {
				id,
				initial: { hour, minute, second },
				current: { hour: 0, minute: 0, second: 0 },
				intervalID: null
			}
			commit("registerTimer", timer)
			commit("incrementID")
			dispatch("startTimer", id)
		},

		deleteTimer({ state, dispatch, commit }, _id) {
			if (state.timers[getID(_id)].intervalID !== null) dispatch("stopTimer", _id)
			commit("clearTimer", _id)
		},

		startTimer({ state, commit, dispatch, getters }, _id) {
			const { intervalID } = state.timers[getID(_id)]
			if (intervalID !== null) return

			const finished = (getters.isFinished(_id))
			if (finished) return

			const _intervalID = setInterval(() => {
				const finished = (getters.isFinished(_id))
				if (finished) {
					dispatch("stopTimer", _id)
					dispatch("notifyTimerEnd", _id)
				} else {
					commit("incrementTimer", _id)
				}
			}, 100)

			commit("setIntervalID", { _id, _intervalID })
		},

		stopTimer({ state, commit }, _id) {
			clearInterval(state.timers[getID(_id)].intervalID)
			commit("resetIntervalID", _id)
		},

		notifyTimerEnd({ state, dispatch }, _id) {
			// Notification via l'API HTML5
			new Notification("Temps écoulé", {
				body: `Le timer ${_id} est arrivé au bout du décompte`
			})

			// Notification via l'API d'Electron
			const message = {
				type: "timer_finished",
				data: state.timers[getID(_id)]
			}
			dispatch("electron/sendToMain", message, { root: true })
		}
	}
}
