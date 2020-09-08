import React, { Component } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import ModList from '../../components/modList'

import './styles.css'

export default class MainBody extends Component{
    render(){
        return (
            <div className="main-body">
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <ModList/>
                    <ModList inactiveMods/>
                </DragDropContext>
            </div>
        )
    }

    onDragEnd(event: DropResult){
        const { source, destination } = event;

        // dropped outside the list
        if (!destination) {
            return;
        }

        console.log(source)

    }
    
}