interface IMod{
    id: string
    name?: string
    version?: string
    author?: string
}

export default class xmlModListParser{
    private xmlText: string
    private modList: IMod[]

    constructor(xmlText: string){
        this.xmlText = xmlText
        this.modList = []
    }

    xmlModListParser(){
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(this.xmlText,"text/xml");
    
        xmlDoc.querySelectorAll("#Module").forEach( mod => {
            if(!mod.children[0].getAttribute("value"))
                return

            const newMod: IMod = { id: (mod.children[0].getAttribute("value") || "") }
            this.modList.push(newMod)
        })

        console.log(this.modList)
    }
}
