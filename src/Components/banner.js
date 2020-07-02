import React from 'react'
import '../Styles/Components_Styles/banner.scss'

function Banner({title, subTitle}){
    return(
        <div className='banner'>
                    <h1>{title}</h1>
                    <h2>{subTitle}</h2>
                </div>
        
    )
}
export default Banner