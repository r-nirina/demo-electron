const getInitialState = () => ({
	hour: 0,
	minute: 0,
	second: 0,
	intervalID: null
})

export default {
	namespaced: true,
	
	state: getInitialState(),
	
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
		
		resetHour(state) {
			state.hour = 0
		},
		
		resetMinute(state) {
			state.minute = 0
		},
		
		resetSecond(state) {
			state.second = 0
		},
		
		setIntervalID(state, _intervalID) {
			state.intervalID = _intervalID
		}
	},
	
	actions: {
		start(context) {
			const intervalID = setInterval(() => {
				context.commit("incrementSecond")
				
				if (context.state.second >= 60) {
					context.commit("resetSecond")
					context.commit("incrementMinute")
				}
				
				if (context.state.minute >= 60) {
					context.commit("resetMinute")
					context.commit("incrementHour")
				}
			}, 1000)
			context.commit("setIntervalID", intervalID)
		},
		
		stop(context) {
			clearInterval(context.state.intervalID)
		},
		
		reset(context) {
			context.commit("resetSecond")
			context.commit("resetMinute")
			context.commit("resetHour")
			context.dispatch("stop")
		}
	}
}
