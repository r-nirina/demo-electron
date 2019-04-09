<template>
<div class="timer-list">
    <div class="timer" v-for="timer in timers" :key="timer.id" @click="toggleTimer(timer.id)">
        <div>{{ display(timer.current.hour) }}</div>
        <div>:</div>
        <div>{{ display(timer.current.minute) }}</div>
        <div>:</div>
        <div>{{ display(timer.current.second) }}</div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { display } from "../../assets/utils"
export default {
    name: "TimerList",

    data: () => ({
        timers: null
    }),

    computed: {
        ...mapGetters("timer", [ "timersArray", "isFinished", "isRunning", "progress" ])
    },

    mounted() {
        setInterval(() => {
            this.timers = this.timersArray
        }, 100)
    },

    methods: {
        ...mapActions("timer", [ "deleteTimer", "startTimer", "stopTimer", ]),
        display(numbers) { return display(numbers) },
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
            background-color: #292929;
        }
    }
}
</style>
