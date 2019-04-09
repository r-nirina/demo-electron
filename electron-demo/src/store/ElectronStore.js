import { remote, ipcRenderer } from "electron"

const getInitialState = () => ({
	isMaximized: remote.getCurrentWindow().isMaximized()
})

export default {
	namespaced: true,

	state: getInitialState(),

	mutations: {
		saveWindowState(state, _windowState) {
			state.isMaximized = _windowState
		}
	},

	actions: {
		updateWindowState({ commit }) {
			commit("saveWindowState", remote.getCurrentWindow().isMaximized())
		},

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
		},

		sendToMain(context, message) {
			ipcRenderer.send(message.type, message.data)
		}
	}
}
