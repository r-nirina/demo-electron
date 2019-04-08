<template>
<MainLayout>
    <div class="view">
        <AddTimer />
        <TimerList />
    </div>
</MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout.vue"
import AddTimer from "../ui/AddTimer.vue"
import TimerList from "../ui/TimerList.vue"

export default {
    name: "TimerView",
    components: {
        MainLayout,
        AddTimer,
        TimerList
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
