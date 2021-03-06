import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Section1 from './Qualification/section1'
import Section2 from './Skills/section2'
import Section3 from '../Main_Components/Project/section3'
import Section4 from '../Main_Components/Gallery/section4'

const Main =()=>{

    React.useEffect(()=>{
        AOS.init({
            duration:1500,
        })
    })


    return(
        <main>
            <Section2 title="Skills"/>
            <Section1 title="Education"/>
            <Section3 title = 'Projects'/>
            <Section4 title='Gallery'/>

        </main>
    )
}
export default Main