import React, { Component } from 'react'

import Header from '../../components/header'
import MainBody from '../mainBody'
import DualModList, { IModCard } from '../../data/DualModList'

import './styles.css'
import '../../globalStyles.css'
import '../../assets/css/fonts.css'
import '../../assets/css/font-awesome.min.css'

const dualModList = new DualModList()

export default class Main extends Component{
    state = {
        activeModList: dualModList.activeModList,
        inactiveModList: dualModList.inactiveModList
    }

    updateState = (newState: { activeModList: IModCard[], inactiveModList: IModCard[] }) => {
        this.setState(newState)
    }

    render(){
        return(
            <div className="main">
                <Header updateParentProps={this.updateState}/>
                <MainBody updateParentProps={this.updateState} activeModList={this.state.activeModList} inactiveModList={this.state.inactiveModList}/>
            </div>
    )}
}