const {app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

const { getFileContent } = require('./nodeFunctions')
 
const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      worldSafeExecuteJavaScript: true,
      nodeIntegration: true
    }
  })

  win.setMenu(null)
  win.loadURL(startURL)

  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.on('getFileContent', (event, arg) => {
  event.returnValue = getFileContent(arg)
})
