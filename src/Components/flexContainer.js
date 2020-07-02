import React from 'react'
import '../Styles/Components_Styles/flexContainer.scss'

function FlexContainer({className, children}){
    return (
        <div className={`flexContainer ${className}`} children={children}>
            
        </div>
    )
}

export default FlexContainer