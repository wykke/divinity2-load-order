export default class xmlModListParser{
    private xmlText: string

    constructor(xmlText: string){
        this.xmlText = xmlText
    }

    xmlModListParser(){
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(this.xmlText,"text/xml");
    
        console.log(xmlDoc.querySelectorAll("#Module").forEach(item=>{console.log(item)}))
    }
}
