import React from 'react'

import './styles.css'

export default function FlatButton({icon}: {icon: string}){
    return(
        <button className={`flat-button fa fa-${icon}`}>test</button>
    )
}