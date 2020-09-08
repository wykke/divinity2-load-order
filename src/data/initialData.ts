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
}
