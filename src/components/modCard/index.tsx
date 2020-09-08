import React from 'react'
import { IModCard } from '../../data/DualModList'

import './styles.css'

export default function ModCard(props: IModCard){
    return (
        <li className="mod-card">
            <label className="mod-title">{props.name}</label>
            <div className="mod-version-author">
            <label>Version: {props.version?props.version:"1.0.0"}</label>
            <label>{props.author?`By: ${props.author}`:""}</label>
            </div>
        </li>
    )
}