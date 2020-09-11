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

    addSingleModToActiveList(singleMod: IModCard){
        this.activeModList.modList.push(singleMod)
    }

    addMultiplesModsToActiveList(multiplesMods: IModCard[]){
        multiplesMods.forEach(mod => {
            this.addSingleModToActiveList(mod)
        })
    }

    addSingleModToInactiveList(singleMod: IModCard){
        this.inactiveModList.modList.push(singleMod)
    }

    addMultiplesModsToInactiveList(multiplesMods: IModCard[]){
        multiplesMods.forEach(mod => {
            this.addSingleModToInactiveList(mod)
        })
    }

}
