import React from 'react'
import '../Styles/Header/carousel.scss'
import SliderMenu from '../Components/slider'
import Button from '../Components/button'
import Banner from '../Components/banner'
import Description from '../Components/desc-para'
import {ImageContainer} from '../Components/imageContainer'
import FlexContainer from '../Components/flexContainer'




function ProfileImage(){
    const [show, setshow] = React.useState(false)
    function handleMouseEnter(){
        setshow(true)
    }

    function handleMouseLeft(){
        setshow(false)
    }

    
    

    const desc = 'Hello, I am Prabesh Gautam a 24 years old JavaScript developer from Nepal. I fell into the field of Information and Technology back in 2015. I completed my bachelors in Computer Science and Information Technology in 2019 and I have been learning web development for a year now. I acquire the fundamentals of the web development and have been sharpening the skill each day learning new things, tools and concepts'
    
    return(
        <div onMouseEnter = {handleMouseEnter}  onMouseLeave={handleMouseLeft} className='imageContainer'>
           <ImageContainer src= '/Images/blue_eyes.png' alt='prabesh potrait' className="carousel_image"/>
            {show?<Description info={desc} className='short_desc'/>:null}
     </div>
    )
}




const Carousel=({handleClickEvents, sliderStatus, visibility, })=>{

    return(
        <div className='carouselContainer'> 
        {sliderStatus?<SliderMenu handleClickEvent={handleClickEvents}/>:null}
            <ProfileImage/>
            <FlexContainer className="carouselflexContainer"> 
                <Banner title="Prabesh Gautam" subTitle="Hello, Welcome to my portfolio. "/>
                <Button name="Hire me" className="carouselbtn"/>
            </FlexContainer>
             
        </div>

    )
}

export default Carousel