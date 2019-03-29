const electron = require("electron")
const { app, BrowserWindow } = electron

let mainWindow = null

const createMainWindow = () => {
    // Instantiation
    mainWindow = new BrowserWindow({
        frame: false,
        show: false,
        fullscreenable: false,
        icon: "app-icon.png"
        // backgroundColor: "#2e2c29"
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

// When electron is ready
app.on("ready", () => {
    createMainWindow()

    if (process.env.NODE_ENV !== "production") {
        require("vue-devtools").install()
        mainWindow.webContents.openDevTools()
    }
})
