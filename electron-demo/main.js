const electron = require("electron")
const { app, BrowserWindow } = electron

let win

app.on("ready", function() {
    win = new BrowserWindow({
        frame: false,
        show: false,
        fullscreenable: false,
        icon: "app-icon.png"
        // backgroundColor: "#2e2c29"
    })
    
    win.loadFile("public/index.html")

    win.once("ready-to-show", function() {
        win.show()
        win.maximize()
    })

    if (process.env.NODE_ENV !== "production") {
        require("vue-devtools").install()
    }
})
