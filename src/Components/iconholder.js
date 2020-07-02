import React from 'react'
import '../Styles/Components_Styles/iconholder.scss'

function Iconholder(props){
    return(
        <>
            <span className={`iconholder ${props.className}` } ><i className={props.icon} id={props.id}></i></span>
        </>
    )
}
export default Iconholder