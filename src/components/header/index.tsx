import React, { Component } from 'react'

import './styles.css'
import FileInput from '../fileInput'
import FlatButton from '../flatButton'

export default class Header extends Component{
    openFile(){

    }

    saveFile(){

    }

    render(){
        return (
            <header className="header">
                <FileInput/>
                <FlatButton onClickFunction={this.openFile} icon="folder-open" borderRight borderLeft/>
                <FlatButton onClickFunction={this.saveFile} icon="save" borderRight/>
            </header>
        )
    }
}