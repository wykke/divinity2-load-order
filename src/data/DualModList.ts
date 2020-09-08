import xmlModListParse from './xmlModListParse'
const { ipcRenderer } = window.require("electron");

export interface IMod {
    name: string
    version?: string
    author?: string
}

export interface IModList {
    listID: number
    modList: IMod[]
}

export default class DualModList{
    public activeModList: IModList = { listID: 1, modList: [] }
    public inactiveModList: IModList = { listID: 2, modList: [] }

    addModToActiveList(){

    }

    openModsFile(){
        const testFile = ipcRenderer.sendSync('getFileContent', "/mnt/HDD/Files/Repositorios/divinity2-load-order/src/data/test/modsettings.lsx")
        if(!testFile)
            return

        const a = new xmlModListParse(testFile)
        a.xmlModListParser()
        
    }

}
