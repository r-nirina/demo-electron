import Vue from "vue"
import Vuex, { Store } from "vuex"

import ElectronStore from "./ElectronStore"
import ChronoStore from "./ChronoStore"

Vue.use(Vuex)

export default new Store({
	modules: {
		electron: ElectronStore,
		chrono: ChronoStore
	}
})
