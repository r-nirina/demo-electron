<template>
<MainLayout>
	<div class="view">
		<ChronoMancer />
		<ChronoHistory />
	</div>
</MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout.vue"
import ChronoMancer from "../ui/ChronoMancer.vue"
import ChronoHistory from "../ui/ChronoHistory.vue"

export default {
	name: "ChronoView",
	
	components: {
		MainLayout,
		ChronoMancer,
		ChronoHistory
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
