import React from 'react'
import Common from './Common';
import about from '../src/Images/home.png';


const About = ()=>{
  return(
    <>
            <Common name = 'Welcome to Aboute Page'
                    imgsrc = {about} visit='/contact'
                    btname="Contact Now"
             />
    </>
  )
}
export default About;
