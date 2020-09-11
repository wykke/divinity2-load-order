export interface IModCard {
    name: string
    version?: string
    author?: string
}

export default class DualModList{
    public activeModList: IModCard[] = []
    public inactiveModList: IModCard[] = []

    addSingleModToActiveList(singleMod: IModCard){
        this.activeModList.push(singleMod)
    }

    addMultiplesModsToActiveList(multiplesMods: IModCard[]){
        multiplesMods.forEach(mod => {
            this.addSingleModToActiveList(mod)
        })
    }

    addSingleModToInactiveList(singleMod: IModCard){
        this.inactiveModList.push(singleMod)
    }

    addMultiplesModsToInactiveList(multiplesMods: IModCard[]){
        multiplesMods.forEach(mod => {
            this.addSingleModToInactiveList(mod)
        })
    }

}
