import React from 'react'
import About from '../components/About'
import Homehero from '../components/Homehero'
import Navbar from '../components/Navbar'
import Work from '../components/Work'

export default function Homepage() {
    return (
        <div>
            <Navbar/>
            <Homehero/>
            <About/>
            <Work/>
        </div>
    )
}
