<template>
<div class="window-controls">
    <div class="window-control window-control-minimize">
        <font-awesome-icon icon="window-minimize" />
    </div>
    <div class="window-control window-control-restore">
        <font-awesome-icon icon="window-restore" />
    </div>
    <div class="window-control window-control-maximize">
        <font-awesome-icon icon="window-maximize" />
    </div>
    <div class="window-control window-control-close" @click="closeAppWindow">
        <font-awesome-icon icon="window-close" />
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

import { mapActions } from "vuex"

export default {
    name: "WindowControls",

    components: {
        "font-awesome-icon": FontAwesomeIcon
    },

    methods: {
        ...mapActions({
            "closeAppWindow": "electron/closeAppWindow"
        })
    }
}
</script>

<style lang="scss">
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
