import React from 'react'
import '../Styles/Components_Styles/section-title.scss'

function SectionTitle(props){
    return(
        <h1 className={`section_title ${props.className}`}> 
            {props.name.toUpperCase()}
        </h1>
        
    )
}
export default SectionTitle