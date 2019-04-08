<template>
<div class="timer-list">
    <div class="timer" v-for="(timer, index) in timers" :key="index">

    </div>
</div>
</template>

<script>
import { mapState } from "vuex"
export default {
    name: "TimerList",

    computed: {
        ...mapState("timer", [ "timers" ])
    },
}
</script>

<style lang="scss" scoped>
.timer-list {
    overflow: overlay;
}
</style>
