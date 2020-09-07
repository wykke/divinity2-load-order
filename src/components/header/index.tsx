import React, {Component} from 'react'

import './styles.css'
import FileInput from '../fileInput'

export default class Header extends Component{
    render(){
        return (
            <header className="header">
                <FileInput/>
            </header>
        )
    }
}