import React, { Component } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import ModList from '../../components/modList'
import DualModList from '../../data/DualModList'
import './styles.css'

const test = new DualModList("")
const testInitialState = test.openModsFile()

export default class MainBody extends Component{
    state = {modlist: testInitialState}

    public ids = {activeModsList: "activeMods", inactiveModsList: "inactiveMods"}

    render(){
        return (
            <div className="main-body">
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <ModList id={this.ids.activeModsList}/>
                    <ModList id={this.ids.inactiveModsList} inactiveMods mods={this.state.modlist}/>
                </DragDropContext>
            </div>
        )
    }

    onDragEnd(event: DropResult){

    }
    
}