import React from 'react'
import '../Styles/Components_Styles/imagecontainer.scss'

export function ImageContainer({src, alt, className}){
    return(
        <div className={`ImageContainer ${className}`} >
        <img className="Img" src={src} alt={alt}></img>
    </div>
    )
}



