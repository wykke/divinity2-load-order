import React, { Component } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import ModList from '../../components/modList'
import { IModCard } from '../../data/DualModList'
import './styles.css'

export type listIds = ("0" | "1")
export const idType = {activeMods: 0, inactiveMods: 1}

type modLists = {
    activeMods: IModCard[]
    inactiveMods: IModCard[]
}

type MainBodyProps = {
    updateParentProps(newState: { activeModList: IModCard[], inactiveModList: IModCard[] }): void
    activeModList: IModCard[]
    inactiveModList: IModCard[]
}

export default class MainBody extends Component<MainBodyProps>{

    render(){
        return (
            <div className="main-body">
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <ModList id={"0"} mods={this.props.activeModList}/>
                    <ModList id={"1"} inactiveMods mods={this.props.inactiveModList}/>
                </DragDropContext>
            </div>
        )
    }

    onDragEnd = (event: DropResult) => {
        // const {destination, source} = event

        // // if dropped outside of the list
        // if(!destination)
        //     return
        // // if dropped at same position at same list
        // if(destination.droppableId === source.droppableId && destination.index === source.index)
        //     return

        // // convert string to number, necessary because RBDnD
        // const sourceDroppableID = source.droppableId === idType.activeMods.toString() ? idType.activeMods : idType.inactiveMods
        // const destinationDroppableID = destination.droppableId === idType.activeMods.toString() ? idType.activeMods : idType.inactiveMods

        // // if dropped at same list
        // if(sourceDroppableID === destinationDroppableID){
        //     const otherListIndex = sourceDroppableID ? idType.activeMods : idType.inactiveMods
        //     const currentList = Array.from(this.state.modLists[sourceDroppableID])
        //     const item = currentList[source.index]

        //     currentList.splice(source.index, 1)
        //     currentList.splice(destination.index, 0, item)

        //     const newModList = []
        //     newModList[sourceDroppableID] = currentList
        //     newModList[otherListIndex] = this.state.modLists[otherListIndex]

        //     this.setState({modLists: newModList})
            
        // }else{
        //     const currentList = Array.from(this.state.modLists[sourceDroppableID])
        //     const newList = Array.from(this.state.modLists[destinationDroppableID])
        //     const item = currentList[source.index]

        //     currentList.splice(source.index, 1)
        //     newList.splice(destination.index, 0, item)

        //     const newModList = []
        //     newModList[sourceDroppableID] = currentList
        //     newModList[destinationDroppableID] = newList

        //     this.setState({modLists: newModList})

        // }
    }
    
}