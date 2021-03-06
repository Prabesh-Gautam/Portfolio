import React from 'react'
import '../../Styles/Main/section4.scss'
import SectionTitle from '../../Components/section-title'
 

function GridContainer({Images, className}){
    return(
        <div className={`gridContainer ${className}`}>
            {Images.map((item)=>{
                return(
                    <img className="gridImages" key={item.id} src={`/Images/gallery/${item.image}.jpg`} alt={Images.image} ></img>
                )
            })}

        </div>
    )
}

function Section4(props){
    const images = [
        {
        image:'image6',
        id:1
        },   
        {
            image:'image4',
            id:2
        }
    ]
    return(
        <section className='section4'>
            <SectionTitle name={props.title} className="section4-titletext"/>
            <GridContainer Images={images} className="section4-gridContainer" />
        </section>
    )
}

export default Section4