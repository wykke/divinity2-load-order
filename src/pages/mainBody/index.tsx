import React, { Component } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import ModList from '../../components/modList'
import DualModList from '../../data/DualModList'
import XMLParser from '../../data/xmlParser'
import './styles.css'

const dualModList = new DualModList()
const xmlParser = new XMLParser("")

const newList = xmlParser.xmlModListParser()
if(newList)
    dualModList.addMultiplesModsToInactiveList(newList)

//const initialState = []


export default class MainBody extends Component{
    state = {
        inactiveModList: dualModList.inactiveModList,
        activeModList: dualModList.activeModList
    }

    public ids = {activeModsList: "activeMods", inactiveModsList: "inactiveMods"}

    render(){
        return (
            <div className="main-body">
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <ModList id={this.ids.activeModsList} mods={this.state.activeModList}/>
                    <ModList id={this.ids.inactiveModsList} inactiveMods mods={this.state.inactiveModList}/>
                </DragDropContext>
            </div>
        )
    }

    onDragEnd(event: DropResult){
        const {destination, source, draggableId} = event

        // if dropped outside of the list
        if(!destination)
            return
        // if dropped at same position at same list
        if(destination.droppableId === source.droppableId && destination.index === source.index)
            return
        // if dropped at same list
        if(destination.droppableId === source.droppableId){
            console.log(draggableId)
        }


        // destination?.droppableId
        // source.droppableId
        // draggableId
    }
    
}