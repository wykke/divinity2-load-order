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
                    <ModCard name="m1" version="1.1.1"/>
                    <ModCard name="m2" author="Alex"/>
                    <ModCard name="m3" version="2.2.2" author="wykke"/>
                    <ModCard name="test"/>
                    <ModCard name="test"/>
                    <ModCard name="test"/>
                    <ModCard name="test"/>
                </ul>
            </div>
        )
    }
}