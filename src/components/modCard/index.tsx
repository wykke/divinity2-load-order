import React from 'react'
import { IModCard } from '../../data/DualModList'

import './styles.css'

export default function ModCard(props: IModCard){
    return (
        <li className="mod-card">
            <text className="mod-title">{props.name}</text>
            <div className="mod-version-author">
            <text>Version: {props.version?props.version:"1.0.0"}</text>
            <text>{props.author?`By: ${props.author}`:""}</text>
            </div>
        </li>
    )
}