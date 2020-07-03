import React from 'react'
import Project from '../../Utilities/projects.json'
import '../../Styles/Main/section3.scss'
import FlexContainer from '../../Components/flexContainer'
import SectionTitle from '../../Components/section-title'
import {ImageContainer} from '../../Components/imageContainer'
import Titletext from '../../Components/titletext'
import Button from '../../Components/button'
import Cards from '../../Components/cards'

function Section3(props){
    return(
        <section className="section3">
            <SectionTitle name={props.title}/>
            <FlexContainer className="section3-mainflex">
                {Project.map((item)=>{
                    return(
                        <FlexContainer key={item.id} className="section3-subflex">
                            <ImageContainer className="project-logo" alt={`${item.name} logo`} src={`/Images/${item.logo}`} />
                            <Titletext className='main-title' level='2' text={item.name}/>
                            <Titletext className='sub-title' level='3' text={item.type}/>
                            <Button className="btn-more-details" name="Details" onClick={()=>{}} ></Button>
                        </FlexContainer>
                        
                    )
                })
                }
            </FlexContainer>


        </section>
    )
}

export default Section3