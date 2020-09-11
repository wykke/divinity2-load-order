import React, {MouseEvent} from 'react'

import './styles.css'

type props = {
    icon: string
    borderRight?: boolean
    borderLeft?: boolean
    onClickFunction(event?: MouseEvent): void
}

export default function FlatButton({icon, borderLeft, borderRight, onClickFunction}: props){
    return(
        <button className={`flat-button fa fa-${icon}
        ${borderLeft?"border-left":""}
        ${borderRight?"border-right":""}`}
        onClick={onClickFunction}/>
    )
}