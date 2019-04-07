<template>
<nav class="main-nav">
    <router-link to="/chrono" active-class="active">
        <MainNavItem icon="stopwatch" label="Chronomètre" />
    </router-link>
    <router-link to="/timer" active-class="active">
        <MainNavItem icon="hourglass-half" label="Minuteur" />
    </router-link>
</nav>
</template>

<script>
import MainNavItem from "./MainNavItem.vue"
export default {
    name: "MainNav",
    components: {
        MainNavItem
    }
}
</script>

<style lang="scss" scoped>
.main-nav {
    min-height: 64px;

    display:           flex;
    flex-direction:    row;
    justify-content:   stretch;
    align-items:       stretch;

    a {
        text-decoration:   none;
        flex:              1;
    }
}
</style>
