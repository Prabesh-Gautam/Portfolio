import React from 'react'
import Skills from '../../Utilities/skills.json'
import '../../Styles/Main/section2.scss'
import SectionTitle from '../../Components/section-title'
import FlexContainer from '../../Components/flexContainer'
import Desc from '../../Components/desc-para'
import Cards from '../../Components/cards'
import Popup from '../../Components/popup'
import Close from '../../Components/close-btn'
import Titletext from '../../Components/titletext'





function Section2(props){
    const [popup, setpopup] = React.useState(false)
    const [value ,setvalue] = React.useState(null)
    
    function handlepopup(event){

        popup?setpopup(false):setpopup(true);
        setvalue(Number(event.target.id))
        console.log(value)
        
    }


    
    return(
        <section className='section2'>
            <SectionTitle name={props.title}/>
            
            <Desc 
            className="sec2-quote" 
            info='"Tell me and I forget, teach me and I may remember, involve me and I learn."'
            />   
                <FlexContainer className="sec2-flexContainer">
                    {Skills.map((item)=>{
                        return(
                            <Cards dataaos='fade-right' id={item.id} key={item.id} className="sec2-cards" onClick={handlepopup}>
                                <Desc id={item.id} className="sec2-cards-desc" info={item.name} onClick={handlepopup}/>
                            </Cards>
                        )                
                    })}    
                </FlexContainer>
                
                {popup?
                <Popup className="sec2-popup">
                    <Close className="popup-close" onClick={handlepopup} />
                    <SectionTitle name ={Skills[value-1].name}/>
                    <Desc info={Skills[value-1].description} className="sec2-popup-para"></Desc>
                        <FlexContainer className='sec2-popup-container'>
                                {Skills[value-1].list.map((itemlist, index)=>{
                                    return(
                                        <Cards className='sec2-cards'>
                                             <Titletext className="sec2-popup-card-list" key={index} level='3' text={itemlist}></Titletext>
                                        </Cards>
                                        
                                        )
                                  })}
                              </FlexContainer>

                </Popup>:null}            
            
        </section>
    )
}
export default Section2