import React, { Component } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import ModList from '../../components/modList'
import { IModCard } from '../../data/DualModList'
import './styles.css'

export type listIds = ("0" | "1")
export const idType = {activeMods: "0", inactiveMods: "1"}

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
        const {destination, source} = event

        // if dropped outside of the list
        if(!destination)
            return
        // if dropped at same position at same list
        if(destination.droppableId === source.droppableId && destination.index === source.index)
            return

        // if dropped at same list
        if(source.droppableId === destination.droppableId){
            const otherList = source.droppableId === idType.activeMods ? this.props.inactiveModList : this.props.activeModList
            const currentList = source.droppableId === idType.activeMods ? this.props.activeModList : this.props.inactiveModList
            const item = currentList[source.index]

            currentList.splice(source.index, 1)
            currentList.splice(destination.index, 0, item)

            this.props.updateParentProps({
                activeModList: source.droppableId === idType.activeMods ? currentList : otherList,
                inactiveModList:  source.droppableId === idType.activeMods ? otherList : currentList
            })
        }else{
            const destinationList = source.droppableId === idType.activeMods ? this.props.inactiveModList : this.props.activeModList
            const currentList = source.droppableId === idType.activeMods ? this.props.activeModList : this.props.inactiveModList
            const item = currentList[source.index]

            currentList.splice(source.index, 1)
            destinationList.splice(destination.index, 0, item)

            this.props.updateParentProps({
                activeModList: source.droppableId === idType.activeMods ? currentList : destinationList,
                inactiveModList:  source.droppableId === idType.activeMods ? destinationList : currentList
            })
        }
    }
    
}