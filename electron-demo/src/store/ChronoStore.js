const getInitialState = () => ({
	hour: 0,
	minute: 0,
	second: 0,
	millisecond: 0,
	intervalID: null,
	rounds: []
})

export default {
	namespaced: true,
	
	state: getInitialState(),

	getters: {
		isRunning: state => state.intervalID !== null
	},
	
	mutations: {
		incrementHour(state) {
			state.hour++
		},
		
		incrementMinute(state) {
			state.minute++
		},
		
		incrementSecond(state) {
			state.second++
		},
		
		incrementMillisecond(state) {
			state.millisecond += 10
		},
		
		resetHour(state) {
			state.hour = 0
		},
		
		resetMinute(state) {
			state.minute = 0
		},
		
		resetSecond(state) {
			state.second = 0
		},

		resetMillisecond(state) {
			state.millisecond = 0
		},
		
		setIntervalID(state, _intervalID) {
			state.intervalID = _intervalID
		},

		resetIntervalID(state) {
			state.intervalID = null
		},

		snapRound(state) {
			const { hour, minute, second, millisecond } = state
			state.rounds.unshift({ hour, minute, second, millisecond })
		},

		resetRounds(state) {
			state.rounds = []
		}
	},
	
	actions: {
		start(context) {
			if (context.state.intervalID !== null) return
			const intervalID = setInterval(() => {
				context.commit("incrementMillisecond")

				if (context.state.millisecond >= 1000) {
					context.commit("resetMillisecond")
					context.commit("incrementSecond")
				}
				
				if (context.state.second >= 60) {
					context.commit("resetSecond")
					context.commit("incrementMinute")
				}
				
				if (context.state.minute >= 60) {
					context.commit("resetMinute")
					context.commit("incrementHour")
				}
			}, 10)
			context.commit("setIntervalID", intervalID)
		},
		
		stop(context) {
			clearInterval(context.state.intervalID)
			context.commit("resetIntervalID")
		},
		
		reset(context) {
			context.commit("resetSecond")
			context.commit("resetMinute")
			context.commit("resetHour")
			context.commit("resetMillisecond")
			context.dispatch("stop")
			context.commit("resetRounds")
		}
	}
}
