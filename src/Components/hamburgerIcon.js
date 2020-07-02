import React from 'react'
import '../Styles/Components_Styles/hamburgericon.scss'

function HamburgerIcon({handleHamClick}){    

    return(
        <div onClick={handleHamClick} className="hamburgerIcon">
         <span className="hamIcon">&#9776;</span>
        </div>

    )
    
}

export default HamburgerIcon