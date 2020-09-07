import React, {Component} from 'react'

import ModList from '../../components/modList'

import './styles.css'

export default class MainBody extends Component{
    render(){
        return (
            <div className="main-body">
                <ModList/>
                <ModList inactiveMods/>
            </div>
        )
    }
}