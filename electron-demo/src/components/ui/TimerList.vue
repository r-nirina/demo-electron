<template>
<div class="timer-list">
    <div
        class="timer"
        v-for="timer in timers"
        :key="timer.id"
        @click="toggleTimer(timer.id)"
        :data-progress="progress(timer.id)"
        :data-isFinished="isFinished(timer.id)"
    >
        <div class="numbers">
            <div>{{ display(toTime(timer.current).hour) }}</div>
            <div>:</div>
            <div>{{ display(toTime(timer.current).minute) }}</div>
            <div>:</div>
            <div>{{ display(toTime(timer.current).second) }}</div>
        </div>
        <div
            :class="[
                'progress-bar',
                isRunning(timer.id) ? 'running' : 'paused',
                isFinished(timer.id) ? 'finished' : ''
            ]"
            :style="{
                width: (progress(timer.id) * 100) + '%'
            }"
        ></div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { display, toTime } from "../../assets/utils"
export default {
    name: "TimerList",

    data: () => ({
        timers: null
    }),

    computed: {
        ...mapGetters("timer", [ "timersArray", "isFinished", "isRunning", "progress" ])
    },

    mounted() {
        this.sendProgressState(0)
        setInterval(() => {
            this.timers = this.timersArray
            this.updateProgressState()
        }, 100)
    },

    methods: {
        ...mapActions("timer", [ "deleteTimer", "startTimer", "stopTimer", "sendProgressState", "updateProgressState" ]),

        display(numbers) { return display(numbers) },

        toTime(milliseconds) { return toTime(milliseconds) },

        toggleTimer(id) {
            this.isRunning(id) ? this.stopTimer(id) : this.startTimer(id)
        }
    }
}
</script>

<style lang="scss" scoped>
.timer-list {
    overflow: overlay;

    .timer {
        height: 80px;
        
        &:not(:last-child) {
            border-bottom:      solid 1px #292929;
        }

        .numbers {
            position: absolute;
            height: 80px;
            width: 100%;
            z-index: 2;

            display:           flex;
            flex-direction:    row;
            justify-content:   center;
            align-items:       center;

            padding:      28px 0;
            font-size:    20px;
            transition:   background-color 120ms linear;

            &:not(:first-child) {
                border-top: solid 1px rgb(59, 59, 59);
            }

            &:hover {
                background-color: #29292944;
            }
        }

        .progress-bar {
            position: absolute;
            height: 80px;
            width: 100%;
            transition: width 100ms linear;
            z-index: 1;

            &.running {
                background-color: rgba(0, 94, 111, 0.445);
            }

            &.paused {
                background-color: rgba(111, 94, 0, 0.445);
            }

            &.finished {
                background-color: rgba(0, 61, 111, 0.445);
                width: 100% !important;
            }
        }
    }
}
</style>
