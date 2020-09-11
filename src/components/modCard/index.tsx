import React, {Component} from 'react'
import { IModCard } from '../../data/DualModList'
import { Draggable } from 'react-beautiful-dnd'

import './styles.css'

interface IModWithIndex extends IModCard {
    index: number
}

export default class ModCard extends Component<IModWithIndex>{
    render() {
        return(
            <Draggable draggableId={this.props.name} index={this.props.index}>
                {provided => (
                    <li {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="mod-card">
                        <label {...provided.dragHandleProps} className="mod-title">{this.props.name}</label>
                        <div {...provided.dragHandleProps} className="mod-version-author">
                        <label {...provided.dragHandleProps}>Version: {this.props.version ? this.props.version : "1.0.0"}</label>
                        <label {...provided.dragHandleProps}>{this.props.author?`By: ${this.props.author}`:""}</label>
                        </div>
                    </li>
                )}
            </Draggable>
        )
    }
}