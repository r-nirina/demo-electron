<template>
<div class="app">
    <TitleBar />
    <router-view></router-view>
</div>
</template>

<script>
import Vue from "vue"
import TitleBar from "./components/ui/TitleBar.vue"

export default {
    name: "App",
    components: {
        TitleBar
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
    justify-content:   flex-start;
    align-items:       center;
    overflow:          hidden;
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
    overflow:           hidden;
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

/* width */
::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-track-piece {
  background-color:   rgb(26, 26, 26);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
  border: solid 6px rgb(26, 26, 26);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
