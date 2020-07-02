import React from 'react'
import '../Styles/Components_Styles/button.scss'

function Button({name,className,onClick}){
    return(
    <>
         <button className={`btn ${className}`} onClick={onClick} >{name}</button>
    </>
    )
}

export default Button