const electron = require("electron")
const {
    app,
    BrowserWindow,
    ipcMain,
    Notification,
    dialog
} = electron

let mainWindow = null

const createMainWindow = () => {
    // Instantiation
    mainWindow = new BrowserWindow({
        frame: false,
        show: false,
        fullscreenable: false,
        icon: "app-icon.png",
        minWidth: 800,
        minHeight: 600,
        backgroundColor: "#1a1a1a"
    })

    // Chargement de la page
    mainWindow.loadFile("public/index.html")

    // Prêt à afficher
    mainWindow.once("ready-to-show", function() {
        mainWindow.show()
        mainWindow.maximize()
    })

    // Quand on ferme la fenêtre
    mainWindow.on("closed", () => {
        mainWindow = null
    })
}

const listenToRendererProcesses = () => {

    // Notification des minuteurs
    ipcMain.on("timer_finished", (event, timer) => {
        dialog.showMessageBox(mainWindow, {
            type: "info",
            title: "Temps écoulé",
            message: "Le timer " + timer.id + " est arrivé au bout du décompte"
        })

        new Notification({
            title: "Temps écoulé",
            body: "Le timer " + timer.id + " est arrivé au bout du décompte"
        }).show()
    })

    // Barre de progression
    ipcMain.on("progress_update", (event, progress) => {
        mainWindow.setProgressBar(progress)
    })
}

// Quand electron est prêt
app.on("ready", () => {
    createMainWindow()
    listenToRendererProcesses()

    if (process.env.NODE_ENV !== "production") {
        app.setAppUserModelId("com.squirrel.lyon1.mif13.electron")
        require("vue-devtools").install()
        // mainWindow.webContents.openDevTools()
    }
})
