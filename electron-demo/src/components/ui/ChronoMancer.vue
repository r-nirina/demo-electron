<template>
	<div class="container">
		<div class="timer">
			<div class="cell">
				<div class="numbers hour">{{ hour }}</div>
			</div>
			<span>:</span>
			<div class="cell">
				<div class="numbers minute">{{ minute }}</div>
			</div>
			<span>:</span>
			<div class="cell">
				<div class="numbers second">{{ second }}</div>
			</div>
			<span>.</span>
			<div class="cell">
				<div class="numbers millisecond">{{ millisecond }}</div>
			</div>
		</div>
		
		<div class="controls">
			<button class="start" @click="start">Start</button>
			<button class="stop" @click="stop">Stop</button>
			<button class="reset" @click="reset">Reset</button>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
	name: "ChronoMancer",
	
	computed: {
		...mapState({
			hour: state => state.chrono.hour,
			minute: state => state.chrono.minute,
			second: state => state.chrono.second,
			millisecond: state => state.chrono.millisecond
		})
	},
	
	methods: {
		...mapActions({
			start: "chrono/start",
			stop: "chrono/stop",
			reset: "chrono/reset",
		})
	}
}
</script>

<style lang="scss" scoped>

</style>
