import React from 'react'
import '../Styles/Components_Styles/brand.scss'

function Brand({className,id}){
    return(
    <div className = {`brand ${className}`} id={id}>
        <img src="/Images/logo.png" alt="Logo" className='brandImage'></img>
    </div>
    )
}

export default Brand