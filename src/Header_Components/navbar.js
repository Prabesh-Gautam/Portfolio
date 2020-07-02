import React from 'react'
import Brand from '../Components/brand'
import NavMenu  from '../Components/menu'
import HamburgerIcon from '../Components/hamburgerIcon'
import '../Styles/Header/navbar.scss'
import menuItems from '../Utilities/menu.json'



function NavBar({menushowStatus, handleHamClick,deviceWidthStatus}){

    return (
        <nav  className='navBar'>
            <HamburgerIcon handleHamClick={handleHamClick}/>
            {menushowStatus && deviceWidthStatus>768?<NavMenu items={menuItems} className='navMenu' />:null} 
            <Brand className='navBrand'/>
        </nav>
    )
}

export default NavBar
