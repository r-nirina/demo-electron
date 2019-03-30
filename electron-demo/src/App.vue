<template>
<div class="app">
    <title-bar></title-bar>
    <chrono-view></chrono-view>
</div>
</template>

<script>
import Vue from "vue"
import TitleBar from "./components/ui/TitleBar.vue"
import ChronoView from "./components/views/ChronoView.vue"

export default {
    name: "App",
    components: {
        "title-bar": TitleBar,
        "chrono-view": ChronoView
    },

    data: () => ({}),
    mounted() {},
    methods: {}
}
</script>

<style lang="scss">
@import url("./assets/fonts/Raleway/Raleway.css");

body {
    height:               100vh;
    width:                100vw;
    display:              flex;
    flex-direction:       column;
    justify-content:      center;
    align-items:          center;
}

.app {
    height:               100vh;
    width:                100vw;
    display:              flex;
    flex-direction:       column;
    justify-content:      flex-start;
    align-items:          center;
}


body,
body * {
    margin:        0;
    padding:       0;
    box-sizing:    border-box;
    font-family:   'Raleway', sans-serif;
    // font-size:     14px;
    // color:         #222222;
    outline:       none;
    user-select:   none;
}

ul,
ol {
    list-style:   none;
}
</style>
