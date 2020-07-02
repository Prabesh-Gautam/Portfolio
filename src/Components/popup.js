import React from 'react'
import '../Styles/Components_Styles/popup.scss'

function Popup({className, children, onClick}){
    const allClass = `popup ${className}`
    return(
        <div className={allClass} children = {children}>
            

        </div>
    )
}

export default Popup