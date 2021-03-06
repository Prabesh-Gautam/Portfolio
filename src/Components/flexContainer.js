import React from 'react'
import '../Styles/Components_Styles/flexContainer.scss'

function FlexContainer({className, children, dataaos}){
    return (
        <div className={`flexContainer ${className}`} children={children} data-aos={dataaos}>
            
        </div>
    )
}

export default FlexContainer