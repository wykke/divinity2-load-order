import React from 'react'

import './styles.css'

type modProps = {
    name: string
    version?: string
    author?: string
}

export default function ModCard(props: modProps){
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