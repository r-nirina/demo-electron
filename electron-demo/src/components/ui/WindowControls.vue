<template>
<div class="window-controls">
    <div class="window-control window-control-minimize" @click="minimizeWindow">
        <FontAwesomeIcon icon="window-minimize" />
    </div>
    <div v-if="isMaximized" class="window-control window-control-restore" @click="restoreWindow">
        <FontAwesomeIcon icon="window-restore" />
    </div>
    <div v-else class="window-control window-control-maximize" @click="maximizeWindow">
        <FontAwesomeIcon icon="window-maximize" />
    </div>
    <div class="window-control window-control-close" @click="closeWindow">
        <FontAwesomeIcon icon="window-close" />
    </div>
</div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
    faWindowMaximize,
    faWindowMinimize,
    faWindowRestore,
    faWindowClose
} from "@fortawesome/free-solid-svg-icons"

library.add(faWindowMaximize)
library.add(faWindowMinimize)
library.add(faWindowRestore)
library.add(faWindowClose)

import { mapActions, mapState } from "vuex"

export default {
    name: "WindowControls",
    components: {
        FontAwesomeIcon
    },

    computed: {
        ...mapState("electron", [ "isMaximized" ])
    },

    mounted() {
        setInterval(() => {
            this.updateWindowState()
        }, 10)
    },

    methods: {
        ...mapActions("electron", [
            "closeWindow",
            "minimizeWindow",
            "maximizeWindow",
            "restoreWindow",
            "updateWindowState"
        ])
    }
}
</script>

<style lang="scss" scoped>
.window-controls {
    -webkit-app-region:   no-drag;
    color:                #ffffff;
    display:              flex;
    flex-direction:       row;

    .window-control {
        height:            32px;
        width:             32px;
        display:           flex;
        flex-direction:    column;
        justify-content:   center;
        align-items:       center;

        transition:   background-color 60ms ease-in;

        &:hover {
            background-color: rgb(116, 116, 116);
        }
        &.window-control-close:hover {
            background-color: rgb(219, 50, 50);
        }
    }
}
</style>
