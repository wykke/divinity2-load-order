const fs = require('fs')
const dialog = require('electron').dialog

function getFileContent(fileDir){
    if(!fs.existsSync(fileDir)){
        return
    }
    return fs.readFileSync(fileDir, 'utf-8')
}

function openDirectory(event, dirPath){
    return dialog.showOpenDialog({
        properties: ['openFile']
      })
}

module.exports = {getFileContent, openDirectory}