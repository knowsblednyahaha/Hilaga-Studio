import React from 'react'
import About from '../components/About'
import Homehero from '../components/HomepageComponents/Homehero'
import Navbar from '../components/Navbar'
import Work from '../components/Work'
import Footer from '../components/Footer'

export default function Homepage() {
    return (
        <div>
            <Navbar/>
            <Homehero/>
            {/* <About/>
            <Work/> */}
            <Footer/>
        </div>
    )
}
