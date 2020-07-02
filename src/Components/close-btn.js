import React from 'react'
import '../Styles/Components_Styles/closebtn.scss'

function Close({className, onClick}){
    return(
        <div className={`closebtn ${className}`} onClick={onClick}>
            <span>X</span>
        </div>
    )
}

export default Close