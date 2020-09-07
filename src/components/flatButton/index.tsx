import React from 'react'

import './styles.css'

type props = {
    icon: string
    borderRight?: boolean
    borderLeft?: boolean
}

export default function FlatButton({icon, borderLeft, borderRight}: props){
    return(
        <button className={`flat-button fa fa-${icon}
        ${borderLeft?"border-left":""}
        ${borderRight?"border-right":""}`}/>
    )
}