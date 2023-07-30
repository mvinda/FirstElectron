const electron = require('electron');
const app = electron.app;
const url = require('url');
const path = require('path');

let window = null;
function createWindow() {
    window = new electron.BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: {
            nodeIntegration: true
        }
    });
}

const urls = url.format({
    protocol: 'file',
    pathname: path.join(__dirname, "index.html")
})


app.on('window-all-closed', function () {
    app.quit();
})

app.on('ready', function () {
    if (window === null) {
        createWindow();
        window.loadURL(urls);
        window.on('close', function () {
            window = null;
        });
    }
})
