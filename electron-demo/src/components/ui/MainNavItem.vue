<template>
    <div class="main-nav-item">
        <FontAwesomeIcon :icon="icon" />
        <h2 class="menu-item-label">{{ label }}</h2>
    </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faStopwatch, faHourglassHalf } from "@fortawesome/free-solid-svg-icons"
library.add(faStopwatch)
library.add(faHourglassHalf)

export default {
    name: "MainNavItem",
    components: {
        FontAwesomeIcon
    },

    props: {
        icon: String,
        label: String
    }
}
</script>

<style lang="scss" scoped>
.main-nav-item {
    height:          100%;
    padding:         0 24px;
    color:           #c5c5c5;
    border-bottom:   solid 2px #1a1a1a;
    transition:      color 120ms linear,
                     border-bottom 120ms linear;

    display:           flex;
    flex-direction:    row;
    justify-content:   center;
    align-items:       center;

    & > *:not(:first-child) {
        padding-left: 8px;
    }

    h2 {
        font-size:     18px;
        font-weight:   normal;
    }

    &:hover {
        color:           #ffffff;
        border-bottom:   solid 2px #ffffff;
    }

    .active & {
        color:           rgb(0, 153, 180);
        border-bottom:   solid 2px rgb(0, 153, 180);
    }
}
</style>
