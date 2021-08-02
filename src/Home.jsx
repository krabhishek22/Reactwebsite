import React from 'react'
import Common from './Common';
import {NavLink} from 'react-router-dom'
import './Home.css'
import web from '../src/Images/home.png';



const Home = () => {
    return (
        <>
            <Common name = 'Grow your business with'
                    imgsrc = {web} visit='/services'
                    btname="Get Started"
             />
        </>
    )
}
export default Home;
