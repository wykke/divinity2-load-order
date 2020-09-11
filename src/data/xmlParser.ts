import { IModCard } from './DualModList'
const { ipcRenderer } = window.require("electron");

export default class XMLParser{
    private xmlText: string
    public filePath: string

    constructor(filePath: string){
        this.filePath = filePath

        // change to filePath later
        this.xmlText = ipcRenderer.sendSync('getFileContent', "/mnt/HDD/Files/Repositorios/divinity2-load-order/src/data/test/modsettings.lsx")
        this.xmlModListParser()
    }

    xmlModListParser(): IModCard[]{
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(this.xmlText,"text/xml");
        const modlist: IModCard[] = []
    
        xmlDoc.querySelectorAll("#Module").forEach( mod => {
            if(!mod.children[0].getAttribute("value"))
                return

            const newMod: IModCard = { name: (mod.children[0].getAttribute("value") || "") }
            modlist.push(newMod)
        })

        return modlist
    }
}
