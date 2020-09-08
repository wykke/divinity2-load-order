import React, {Component} from 'react'
import { Droppable } from 'react-beautiful-dnd'

import ModCard from '../modCard'
import { IModCard } from '../../data/DualModList'

import './styles.css'

type modProps = {
    id: string
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
                                <ModCard  key={index} name={mod.name} version={mod.version} author={mod.author} index={index}/>
                            ))}
                        </ul>
                    )}
                </Droppable>
            </div>
        )
    }
}