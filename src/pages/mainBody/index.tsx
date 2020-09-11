import React, { Component } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import ModList from '../../components/modList'
import DualModList from '../../data/DualModList'
import './styles.css'

const test = new DualModList("")
const testInitialState = test.openModsFile()
if(testInitialState)
    test.addMultiplesModsToActiveList(testInitialState)

export default class MainBody extends Component{
    state = {
        inactiveModList: test.inactiveModList,
        activeModList: test.activeModList
    }

    public ids = {activeModsList: "activeMods", inactiveModsList: "inactiveMods"}

    render(){
        return (
            <div className="main-body">
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <ModList id={this.ids.activeModsList} mods={this.state.activeModList.modList}/>
                    <ModList id={this.ids.inactiveModsList} inactiveMods mods={this.state.inactiveModList.modList}/>
                </DragDropContext>
            </div>
        )
    }

    onDragEnd(event: DropResult){

    }
    
}