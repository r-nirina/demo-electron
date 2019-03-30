import { remote } from "electron"

const getInitialState = () => ({})

export default {
	namespaced: true,

	state: getInitialState(),

	actions: {
		closeWindow() {
			remote.getCurrentWindow().close()
		},

		minimizeWindow() {
			remote.getCurrentWindow().minimize()
		},

		maximizeWindow() {
			remote.getCurrentWindow().maximize()
		},

		restoreWindow() {
			remote.getCurrentWindow().restore()
		}
	}
}
