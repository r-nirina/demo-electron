<template>
    <div class="app"></div>
</template>

<script>
import Vue from "vue"

const App = {
    name: "App",
    data: () => ({}),
    mounted() {},
    methods: {}
}

Vue.component("app", App)
export default App
</script>

<style lang="scss">
@import url("./assets/fonts/Raleway/Raleway.css");

body,
.app {
    height:   100%;
    width:    100%;
}

body,
body * {
    margin:                 0;
    padding:                0;
    box-sizing:             border-box;
    font-family:            'Raleway', sans-serif;
    font-size:              14px;
    color:                  #222222;
    outline:                none;
    user-select:            none;
}
</style>
