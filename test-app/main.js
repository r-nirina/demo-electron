const electron = require("electron")
const { app, BrowserWindow } = electron

app.on("ready", function() {
    let win = new BrowserWindow({
        width:    800,
        height:   600
    })

    win.loadFile("index.html")
    // win.loadURL("http://localhost:3000")

    win.webContents.openDevTools()
})
