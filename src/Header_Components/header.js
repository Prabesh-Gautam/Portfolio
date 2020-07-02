import React from 'react'
import NavBar from './navbar'
import Carousel from './carousel'




function Header(){
    //managing the stage of the applications.
    const [showSlider, setshowSlider]=React.useState(false)
    const [menushow, setmenushow] = React.useState(true)
    const [deviceWidth, setdeviceWidth] = React.useState(window.innerWidth)

    //adding a eventlistener to windows to retrive the width 
    window.addEventListener('resize', function(){ 
        const width = window.innerWidth
        setdeviceWidth(width)
    })

    //creating event handlers funcitons
    function handleClosebtnClick(){
    setshowSlider(false)
    setmenushow (true)
    
    
}
    function handleHamClick(){
        showSlider?setshowSlider(false):setshowSlider(true);
        menushow?setmenushow(false):setmenushow(true)

    }
    function handleCarouselClick(){
        setshowSlider(false)
        setmenushow(true)

    }

    return (
        <header>
           <NavBar menushowStatus = {menushow} handleHamClick={handleHamClick} deviceWidthStatus={deviceWidth}/>
           <Carousel handleClickEvents={handleClosebtnClick} sliderStatus = {showSlider} handleCaroselClick={handleCarouselClick}/>    
        </header>

       
    )
}


export default Header
