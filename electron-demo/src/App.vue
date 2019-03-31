<template>
<div class="app">
    <TitleBar />
    <ChronoView />
</div>
</template>

<script>
import Vue from "vue"
import TitleBar from "./components/ui/TitleBar.vue"
import ChronoView from "./components/views/ChronoView.vue"

export default {
    name: "App",
    components: {
        TitleBar,
        ChronoView
    },

    data: () => ({}),
    mounted() {},
    methods: {}
}
</script>

<style lang="scss">
@import url("./assets/fonts/Raleway/Raleway.scss");
@import url("./assets/fonts/MajorMonoDisplay/MajorMonoDisplay.scss");
@import url("./assets/fonts/Ubuntu/Ubuntu.scss");
@import url("./assets/fonts/UbuntuMono/UbuntuMono.scss");

body {
    height:            100vh;
    width:             100vw;
    display:           flex;
    flex-direction:    column;
    justify-content:   center;
    align-items:       center;
}

.app {
    height:             100vh;
    width:              100vw;
    display:            flex;
    flex-direction:     column;
    justify-content:    flex-start;
    align-items:        center;
    background-color:   rgb(26, 26, 26);
    color:              #ffffff;
}


body,
body * {
    margin:        0;
    padding:       0;
    box-sizing:    border-box;
    font-family:   'Ubuntu', 'Raleway', sans-serif;
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
