import xmlModListParser from './xmlModListParser'
const { ipcRenderer } = window.require("electron");

export interface IModCard {
    name: string
    version?: string
    author?: string
}

export interface IModList {
    listID: number
    modList: IModCard[]
}

export default class DualModList{
    public activeModList: IModList = { listID: 1, modList: [] }
    public inactiveModList: IModList = { listID: 2, modList: [] }
    private xmlParser?: xmlModListParser

    constructor(fileDir: string){
        // change for fileDir later
        const xmlText = ipcRenderer.sendSync('getFileContent', "/mnt/HDD/Files/Repositorios/divinity2-load-order/src/data/test/modsettings.lsx")
        if(xmlText){
            this.xmlParser = new xmlModListParser(xmlText)
        }

        
    }

    addModToActiveList(){

    }

    openModsFile(){
        return this.xmlParser?.xmlModListParser()
    }

}
