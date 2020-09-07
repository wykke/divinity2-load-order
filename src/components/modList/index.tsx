import React, {Component} from 'react'

import ModCard from '../modCard'

import './styles.css'

type modProps = {
    inactiveMods?: boolean
}

export default class ModList extends Component<modProps>{
    render(){
        return (
            <div className={`mod-list ${this.props.inactiveMods?"inactive-mods":"active-mods"}`}>
                <text>{this.props.inactiveMods?"Inactive Mods":"Active Mods"}</text>
                <ul>
                    <ModCard/>
                    <ModCard/>
                    <ModCard/>
                </ul>
            </div>
        )
    }
}