<template>
<div class="chrono">
	<div class="timer">
		<div class="cell">
			<div class="numbers hour">{{ display(hour) }}</div>
		</div>
		<div class="cell">
			<div class="separator">:</div>
		</div>
		<div class="cell">
			<div class="numbers minute">{{ display(minute) }}</div>
		</div>
		<div class="cell">
			<div class="separator">:</div>
		</div>
		<div class="cell">
			<div class="numbers second">{{ display(second) }}</div>
		</div>
		<div class="cell">
			<div class="separator">.</div>
		</div>
		<div class="cell">
			<div class="numbers millisecond">{{ display(millisecond) }}</div>
		</div>
	</div>
	
	<div class="controls">
		<button
			class="control reset" @click="snapRound">
			<FontAwesomeIcon icon="stopwatch" size="2x" />
		</button>
		<button v-if="!isRunning"
			class="control start" @click="start">
			<FontAwesomeIcon icon="play" size="2x" />
		</button>
		<button v-else
			class="control stop" @click="stop">
			<FontAwesomeIcon icon="pause" size="2x" />
		</button>
		<button
			class="control reset" @click="reset">
			<FontAwesomeIcon icon="sync" size="2x" />
		</button>
	</div>
</div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
	faPlay,
	faPause,
	faSync,
	faStopwatch
} from "@fortawesome/free-solid-svg-icons"

library.add(faPlay)
library.add(faPause)
library.add(faSync)
library.add(faStopwatch)

export default {
	name: "ChronoMancer",
	components: {
		FontAwesomeIcon
	},
	
	computed: {
		...mapState("chrono", [ "hour", "minute", "second", "millisecond" ]),
		...mapGetters("chrono", [ "isRunning" ])
	},
	
	methods: {
		...mapMutations("chrono", [ "snapRound" ]),
		...mapActions("chrono", [ "start", "stop", "reset" ]),
		display(numbers) {
			return `${numbers}`.padStart(2, "0").slice(0, 2)
		}
	}
}
</script>

<style lang="scss" scoped>
.chrono {
	min-height:        500px;
	display:           flex;
	flex-direction:    column;
	justify-content:   center;
	align-items:       stretch;
	box-shadow:        0 4px 8px rgba(0, 0, 0, 0.2);
	background-image: linear-gradient(
		to right,
		rgb(26,26,26),
		rgb(111, 46, 0) 25%,
		rgb(111, 46, 0) 75%,
		rgb(26,26,26)
	);

	.timer {
		display:           flex;
		flex-direction:    row;
		justify-content:   center;
		align-items:       center;
		padding:           75px 0;

		* {
			font-family: 'Major Mono Display', 'Courier New';
		}

		.cell {
			font-size:     64px;
			line-height:   1.5;
			text-align:    center;

			.numbers {
				min-width: 100px;
			}
			.separator {
				width: 42px;
			}
		}
	}

	.controls {
		display:           flex;
		flex-direction:    row;
		justify-content:   center;
		align-items:       center;
		padding:           50px 0;

		.control {
			margin-left:          24px;
			margin-right:         24px;
			color:                #ffffff;
			background-color:     rgb(26, 26, 26);
			min-width:            64px;
			min-height:           64px;
			border:               none;
			border-image-width:   0;
			border-radius:        100%;
			box-shadow:           0 4px 8px 0 rgba(0, 0, 0, 0.2),
								  0 6px 20px 0 rgba(0, 0, 0, 0.19);
			cursor:               pointer;
			transition:           background-color 60ms linear;

			&.start,
			&.stop {
				min-width:    96px;
				min-height:   96px;

				background-color:   rgb(254, 110, 66);
				&:hover {
					background-color:   rgb(255, 162, 112);
				}
			}
			&.reset {
				background-color:   rgb(84, 110, 122);
				&:hover {
					background-color:   rgb(129, 156, 169);
				}
			}
		}
	}
}
</style>
