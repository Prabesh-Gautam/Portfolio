import React from 'react'
import Social from '../Utilities/socialsites.json'
import '../Styles/Components_Styles/slider.scss'
import menuItems from '../Utilities/menu.json'
import Close from '../Components/close-btn'
import Menu from './menu'
import Flexbox from '../Components/flexContainer'
import Iconholder from '../Components/iconholder'
import Desc from '../Components/desc-para'


function SliderMenu({handleClickEvent}){
 
    return(
        <aside className="slider" >
        <Close className="closeSlider" onClick = {handleClickEvent}/>
        <Flexbox className="slider-mainflex">
            <Menu items = {menuItems} className='sliderMenu'/>
                <Flexbox className='slider-iconcontainerflex'>
                        {Social.map((item)=>{
                            return(
                                <Flexbox className="Icon-flex">
                                    <Iconholder className="slider-icons" icon={item.icon} />
                                    <Desc className='icon-desc' info={item.name}/>
                                </Flexbox>
                            )
                        })}
                </Flexbox>
        </Flexbox>
            
        </aside>
    )
}
 export default SliderMenu