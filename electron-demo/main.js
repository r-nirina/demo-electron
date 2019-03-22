const electron = require("electron")
const { app, BrowserWindow } = electron

app.on("ready", function() {
    let win = new BrowserWindow({
        width:    800,
        height:   600
    })

    win.loadFile("public/index.html")
})
