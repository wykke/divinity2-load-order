import { IModCard } from './DualModList'

export default class xmlModListParser{
    private xmlText: string

    constructor(xmlText: string){
        this.xmlText = xmlText
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
