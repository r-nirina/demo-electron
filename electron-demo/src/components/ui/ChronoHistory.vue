<template>
<div class="chrono-history">
    <div class="round" v-for="(round, index) in rounds" :key="index">
        <div>{{ display(round.hour) }}</div>
        <div>:</div>
        <div>{{ display(round.minute) }}</div>
        <div>:</div>
        <div>{{ display(round.second) }}</div>
        <div>.</div>
        <div>{{ display(round.millisecond) }}</div>
    </div>
</div>
</template>

<script>
import { mapState } from "vuex"
import { display } from "../../assets/utils"

export default {
    name: "ChronoHistory",

    computed: {
        ...mapState("chrono", [ "rounds" ])
    },

    methods: {
		display(numbers) { return display(numbers) }
    }
}
</script>

<style lang="scss" scoped>
.chrono-history {
    overflow: overlay;

    .round {
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
