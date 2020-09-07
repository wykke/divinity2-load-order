import React from 'react'

import Header from '../../components/header'
import MainBody from '../mainBody'

import './styles.css'
import '../../globalStyles.css'
import '../../assets/css/fonts.css'
import '../../assets/css/font-awesome.min.css'

export default function Main(){
    return (
        <div className="main">
            <Header/>
            <MainBody/>
        </div>
    )
}