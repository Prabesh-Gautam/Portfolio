import React from 'react'

function Description({id,info, className}){
    return(
        <>    
           <p className={className} id={id}>{info}</p>
        </>
    )
}
export default Description
