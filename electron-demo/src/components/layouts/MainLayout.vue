<template>
<div class="layout-wrapper">
    <MainNav></MainNav>
    <slot></slot>
</div>
</template>

<script>
import MainNav from "../ui/MainNav.vue"
export default {
    name: "MainLayout",
    components: {
        MainNav
    }
}
</script>

<style lang="scss" scoped>
.layout-wrapper {
    width:             100%;
    height:            100%;
    display:           flex;
    flex-direction:    column;
    justify-content:   flex-start;
    align-items:       stretch;
}
</style>
