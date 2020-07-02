import React from 'react'
import '../Styles/Components_Styles/card.scss'

function Cards(props){
    return(
        <div  
        id={props.id}
        className={`cards ${props.className}`} 
        onClick={props.onClick} 
        children={props.children}>
        </div>

    )
}

export default Cards