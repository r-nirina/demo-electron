<template>
<MainLayout>
    <div class="view">
        
    </div>
</MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout.vue"
export default {
    name: "TimerView",
    components: {
        MainLayout
    }
}
</script>

<style lang="scss" scoped>
.view {
    width:             100%;
    height:            100%;
    overflow-y:        auto;
    display:           flex;
    flex-direction:    column;
    justify-content:   flex-start;
    align-items:       stretch;
}
</style>
