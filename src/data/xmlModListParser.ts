import { IModCard } from './DualModList'

export default class xmlModListParser{
    private xmlText: string
    public modList: IModCard[]

    constructor(xmlText: string){
        this.xmlText = xmlText
        this.modList = []

        this.xmlModListParser()
    }

    xmlModListParser(){
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(this.xmlText,"text/xml");
    
        xmlDoc.querySelectorAll("#Module").forEach( mod => {
            if(!mod.children[0].getAttribute("value"))
                return

            const newMod: IModCard = { name: (mod.children[0].getAttribute("value") || "") }
            this.modList.push(newMod)
        })
    }
}
