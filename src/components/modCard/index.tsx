import React from 'react'
import { IModCard } from '../../data/DualModList'
import { Draggable } from 'react-beautiful-dnd'

import './styles.css'

interface IModWithIndex extends IModCard {
    index: number
}

export default function ModCard(props: IModWithIndex){
    return (
        <Draggable draggableId={props.name} index={props.index}>
            {provided => (
                <li {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                className="mod-card">
                    <label {...provided.dragHandleProps} className="mod-title">{props.name}</label>
                    <div {...provided.dragHandleProps} className="mod-version-author">
                    <label {...provided.dragHandleProps}>Version: {props.version?props.version:"1.0.0"}</label>
                    <label{...provided.dragHandleProps}>{props.author?`By: ${props.author}`:""}</label>
                    </div>
                </li>
            )}
        </Draggable>
    )
}