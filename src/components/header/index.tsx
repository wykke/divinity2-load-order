import React, { Component } from 'react'

import './styles.css'
import FileInput from '../fileInput'
import FlatButton from '../flatButton'
import XMLParser from '../../data/xmlParser'
import { IModCard } from '../../data/DualModList'

const { ipcRenderer } = window.require("electron");

type ReturnedFile = {
    canceled: boolean
    filePaths: string[]
}

type MainBodyProps = {
    updateParentProps(newState: { activeModList: IModCard[], inactiveModList: IModCard[] }): void
}

export default class Header extends Component<MainBodyProps>{
    openFile = () => {
        const file: ReturnedFile = ipcRenderer.sendSync('openFileDialog')
        if(!file)
            return

        const parser = new XMLParser(file.filePaths[0])
        const newList = parser.xmlModListParser()
        this.props.updateParentProps({activeModList: [], inactiveModList: newList})
        
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