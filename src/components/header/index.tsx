import React, {Component} from 'react'

import './styles.css'
import FileInput from '../fileInput'
import FlatButton from '../flatButton'

export default class Header extends Component{
    render(){
        return (
            <header className="header">
                <FileInput/>
                <FlatButton icon="folder-open" borderRight borderLeft/>
                <FlatButton icon="save" borderRight/>
            </header>
        )
    }
}