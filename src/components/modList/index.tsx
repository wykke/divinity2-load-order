import React, {Component} from 'react'
import { Droppable } from 'react-beautiful-dnd'

import ModCard from '../modCard'
import { IModCard } from '../../data/DualModList'
import { listIds } from '../../pages/mainBody/index'

import './styles.css'

type modProps = {
    id: listIds
    inactiveMods?: boolean
    mods?: IModCard[]
}

export default class ModList extends Component<modProps>{
    render(){
        return (
            <div className={`mod-list ${this.props.inactiveMods?"inactive-mods":"active-mods"}`}>
                <label>{this.props.inactiveMods?"Inactive Mods":"Active Mods"}</label>
                <Droppable droppableId={this.props.id}>
                    {provided => (
                        <ul ref={provided.innerRef} {...provided.droppableProps}>
                            {this.props.mods?.map((mod, index) => (
                                <ModCard  key={mod.name} name={mod.name} version={mod.version} author={mod.author} index={index}/>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </div>
        )
    }
}