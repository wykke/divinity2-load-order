const fs = require('fs')

function getFileContent(fileDir){
    if(!fs.existsSync(fileDir)){
        return
    }
    return fs.readFileSync(fileDir, 'utf-8')
}

module.exports = {getFileContent}