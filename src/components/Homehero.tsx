import "../components/sass/Homehero.scss"

import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react";

export default function Homehero() {

    
    return (
        <div>
            <div data-scroll-container>
                <div data-scroll-section>
                    <h1 data-scroll>Hey</h1>
                    <p data-scroll>👋</p>
                </div>
                <div data-scroll-section>
                    <h2 data-scroll data-scroll-speed="1">What's up?</h2>
                    <p data-scroll data-scroll-speed="2">😬</p>
                </div>
            </div>
        </div>
    )
}