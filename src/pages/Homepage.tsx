import React from 'react'
import About from '../components/About'
import Homehero from '../components/Homehero'
import Navbar from '../components/Navbar'

export default function Homepage() {
    return (
        <div>
            <Navbar/>
            <Homehero/>
            <About/>
        </div>
    )
}
