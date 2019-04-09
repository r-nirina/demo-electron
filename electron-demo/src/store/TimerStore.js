import { toMilliseconds } from "../assets/utils"

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
			return initial < current
		},
		progress: (state) => (id) => {
			const { initial, current } = state.timers[getID(id)]
			const ratio = current / initial
			return (ratio < 1)
				? ratio
				: -1
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
			state.timers[getID(_id)].current = state.timers[getID(_id)].current + 100
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
				initial: toMilliseconds({ hour, minute, second, millisecond: 0 }),
				current: 0,
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
		},

		sendProgressState({ getters, dispatch }) {
			const allProgress = getters.timersArray
				.map(timer => {
					const ratio = timer.current / timer.initial
					return (ratio < 1) ? ratio : -1
				})
				.filter(progress => progress > 0)
			const averageProgress = (allProgress.length > 0)
				? allProgress.reduce((acc, x) => acc + x, 0) / allProgress.length
				: -1
			
			// Barre de progression native
			const message = {
				type: "progress_update",
				data: averageProgress
			}
			dispatch("electron/sendToMain", message, { root: true })
		}
	}
}
