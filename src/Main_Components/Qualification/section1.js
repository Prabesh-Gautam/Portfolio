import React from 'react'
import Cards from '../../Components/cards'
import details from '../../Utilities/education.json'
import '../../Styles/Main/section1.scss'
import Iconholder from '../../Components/iconholder'
import Description from '../../Components/desc-para'
import SectionTitle from '../../Components/section-title'
import PopUp from '../../Components/popup'
import Close from '../../Components/close-btn'
import {ImageContainer} from '../../Components/imageContainer' 
import FlexBox from '../../Components/flexContainer'
import TitleText from '../../Components/titletext'
import Desc from '../../Components/desc-para'


function Section1(props){
    const [showPopup, setshowPopup] = React.useState(false)
    const [contentIndex, setContent] = React.useState(null)

   

    function handleCardClick(event){
        console.dir(event.target)
        const extractedId=event.target.id 
        setContent(extractedId-1)
        setshowPopup(true)
        
    }
    function handleCloseClick(){
        setshowPopup(false)
        setContent(null)
    }
    return(
        <section className="section1">
                    
                    <SectionTitle name={props.title} className="section1-sectiontitle"/>
                    <FlexBox className="sec1card-flexbox">
                                    {details.map((item)=>{
                                return (
                                <Cards
                                key={item.id} 
                                id={`${item.id}`} 
                                onClick={handleCardClick} 
                                icon={item.icon} 
                                title={item.orgDetails.title} 
                                className="sec1-cards"
                                dataaos='fade-in'>
                                        <Iconholder className="sec1-cardIcon" id={item.id}  icon={item.icon}  onClick={handleCardClick}/>
                                        <Description  id={item.id} info={item.orgDetails.title} className="sec1-carddesc" onClick={handleCardClick}/>
                                </Cards>
                                )
                            })}
                    </FlexBox>
            
           
            {showPopup?
            <PopUp detail={details[contentIndex]} onClick={handleCloseClick} className="contentPopup">
                <Close className="popupClose" onClick={handleCloseClick}/>
                <SectionTitle name='Detail Information' className="section1-popupTitle"/>
                <ImageContainer className="popupImgContainer"  src={`/Images/${details[contentIndex].orgDetails.picture}`} alt={details[contentIndex].orgDetails.name} />
                <FlexBox className='popupFlex'>
                    <Cards className="popupCard">
                            <TitleText text='Institute Details' level='1' className="popuptitletext"></TitleText>
                            <Desc className="popupdesc" info={details[contentIndex].orgDetails.name}/>
                            <Desc className="popupdesc" info={details[contentIndex].orgDetails.location}/>
                            <Desc className="popupdesc" info={details[contentIndex].orgDetails.estd}/>
                    </Cards>
                    <Cards className="popupCard">
                            <TitleText text='Personal Details' level='1' className="popuptitletext"></TitleText>
                            <Desc className="popupdesc" info={`Enrolled year:${details[contentIndex].personalDetail.enrolled_year}`}/>
                            <Desc className="popupdesc" info={`Completed year:${details[contentIndex].personalDetail.completed_year}`}/>
                            <Desc className="popupdesc" info={`Aggregrate percentage:${details[contentIndex].personalDetail.percentage_acquired}`}/>
                            <Desc className="popupdesc" info={`Passed Division:${details[contentIndex].personalDetail.division}`}/>
                    </Cards>
                </FlexBox>
            </PopUp>:null}
            
 
        </section>
    )
}

export default Section1