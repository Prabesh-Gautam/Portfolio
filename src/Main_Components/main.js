import React from 'react'
import Section1 from './Qualification/section1'
import Section2 from './Skills/section2'
import Section3 from '../Main_Components/Project/section3'

const Main =()=>{
    return(
        <main>
            <Section2 title="Skills"/>
            <Section1 title="Education"/>
            <Section3 title = 'Project'/>

        </main>
    )
}
export default Main