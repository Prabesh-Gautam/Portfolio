import React from 'react'
import '../Styles/Components_Styles/menu.scss'




function Menu({className,items}){
    return(
        <div className={`menu ${className}`}>
            <ul>
                {items.map((item)=>{ 
                 return <li  key={item.id}>{item.menuItem}</li>                                   
                })}
        </ul>
           
        </div>
    )
}
export default Menu