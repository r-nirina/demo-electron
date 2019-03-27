import { remote } from "electron"

const getInitialState = () => ({})

export default {
    namespaced: true,

    state: getInitialState(),

    actions: {
        closeAppWindow() {
            remote.getCurrentWindow().close()
        }
    }
}