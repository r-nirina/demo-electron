<template>
<div class="title-bar">
    <div class="title">
        <img class="title-icon" src="../../assets/favicon/todo-cloud.png">
        <h1 class="title-label">A faire</h1>
    </div>
    <WindowControls />
</div>
</template>

<script>
import WindowControls from "./WindowControls.vue"

export default {
    name: "TitleBar",
    components: {
        WindowControls
    }
}
</script>

<style lang="scss" scoped>
.title-bar {
    width:              100vw;
    height:             32px;
    background-color:   rgb(26, 26, 26);
    box-shadow:         0 4px 8px rgba(0, 0, 0, 0.2);

    display:           flex;
    flex-direction:    row;
    justify-content:   space-between;
    align-items:       center;

    -webkit-app-region:   drag;
}

.title {
    display:          flex;
    flex-direction:   row;
}

.title-icon {
    padding:   6px;
    height:    32px;
    width:     32px;
}

.title-label {
    color:         #ffffff;
    line-height:   32px;
    font-size:     12px;
    // padding:       0 10px;
    font-weight:   normal;
}
</style>
